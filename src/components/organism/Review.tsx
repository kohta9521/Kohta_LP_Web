import React from "react";

// scss
import styles from "./styles/Review.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";
import ReviewCard from "../molecules/ReviewCard";

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
          <div className={styles.flexBox}>
            <ReviewCard
              id={1}
              image="/images/top/review1.webp"
              title="サーフィンスクール"
              text={
                <p>
                  湘南サーフィンで1番になる!!
                  <br />
                  更に生徒様を集めて、周囲のサーフィン仲間を驚かせたいと考えています。
                  <br />
                  「何したらそうなったの？」と聞かれ、「御社に頼んだからだよ！」と答え、「じゃあうちもそこに依頼する！」と言...
                </p>
              }
            />
            <ReviewCard
              id={1}
              image="/images/top/review2.webp"
              title="児童養護施設"
              text={
                <p>
                  湘南サーフィンで1番になる!!
                  <br />
                  更に生徒様を集めて、周囲のサーフィン仲間を驚かせたいと考えています。
                  <br />
                  「何したらそうなったの？」と聞かれ、「御社に頼んだからだよ！」と答え、「じゃあうちもそこに依頼する！」と言...
                </p>
              }
            />
            <ReviewCard
              id={1}
              image="/images/top/review3.webp"
              title="ピザ屋"
              text={
                <p>
                  湘南サーフィンで1番になる!!
                  <br />
                  更に生徒様を集めて、周囲のサーフィン仲間を驚かせたいと考えています。
                  <br />
                  「何したらそうなったの？」と聞かれ、「御社に頼んだからだよ！」と答え、「じゃあうちもそこに依頼する！」と言...
                </p>
              }
            />
          </div>
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
