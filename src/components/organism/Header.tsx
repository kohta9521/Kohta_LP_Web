import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";
import HeaderListBox from "../molecules/HeaderListBox";
import HeaderListItem from "../atoms/HeaderListItem";
import HeaderListButton from "../atoms/HeaderListButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <Logo id={1} link="/" size="small" />
        </div>
        <div className={styles.rightBox}>
          <HeaderListBox>
            <HeaderListItem id={1} link="/" text="制作実績" />
            <HeaderListItem id={2} link="/" text="お客様の声" />
            <HeaderListItem id={3} link="/" text="よくある質問" />
            <HeaderListItem id={4} link="/" text="コラム" />
            <HeaderListItem id={4} link="/" text="会社概要" />
            <HeaderListButton id={5} link="/" text="無料相談・資料請求" />
          </HeaderListBox>
        </div>
      </div>
    </div>
  );
};

export default Header;
