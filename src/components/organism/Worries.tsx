import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Worries.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";
import WorriesCard from "../molecules/WorriesCard";
import { RiH1 } from "react-icons/ri";

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
            title={
              <p>
                ホームページ制作を考えて
                <br />
                制作会社を探してみたものの
              </p>
            }
            desc={
              <h1>
                どこに頼めば結果に
                <br />
                繋がるのか分からない...
              </h1>
            }
          />
          <WorriesCard
            id={1}
            imgLink="/images/top/worries2.webp"
            title={
              <p>
                ホームページを
                <br />
                制作してみたものの
              </p>
            }
            desc={
              <h1>
                ホームページからの
                <br />
                反響が全くない...
              </h1>
            }
          />
          <WorriesCard
            id={1}
            imgLink="/images/top/worries3.webp"
            title={
              <p>
                ポータルサイトの掲載や
                <br />
                チラシの配布をしてみたものの
              </p>
            }
            desc={
              <h1>
                集客・売上に繋がらず、
                <br />
                他に方法が分からない...
              </h1>
            }
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
            コードパルスが解決！
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
