import type { Meta, StoryObj } from "@storybook/react";

// component
import HeaderListBox from "../HeaderListBox";
import HeaderListItem from "../../atoms/HeaderListItem";
import HeaderListButton from "@/components/atoms/HeaderListButton";

const meta: Meta = {
  title: "Components/Molecules/HeaderListBox",
  component: HeaderListBox,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "HeaderListBox children",
    },
  },
};

export default meta;

type HeaderListBoxStory = StoryObj<typeof HeaderListBox>;

export const Default: HeaderListBoxStory = {
  args: {
    children: (
      <>
        <HeaderListItem id={1} link="/" text="制作実績" />
        <HeaderListItem id={2} link="/" text="お客様の声" />
        <HeaderListItem id={3} link="/" text="よくある質問" />
        <HeaderListItem id={4} link="/" text="コラム" />
        <HeaderListItem id={4} link="/" text="会社概要" />
        <HeaderListButton id={5} link="/" text="無料相談・資料請求" />
      </>
    ),
  },
};
