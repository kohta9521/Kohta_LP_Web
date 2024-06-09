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
        type: "text",
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
    subTitle: "サブタイトル",
    title: "タイトル",
  },
};
export const SubTitle: SectionTitleStory = {
  args: {
    id: 1,
    stringId: "section-title",
    subTitleBoolean: true,
    subTitle: "サブタイトル",
    title: "タイトル",
  },
};
export const NotSubTitle: SectionTitleStory = {
  args: {
    id: 1,
    stringId: "section-title",
    subTitleBoolean: false,
    subTitle: "サブタイトル",
    title: "タイトル",
  },
};
