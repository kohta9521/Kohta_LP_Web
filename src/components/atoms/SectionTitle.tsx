import React from "react";

// scss
import styles from "./styles/SectionTitle.module.scss";

// props
export type SectionTitleProps = {
  id: number;
  stringId: string;
  subTitleBoolean?: boolean;
  subTitle?: string;
  title: string;
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
        <div key={id} id={stringId}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subTitle}>{subTitle}</p>
          <span className={styles.underbar}></span>
        </div>
      ) : (
        <div key={id} id={stringId}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.underbar}></span>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
