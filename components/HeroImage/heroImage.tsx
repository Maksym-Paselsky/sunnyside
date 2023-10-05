import Image from "next/image";
import styles from "./heroImage.module.scss";
export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <Image src="/images/desktop/image-header.jpg" alt="hero image" fill />
    </div>
  );
}
