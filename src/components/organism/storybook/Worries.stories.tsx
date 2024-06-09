import type { Meta, StoryObj } from "@storybook/react";

// component
import Worries from "../Worries";

const meta: Meta = {
  title: "Components/Organism/Worries",
  component: Worries,
  tags: ["autodocs"],
};

export default meta;

type WorriesStory = StoryObj<typeof Worries>;

export const Default: WorriesStory = {
  args: {},
};
