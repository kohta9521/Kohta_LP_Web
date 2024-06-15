import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/AchieveCard.module.scss";

// props
export type AchieveCardProps = {
  id: number;
};

const AchieveCard = ({ id }: AchieveCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}></div>
      <div className={styles.content}>
        <p className={styles.title}></p>
        <div className={styles.flexBox}></div>
      </div>
    </div>
  );
};

export default AchieveCard;
