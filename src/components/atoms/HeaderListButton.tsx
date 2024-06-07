import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/HeaderListButton.module.scss";

// icon
import { MdArrowForwardIos } from "react-icons/md";

// props
export type HeaderListButtonProps = {
  id: number;
  link: string;
  text: string;
};

const HeaderListButton = ({ id, link, text }: HeaderListButtonProps) => {
  return (
    <Link key={id} className={styles.button} href={link}>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
        <MdArrowForwardIos className={styles.icon} />
      </div>
    </Link>
  );
};

export default HeaderListButton;
