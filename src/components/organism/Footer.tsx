import React from "react";

// scss
import styles from "./styles/Footer.module.scss";

// icon

// components

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.flexBox}>
        <div className={styles.leftBox}></div>
        <div className={styles.rightBox}></div>
      </div>
      <div className={styles.bottomBox}>
        <div className={styles.snsBox}></div>
      </div>
    </div>
  );
};

export default Footer;
