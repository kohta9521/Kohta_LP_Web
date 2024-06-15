import type { Meta, StoryObj } from "@storybook/react";

// component
import Achievement from "../Achievement";

const meta: Meta = {
  title: "Components/Organism/Achievement",
  component: Achievement,
  tags: ["autodocs"],
};

export default meta;

type AchievementStory = StoryObj<typeof Achievement>;

export const Default: AchievementStory = {
  args: {},
};
