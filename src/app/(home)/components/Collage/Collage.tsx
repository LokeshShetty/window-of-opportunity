import Image from "next/image";
import { AmbientVideo } from "@/components/AmbientVideo/AmbientVideo";
import type { CSSProperties } from "react";
import { collageCentre, collageTiles, STAGE_RATIO } from "./data";
import styles from "./Collage.module.css";

export function Collage() {
  return (
    <section className={styles.collage} id="collage">
      <div
        className={styles.stage}
        style={{ "--stage-ratio": STAGE_RATIO } as CSSProperties}
      >
        <div
          className={styles.centre}
          style={
            {
              "--x": collageCentre.x,
              "--y": collageCentre.y,
              "--w": collageCentre.w,
              "--ratio": collageCentre.ratio,
            } as CSSProperties
          }
        >
          <AmbientVideo
            className={styles.centreMedia}
            src={collageCentre.src}
            poster="/images/hero-poster.jpg"
            preload="none"
          />
        </div>

        {collageTiles.map((tile, i) => (
          <figure
            key={tile.src}
            className={styles.tile}
            style={
              {
                "--x": tile.x,
                "--y": tile.y,
                "--w": tile.w,
                "--ratio": tile.ratio,
                "--t": i / collageTiles.length,
              } as CSSProperties
            }
          >
            <Image
              className={styles.tileMedia}
              src={tile.src}
              alt={tile.alt}
              fill
              placeholder="blur"
              blurDataURL={tile.blur}
              sizes="(width < 48rem) 45vw, 14vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
