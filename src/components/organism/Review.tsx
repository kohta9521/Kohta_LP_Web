import React from "react";

// scss
import styles from "./styles/Review.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";

const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.container}>
        <SectionTitle
          id={5}
          stringId="#achievement"
          subTitleBoolean={true}
          subTitle={
            <p>
              ホームページを導入いただいたお客様からの声を紹介します。
              <br />
              ホームページ経由でのお問い合わせや売上向上につながったという多くの声を頂戴しています。
            </p>
          }
          title="お客様の声"
        />
        <div className={styles.content}>
          <div className={styles.flexBox}></div>
          <ViewMoreButton
            id={3}
            stringId="more"
            link="/"
            text="お客様の声一覧へ"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
