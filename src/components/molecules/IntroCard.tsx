import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/IntroCard.module.scss";

// props
export type IntroCardProps = {
  id: number;
  sideBoolean: boolean;
  image: string;
  bgtext: string;
  title: string;
  desc: React.ReactNode;
  icon: string;
};

const IntroCard = ({
  id,
  sideBoolean,
  image,
  bgtext,
  title,
  desc,
  icon,
}: IntroCardProps) => {
  {
    sideBoolean ? (
      <div className={styles.box} key={id}>
        <div className={styles.textBox}>
          <p className={styles.bg}>{bgtext}</p>
          <h3 className={styles.title}>{title}</h3>
          {desc}
        </div>
        <div className={styles.imageBox}>
          <Image
            className={styles.topimage}
            src={image}
            width={475}
            height={320}
            alt="topimage"
          />
          <Image
            className={styles.icon}
            src={icon}
            width={190}
            height={160}
            alt="iconImage"
          />
        </div>
      </div>
    ) : (
      <div className={styles.box}>
        <div className={styles.imageBox}>
          <Image
            className={styles.topimage}
            src={image}
            width={475}
            height={320}
            alt="topimage"
          />
          <Image
            className={styles.icon}
            src={icon}
            width={190}
            height={160}
            alt="iconImage"
          />
        </div>
        <div className={styles.textBox}>
          <p className={styles.bg}>{bgtext}</p>
          <h3 className={styles.title}>{title}</h3>
          {desc}
        </div>
      </div>
    );
  }
};

export default IntroCard;
