import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/ReviewCard.module.scss";

// types
export type ReviewCardProps = {
  id: number;
  image: string;
  title: string;
  text: React.ReactNode;
};

const ReviewCard = ({ id, image, title, text }: ReviewCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src={image}
          width={300}
          height={200}
          alt="口コミの画像"
        />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>{title}</h2>
        {text}
      </div>
    </div>
  );
};

export default ReviewCard;
