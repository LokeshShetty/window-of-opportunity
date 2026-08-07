"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChatIcon, CloseIcon } from "@/components/icons";
import styles from "./BookTourPill.module.css";
import { EXIT_MS, STORAGE_KEY } from "./constants";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    // Safari private mode can throw on access; unread = show the pill
    return false;
  }
}

function getServerSnapshot(): boolean {
  return true;
}

function notify() {
  for (const listener of listeners) listener();
}

function commitDismissal() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // best-effort; still hidden for this session
  }
  notify();
}

/* Clears the dismissal so the pill returns. */
function restore() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to clear if storage was unavailable to write to in the first place.
  }
  notify();
}

/*
 * Pill + chat button share the dock because the chat button must not move
 * when the pill is dismissed.
 */
export function BookTourPill() {
  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [leaving, setLeaving] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  // let the exit animation finish before unmounting
  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(commitDismissal, EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  /* Closes on any pointerdown outside the dock (fires before click; covers touch). */
  useEffect(() => {
    if (dismissed) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!dockRef.current?.contains(e.target as Node)) setLeaving(true);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [dismissed]);

  return (
    <div ref={dockRef} className={styles.dock}>
      {dismissed ? null : (
        <div
          className={styles.pill}
          data-state={leaving ? "leaving" : "shown"}
          // complementary: traps no focus, demands no response
          role="complementary"
          aria-label="Book a tour"
        >
          <a className={styles.action} href="#findus-heading">
            <Image
              className={styles.thumb}
              src="/images/location.jpg"
              alt=""
              width={112}
              height={112}
              sizes="56px"
            />
            <span className={styles.label}>Book a Tour</span>
          </a>

          <button
            type="button"
            className={styles.dismiss}
            onClick={() => setLeaving(true)}
            aria-label="Dismiss the book a tour prompt"
          >
            <CloseIcon size={10} />
          </button>
        </div>
      )}

      {/* Toggles the pill; there is no chat service behind the bubble. */}
      <button
        type="button"
        className={styles.chat}
        onClick={() => {
          if (dismissed) {
            setLeaving(false);
            restore();
          } else {
            setLeaving(true);
          }
        }}
        aria-label={
          dismissed
            ? "Show the book a tour prompt"
            : "Hide the book a tour prompt"
        }
        aria-expanded={!dismissed}
      >
        <ChatIcon size={24} />
      </button>
    </div>
  );
}
