import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Worries.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";
import WorriesCard from "../molecules/WorriesCard";

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
        <div className={styles.flexBox}>
          <WorriesCard
            id={1}
            imgLink="/images/top/worries1.webp"
            title="制作費用が高い"
            desc="お客様の予算に合わせたプランをご提案いたします。"
          />
          <WorriesCard
            id={1}
            imgLink="/images/top/worries2.webp"
            title="制作費用が高い"
            desc="お客様の予算に合わせたプランをご提案いたします。"
          />
          <WorriesCard
            id={1}
            imgLink="/images/top/worries3.webp"
            title="制作費用が高い"
            desc="お客様の予算に合わせたプランをご提案いたします。"
          />
        </div>
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
