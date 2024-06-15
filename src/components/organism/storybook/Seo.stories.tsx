import type { Meta, StoryObj } from "@storybook/react";

// component
import Seo from "../Seo";

const meta: Meta = {
  title: "Components/Organism/Seo",
  component: Seo,
  tags: ["autodocs"],
};

export default meta;

type SeoStory = StoryObj<typeof Seo>;

export const Default: SeoStory = {
  args: {},
};
