import { PillButton } from "@/components/PillButton/PillButton";
import { HERO_ACTIONS } from "./constants";
import { AmbientVideo } from "@/components/AmbientVideo/AmbientVideo";
import { LocationReadout } from "./LocationReadout";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <AmbientVideo
        className={styles.media}
        src="/video/hero_video.mp4"
        poster="/images/hero-poster.jpg"
      />

      <div className={styles.content}>
        <h1 className={`display ${styles.headline}`}>Performance Lab</h1>
        <p className={styles.lede}>
          Experience the Future Of Human Performance
        </p>

        <div className={styles.actions}>
          {HERO_ACTIONS.map(({ label, href, variant }) => (
            <PillButton key={label} href={href} variant={variant}>
              {label}
            </PillButton>
          ))}
        </div>
      </div>

      <LocationReadout />
    </section>
  );
}
