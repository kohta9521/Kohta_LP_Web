import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// component
import Header from "../Header";

const meta = {
  title: "components/organism/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
const Template = () => <Header />;

export const Default = Template.bind({});
