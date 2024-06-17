import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/SubPageTemplate.module.scss";

// components
import Footer from "../organism/Footer";

// props
export type SubPageTemplateProps = {
  id: number;
  image: string;
  jaTitle: string;
  enTitle: string;
  children: React.ReactNode;
};

const SubPageTemplate = ({
  id,
  image,
  jaTitle,
  enTitle,
  children,
}: SubPageTemplateProps) => {
  return (
    <div className={styles.main} key={id}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src={image}
          width={2000}
          height={500}
          alt="topimage"
        />
        <div className={styles.textBox}>
          <p className={styles.jaTitle}>{jaTitle}</p>
          <h1 className={styles.enTitle}>{enTitle}</h1>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default SubPageTemplate;
