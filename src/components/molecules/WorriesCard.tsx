import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/WorriesCard.module.scss";

// props
export type WorriesCardProps = {
  id: number;
  imgLink: string;
  title: React.ReactNode;
  desc: React.ReactNode;
};

const WorriesCard = ({ id, imgLink, title, desc }: WorriesCardProps) => {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.problemBox}>
        <p className={styles.text}>oneproblem</p>
      </div>
      <Image
        className={styles.image}
        width={300}
        height={300}
        src={imgLink}
        alt="worriesImage"
      />
      <div className={styles.textBox}>
        {desc}
        {title}
      </div>
    </div>
  );
};

export default WorriesCard;
