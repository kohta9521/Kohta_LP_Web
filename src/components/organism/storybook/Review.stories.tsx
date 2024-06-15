import type { Meta, StoryObj } from "@storybook/react";

// component
import Review from "../Review";

const meta: Meta = {
  title: "Components/Organism/Review",
  component: Review,
  tags: ["autodocs"],
};

export default meta;

type ReviewStory = StoryObj<typeof Review>;

export const Default: ReviewStory = {
  args: {},
};
