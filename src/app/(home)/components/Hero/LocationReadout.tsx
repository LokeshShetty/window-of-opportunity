"use client";

import { useEffect, useState } from "react";
import { LocationIcon } from "@/components/icons";
import styles from "./Hero.module.css";
import { JITTER, LAB, TICK_MS } from "./constants";
import type { Fix } from "./types";

function drift({ lat, lon }: Fix): Fix {
  const wander = (value: number, anchor: number) => {
    const next = value + (Math.random() * 2 - 1) * (JITTER / 2);
    return Math.min(anchor + JITTER, Math.max(anchor - JITTER, next));
  };
  return { lat: wander(lat, LAB.lat), lon: wander(lon, LAB.lon) };
}

export function LocationReadout() {
  const [fix, setFix] = useState<Fix>({ lat: LAB.lat, lon: LAB.lon });

  useEffect(() => {
    let timer: number | undefined;

    const start = () => {
      if (timer !== undefined) return;
      timer = window.setInterval(() => setFix(drift), TICK_MS);
    };

    const stop = () => {
      if (timer === undefined) return;
      window.clearInterval(timer);
      timer = undefined;
    };

    const onVisibilityChange = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <p className={styles.readout}>
      <LocationIcon size={12} />
      <span className={styles.readoutCity}>{LAB.city}</span>
      <span aria-hidden="true">•</span>
      <span className={styles.readoutFix}>
        {fix.lat.toFixed(4)}° N {fix.lon.toFixed(4)}° E
      </span>
    </p>
  );
}
