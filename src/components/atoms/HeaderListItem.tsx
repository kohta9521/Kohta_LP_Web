import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/HeaderListItem.module.scss";

// props
export type HeaderListItemProps = {
  id: number;
  link: string;
  text: string;
};

const HeaderListItem = ({ id, link, text }: HeaderListItemProps) => {
  return (
    <Link key={id} className={styles.item} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default HeaderListItem;
