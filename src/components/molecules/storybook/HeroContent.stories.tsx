import type { Meta, StoryObj } from "@storybook/react";

// component
import HeroContent from "../HeroContent";

const meta: Meta = {
  title: "Components/Molecules/HeroContent",
  component: HeroContent,
  tags: ["autodocs"],
};

export default meta;

type HeroContentStory = StoryObj<typeof HeroContent>;

export const Default: HeroContentStory = {
  args: {},
};
