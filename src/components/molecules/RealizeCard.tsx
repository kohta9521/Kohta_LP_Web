import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/RealizeCard.module.scss";

// props
export type RealizeCardProps = {
  id: number;
  title: React.ReactNode;
  img: string;
  pointNumber: number;
  desc: React.ReactNode;
};

const RealizeCard = ({
  id,
  title,
  img,
  pointNumber,
  desc,
}: RealizeCardProps) => {
  return (
    <div className={styles.card} key={id}>
      {title}
      <Image
        className={styles.image}
        src={img}
        width={300}
        height={300}
        alt="realizeImage"
      />
      <p className={styles.pointNumber}>
        POINT<span className={styles.accentNumber}>{pointNumber}</span>
      </p>
      <div className={styles.descBox}>{desc}</div>
    </div>
  );
};

export default RealizeCard;
