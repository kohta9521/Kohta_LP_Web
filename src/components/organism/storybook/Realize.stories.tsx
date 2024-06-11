import type { Meta, StoryObj } from "@storybook/react";

// component
import Realize from "../Realize";

const meta: Meta = {
  title: "Components/Organism/Realize",
  component: Realize,
  tags: ["autodocs"],
};

export default meta;

type RealizeStory = StoryObj<typeof Realize>;

export const Default: RealizeStory = {
  args: {},
};
