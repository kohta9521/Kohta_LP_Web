import React from "react";

// scss
import styles from "./styles/Achievement.module.scss";

// components
import SectionTitle from "../atoms/SectionTitle";

const Achievement = () => {
  return (
    <div className={styles.achievement}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          stringId="#achievement"
          subTitleBoolean={true}
          subTitle="実績"
          title="これまでの制作実績"
        />
        <div className={styles.mainContents}></div>
      </div>
    </div>
  );
};

export default Achievement;
