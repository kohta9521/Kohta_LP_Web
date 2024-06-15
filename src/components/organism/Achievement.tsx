import React from "react";

// scss
import styles from "./styles/Achievement.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";
import ViewMoreButton from "../atoms/ViewMoreButton";
import AchieveCard from "../molecules/AchieveCard";

const Achievement = () => {
  return (
    <div className={styles.achievement}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          stringId="#achievement"
          subTitleBoolean={true}
          subTitle={
            <p>
              建設業、士業、介護業、美容業、健康業など、様々な業種のホームページ制作実績があります。
              <br />
              「かっこいいホームページが欲しい」「おしゃれなデザインにしたい」「シンプルなテイストがいい」など、
              <br />
              お客様のイメージに合ったデザインでホームページ制作が可能です。
            </p>
          }
          title="ホームページ制作実績"
        />
        <div className={styles.mainContents}>
          <div className={styles.flexBox}>
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
          </div>
          <div className={styles.flexBox}>
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
            <AchieveCard
              id={1}
              image_pc="/"
              image_phone="/"
              title="スタートアップ企業"
              link="/"
            />
          </div>
          <ViewMoreButton
            id={1}
            stringId="more"
            link="/"
            text="制作実績をもっと見る"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
