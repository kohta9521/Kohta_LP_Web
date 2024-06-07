import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Hero.module.scss";

// props
export type HeroProps = {
  children: React.ReactNode;
};

// components

const Hero = ({ children }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        src="/images/common/hero.webp"
        alt="hero"
        width={1980}
        height={700}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Hero;
