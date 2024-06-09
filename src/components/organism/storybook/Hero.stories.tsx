import type { Meta, StoryObj } from "@storybook/react";

// component
import Hero from "../Hero";
import HeroContent from "@/components/molecules/HeroContent";

const meta: Meta = {
  title: "Components/Organism/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "Hero children",
    },
  },
};

export default meta;

type HeroStory = StoryObj<typeof Hero>;

export const Default: HeroStory = {
  args: {
    children: (
      <>
        <HeroContent />
      </>
    ),
  },
};
