import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/HeroContent.module.scss";

// components

// icon
import { IoMdMail } from "react-icons/io";

const HeroContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftBox}>
        <p className={styles.subtitle}>集客・広告の課題がこれで解決！</p>
        <h1 className={styles.title}>
          時代を勝ち抜く
          <br />
          ホームページ制作！
        </h1>
        <p className={styles.desc}>
          SEO対策に必要な機能を備えており、
          <br />
          これまでのホームページ制作では達成できなかった
          <br />
          集客や広告に関する課題を解決します。
        </p>
        <div className={styles.flexBox}>
          <ul>
            <li>
              <Image
                className={styles.flexImage}
                src="/images/top/hero_price.png"
                width={92}
                height={71}
                alt="hero topic image"
              />
              <p className={styles.title}>初期費用</p>
              <p className={styles.desc}>
                <span className={styles.accentText}>0</span>円
              </p>
            </li>
            <li>
              <Image
                className={styles.flexImage}
                src="/images/top/hero_archive.png"
                width={92}
                height={71}
                alt="hero topic image"
              />
              <p className={styles.title}>制作実績</p>
              <p className={styles.desc}>
                <span className={styles.accentText}>20</span>社以上
              </p>
            </li>
            <li>
              <Image
                className={styles.flexImage}
                src="/images/top/hero_review.png"
                width={92}
                height={71}
                alt="hero topic image"
              />
              <p className={styles.title}>お客様の声</p>
              <p className={styles.desc}>
                <span className={styles.accentText}>多数</span>
              </p>
            </li>
          </ul>
        </div>
        <Link className={styles.contactButton} href="#contact">
          <div className={styles.contactContent}>
            <IoMdMail className={styles.contactButtonIcon} />
            <p className={styles.text}>無料相談・資料請求をする</p>
          </div>
        </Link>
      </div>
      <div className={styles.rightBox}>
        <Image
          className={styles.image}
          src="/images/top/hero_device.png"
          width={690}
          height={410}
          alt="hero top image"
        />
      </div>
    </div>
  );
};

export default HeroContent;
