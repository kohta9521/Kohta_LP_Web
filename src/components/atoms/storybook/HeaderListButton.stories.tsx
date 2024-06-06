import type { Meta, StoryObj } from "@storybook/react";

import HeaderListButton from "../HeaderListButton";

const meta: Meta = {
  title: "Components/Atoms/HeaderListButton",
  component: HeaderListButton,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "Component ID",
    },
    link: {
      control: {
        type: "text",
      },
      description: "画面遷移先のリンク",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示テキスト",
    },
  },
};

export default meta;

type HeaderListButtonStory = StoryObj<typeof HeaderListButton>;

export const Default: HeaderListButtonStory = {
  args: {
    id: 1,
    link: "/",
    text: "無料相談・資料請求",
  },
};
