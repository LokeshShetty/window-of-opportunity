import Image from "next/image";
import { RedirectIcon } from "@/components/icons";
import styles from "./FindUs.module.css";
import { MAPS_URL } from "./constants";

export function FindUs() {
  return (
    <section className={styles.section} aria-labelledby="findus-heading">
      <h2 id="findus-heading" className={`display ${styles.heading}`}>
        A new pincode for better health.
      </h2>

      <Image
        className={styles.photo}
        src="/images/location.jpg"
        alt="The Ultrahuman Performance Lab building at dusk, Domlur, Bengaluru"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAJAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDGluI1MkKPIkKgL5S9ZD3JA68/hVUXUu0fZzFbp/dLHJPqccZ/wotPv6p9P/Zqrv8Aw/Ssr3dja3U//9k="
        width={630}
        height={468}
        sizes="(width < 48rem) 92vw, 648px"
      />

      <div className={styles.details}>
        <div className={styles.block}>
          <h3 className={`display ${styles.blockHeading}`}>Find us</h3>
          <address className={styles.address}>
            Smart Towers, HAL 2nd Stage, Domlur,
            <br />
            Bengaluru, 560008
          </address>
          <a
            className={styles.directions}
            href={MAPS_URL}
            target="_blank"

            rel="noopener noreferrer"
          >
            Get Directions
            <RedirectIcon size={16} />
          </a>
        </div>

        <div className={styles.block}>
          <h3 className={`display ${styles.blockHeading}`}>Opening hours</h3>
          <p className={styles.hours}>
            Monday &ndash; Saturday
            <br />
            11 AM &ndash; 7 PM
          </p>
        </div>
      </div>
    </section>
  );
}
