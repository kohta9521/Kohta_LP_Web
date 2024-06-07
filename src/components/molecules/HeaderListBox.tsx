import React from "react";

// scss
import styles from "./styles/HeaderListBox.module.scss";

// props
export type HeaderListBoxProps = {
  children: React.ReactNode;
};

// components

const HeaderListBox = ({ children }: HeaderListBoxProps) => {
  return <div className={styles.listBox}>{children}</div>;
};

export default HeaderListBox;
