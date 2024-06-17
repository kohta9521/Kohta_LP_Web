import React from "react";

// scss
import styles from "./styles/Intro.module.scss";

// components

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2 className={styles.subTitle}>
            私達はホームページで成功する為の仕組みを知り尽くしたプロフェッショナル集団です！
            <br />
            集客・実績を出し続けてきた秘密がここにあります。
          </h2>
          <h1 className={styles.title}>リアライズの最先端の機能を紹介</h1>
        </div>
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default Intro;
