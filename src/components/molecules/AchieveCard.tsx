import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/AchieveCard.module.scss";

// props
export type AchieveCardProps = {
  id: number;
  image_pc: string;
  image_phone: string;
  title: string;
  link: string;
};

const AchieveCard = ({
  id,
  image_pc,
  image_phone,
  title,
  link,
}: AchieveCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imageBox}>
        <Image
          className={styles.pc_image}
          width={300}
          height={254}
          src={image_pc}
          alt="achieveImage"
        />
        <Image
          className={styles.phone_image}
          width={100}
          height={200}
          src={image_phone}
          alt="achieveImage"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <Link href={link} className={styles.link}>
          <p className={styles.text}>サイトへ</p>
        </Link>
      </div>
    </div>
  );
};

export default AchieveCard;
