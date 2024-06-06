import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <Logo id={1} link="/" size="small" />
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Header;
