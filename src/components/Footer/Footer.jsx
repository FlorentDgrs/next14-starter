import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>florentdev</div>
      <div className={styles.text}>
        Florent Creative agency © All rigths reserved.
      </div>
    </div>
  );
};

export default Footer;
