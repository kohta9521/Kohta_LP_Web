import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
  id: number;
  link: string;
  size?: "small" | "medium" | "large";
};

const Logo = ({ id, link, size = "medium" }: LogoProps) => {
  return (
    <Link key={id} className={`${styles.logo} ${styles[size]}`} href={link}>
      <Image
        className={styles.image}
        src={`/images/common/logo.webp`}
        width={200}
        height={75}
        alt="logo image"
      />
    </Link>
  );
};

export default Logo;
