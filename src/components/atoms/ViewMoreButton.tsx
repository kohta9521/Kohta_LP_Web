import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ViewMoreButton.module.scss";

// props
export type ViewMoreButtonProps = {
  id: number;
  stringId: string;
  text: string;
  link: string;
};

const ViewMoreButton = ({ id, stringId, text, link }: ViewMoreButtonProps) => {
  return (
    <Link key={id} className={styles.button} id={stringId} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ViewMoreButton;
