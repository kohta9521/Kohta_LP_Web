import React from "react";

// scss
import styles from "./styles/Realize.module.scss";

// components
import RealizeCard from "../molecules/RealizeCard";

const Realize = () => {
  return (
    <div className={styles.realize}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h3 className={styles.subTitle}>
            ホームページで集客を成功させるには？
          </h3>
          <h1 className={styles.title}>
            リアライズが
            <br />
            集客を成功させる4つのポイント
          </h1>
        </div>
        <div className={styles.flexBox}>
          <RealizeCard
            id={1}
            title={
              <h2>
                どこに頼めば結果に
                <br />
                繋がるのか分からない...
              </h2>
            }
            img="/images/top/realize1.png"
            pointNumber={1}
            desc={
              <p className={styles.text}>
                お客様一人ひとりの課題と問題を丁寧にヒアリングし、これらを明確に定義します。
                <br />
                そこから問題解決に向けて導くことで結果を実現します。
                <br />
                お客様の認知度を上げ、強みと正確な情報を発信することで信頼性を高め、新規集客に繋げます。
                <br />
                ホームページ公開後も、
                <span className={styles.descAccent}>
                  情報の継続的な発信や更新が可能で、短期間だけでなく長期的に結果を出し続けることが可能です。
                </span>
              </p>
            }
          />
          <RealizeCard
            id={1}
            title={
              <h2>
                どこに頼めば結果に
                <br />
                繋がるのか分からない...
              </h2>
            }
            img="/images/top/realize2.png"
            pointNumber={2}
            desc={
              <p className={styles.text}>
                お客様一人ひとりの課題と問題を丁寧にヒアリングし、これらを明確に定義します。
                <br />
                そこから問題解決に向けて導くことで結果を実現します。
                <br />
                お客様の認知度を上げ、強みと正確な情報を発信することで信頼性を高め、新規集客に繋げます。
                <br />
                ホームページ公開後も、
                <span className={styles.descAccent}>
                  情報の継続的な発信や更新が可能で、短期間だけでなく長期的に結果を出し続けることが可能です。
                </span>
              </p>
            }
          />
        </div>
        <div className={styles.flexBox}>
          <RealizeCard
            id={1}
            title={
              <h2>
                どこに頼めば結果に
                <br />
                繋がるのか分からない...
              </h2>
            }
            img="/images/top/realize3.png"
            pointNumber={3}
            desc={
              <p className={styles.text}>
                お客様一人ひとりの課題と問題を丁寧にヒアリングし、これらを明確に定義します。
                <br />
                そこから問題解決に向けて導くことで結果を実現します。
                <br />
                お客様の認知度を上げ、強みと正確な情報を発信することで信頼性を高め、新規集客に繋げます。
                <br />
                ホームページ公開後も、
                <span className={styles.descAccent}>
                  情報の継続的な発信や更新が可能で、短期間だけでなく長期的に結果を出し続けることが可能です。
                </span>
              </p>
            }
          />
          <RealizeCard
            id={1}
            title={
              <h2>
                どこに頼めば結果に
                <br />
                繋がるのか分からない...
              </h2>
            }
            img="/images/top/realize4.png"
            pointNumber={4}
            desc={
              <p className={styles.text}>
                お客様一人ひとりの課題と問題を丁寧にヒアリングし、これらを明確に定義します。
                <br />
                そこから問題解決に向けて導くことで結果を実現します。
                <br />
                お客様の認知度を上げ、強みと正確な情報を発信することで信頼性を高め、新規集客に繋げます。
                <br />
                ホームページ公開後も、
                <span className={styles.descAccent}>
                  情報の継続的な発信や更新が可能で、短期間だけでなく長期的に結果を出し続けることが可能です。
                </span>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Realize;
