import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Worries.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";

const Worries = () => {
  return (
    <div className={styles.worries}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          stringId="Web集客やホームページで
          このようなお悩みはございませんか？"
          subTitleBoolean={false}
          title={
            <h1>
              Web集客やホームページで
              <br />
              このようなお悩みはございませんか？
            </h1>
          }
        />
        <div className={styles.flexBox}></div>
        <div className={styles.solutionBox}>
          <span className={styles.triangleBox}></span>
          <Image
            className={styles.solutionBoxImage}
            src="/images/top/solution.webp"
            alt="underbar"
            width={2000}
            height={450}
          />
          <h2 className={styles.solutionTitle}>
            ホームページ制作のお悩み
            <br />
            リアライズが解決！
          </h2>
          <p className={styles.solutionText}>
            お客様の個々の課題と問題をヒアリングし、
            <br />
            これまでの実績と蓄積したノウハウを基に新規集客につながるホームページ制作を行います。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Worries;
