import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/ContactBanner.module.scss";

// components
import ContactBannerButton from "../atoms/ContactBannerButton";

const ContactBanner = () => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.image}
        src="/images/top/contact_banner.webp"
        alt="contactBannerImage"
        width={1980}
        height={700}
      />
      <div className={styles.container}>
        <h3 className={styles.subTitle}>
          集客に繋がるホームページ制作なら
          <br />
          コードパルスにお任せください
        </h3>
        <h1 className={styles.title}>無料相談受付中！</h1>
        <div className={styles.flexBox}>
          <ContactBannerButton
            id={1}
            defaultPhoneBoolean={true}
            popupText="今なら成功集事例プレゼント！"
            mainText="無料相談・資料請求をする"
          />
          <span className={styles.centerBar}></span>
          <ContactBannerButton
            id={1}
            defaultPhoneBoolean={false}
            popupText="電話お問い合わせはコチラ！"
            mainText="090-9999-9999"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
