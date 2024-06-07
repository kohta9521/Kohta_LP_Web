import type { Meta, StoryObj } from "@storybook/react";

import HeaderListItem from "../HeaderListItem";

const meta: Meta = {
  title: "Components/Atoms/HeaderListItem",
  component: HeaderListItem,
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

type HeaderListItemStory = StoryObj<typeof HeaderListItem>;

export const Default: HeaderListItemStory = {
  args: {
    id: 1,
    link: "/",
    text: "Home",
  },
};
