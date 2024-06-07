import type { Meta, StoryObj } from "@storybook/react";

// component
import Hero from "../Hero";

const meta: Meta = {
  title: "Components/Molecules/Hero",
  component: Hero,
  tags: ["autodocs"],
};

export default meta;

type HeroStory = StoryObj<typeof Hero>;

export const Default: HeroStory = {
  args: {},
};
