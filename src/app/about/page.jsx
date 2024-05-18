import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Veritatis obcaecati tenetur iure eius earum ut molestias architecto
          voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
          sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
          quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga?
          Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
          expedita sint? Sed quibusdam recusandae alias error harum maxime
          adipisci amet laborum.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Hours of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
