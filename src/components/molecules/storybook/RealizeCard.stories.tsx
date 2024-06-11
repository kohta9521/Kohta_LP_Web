import type { Meta, StoryObj } from "@storybook/react";

// component
import RealizeCard from "../RealizeCard";

// scss
import styles from "../styles/RealizeCard.module.scss";

const meta: Meta = {
  title: "Components/Molecules/RealizeCard",
  component: RealizeCard,
  tags: ["autodocs"],
};

export default meta;

type RealizeCardStory = StoryObj<typeof RealizeCard>;

export const Default: RealizeCardStory = {
  args: {
    id: 1,
    title: (
      <h2>
        どこに頼めば結果に
        <br />
        繋がるのか分からない...
      </h2>
    ),
    img: "/images/top/realize1.png",
    pointNumber: 1,
    desc: (
      <p className={styles.text}>
        お客様一人ひとりの課題と問題を丁寧にヒアリングし、これらを明確に定義します。
        <br />
        そこから問題解決に向けて導くことで結果を実現します。
        <br />
        お客様の認知度を上げ、強みと正確な情報を発信することで信頼性を高め、新規集客に繋げます。
        <br />
        ホームページ公開後も、
        <span className={styles.descAccent}>
          情報の継続的な発信や更新が可能で、短期間だけでなく長期的に結果を出し続けることが可能です。
        </span>
      </p>
    ),
  },
};
