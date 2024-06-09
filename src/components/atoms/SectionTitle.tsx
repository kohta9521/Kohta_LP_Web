import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/SectionTitle.module.scss";

// props
export type SectionTitleProps = {
  id: number;
  stringId: string;
  subTitleBoolean?: boolean;
  subTitle?: React.ReactNode;
  title: React.ReactNode;
};

const SectionTitle = ({
  id,
  stringId,
  subTitleBoolean,
  subTitle,
  title,
}: SectionTitleProps) => {
  return (
    <>
      {subTitleBoolean ? (
        <div className={styles.titleBox} key={id} id={stringId}>
          <div className={styles.title}>{title}</div>
          <span className={styles.underbar}></span>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
      ) : (
        <div className={styles.titleBox} key={id} id={stringId}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.underbar}></span>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
