import React from "react";

// scss
import styles from "./styles/Seo.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";

const Seo = () => {
  return (
    <div className={styles.seo}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          stringId="#achievement"
          subTitleBoolean={true}
          subTitle={
            <p>
              実際に導入いただいたお客様からのSEO対策の成果を紹介します。
              <br />
              様々な業種、業態、サービス名での検索結果1位という実績を上げています。
            </p>
          }
          title="SEO対策実績"
        />
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default Seo;
