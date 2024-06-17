import type { Meta, StoryObj } from "@storybook/react";

// component
import Footer from "../Footer";

const meta: Meta = {
  title: "Components/Organism/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

type FooterStory = StoryObj<typeof Footer>;

export const Default: FooterStory = {
  args: {},
};
