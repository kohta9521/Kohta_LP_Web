import type { Meta, StoryObj } from "@storybook/react";

// component
import SectionTitle from "../SectionTitle";

const meta: Meta = {
  title: "Components/Atoms/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "Component ID",
    },
    stringId: {
      control: {
        type: "text",
      },
      description: "Component ID '#'",
    },
    subTitleBoolean: {
      control: {
        type: "boolean",
      },
      description: "セクションタイトルがある場合はtrue",
    },
    subTitle: {
      control: {
        summary: "React.ReactNode",
      },
      description: "サブタイトル文字列",
    },
    title: {
      control: {
        type: "text",
      },
      description: "タイトル文字列",
    },
  },
};

export default meta;

type SectionTitleStory = StoryObj<typeof SectionTitle>;

export const Default: SectionTitleStory = {
  args: {
    id: 1,
    stringId: "section-title",
    subTitleBoolean: false,
    subTitle: (
      <p>
        実際に導入いただいたお客様からのSEO対策の成果を紹介します。
        <br />
        様々な業種、業態、サービス名での検索結果1位という実績を上げています。
      </p>
    ),
    title: "SEO対策実績",
  },
};
export const SubTitle: SectionTitleStory = {
  args: {
    id: 1,
    stringId: "section-title",
    subTitleBoolean: true,
    subTitle: (
      <p>
        実際に導入いただいたお客様からのSEO対策の成果を紹介します。
        <br />
        様々な業種、業態、サービス名での検索結果1位という実績を上げています。
      </p>
    ),

    title: "SEO対策実績",
  },
};
export const NotSubTitle: SectionTitleStory = {
  args: {
    id: 1,
    stringId: "section-title",
    subTitleBoolean: false,
    subTitle: (
      <p>
        実際に導入いただいたお客様からのSEO対策の成果を紹介します。
        <br />
        様々な業種、業態、サービス名での検索結果1位という実績を上げています。
      </p>
    ),

    title: "SEO対策実績",
  },
};
