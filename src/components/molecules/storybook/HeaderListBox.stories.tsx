import type { Meta, StoryObj } from "@storybook/react";

import HeaderListBox from "../HeaderListBox";
import HeaderListItem from "../../atoms/HeaderListItem";

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
    children: <HeaderListItem id={1} link="/" text="Home" />,
  },
};
