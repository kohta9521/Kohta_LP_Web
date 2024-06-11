import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ContactBannerButton.module.scss";

// icons
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

// props
export type ContactBannerButtonProps = {
  id: number;
  defaultPhoneBoolean: boolean;
  popupText: string;
  mainText: string;
};

const ContactBannerButton = ({
  id,
  defaultPhoneBoolean = false,
  popupText,
  mainText,
}: ContactBannerButtonProps) => {
  return (
    <>
      {defaultPhoneBoolean ? (
        <Link href="/" className={styles.button1} key={id}>
          <div className={styles.popupBox}>
            <p className={styles.popupText}>{popupText}</p>
          </div>
          <div className={styles.textBox}>
            <IoMdMail className={styles.icon} />
            <p className={styles.text}>{mainText}</p>
          </div>
        </Link>
      ) : (
        <div className={styles.buttonBox}>
          <Link href="" className={styles.button2} key={id}>
            <div className={styles.popupBox}>
              <p className={styles.popupText}>{popupText}</p>
            </div>
            <div className={styles.textBox}>
              <FaPhone className={styles.icon} />
              <p className={styles.text}>{mainText}</p>
            </div>
          </Link>
          <p className={styles.underText}>
            営業時間 9:00~18:00（土日祝を除く）
          </p>
        </div>
      )}
    </>
  );
};

export default ContactBannerButton;
