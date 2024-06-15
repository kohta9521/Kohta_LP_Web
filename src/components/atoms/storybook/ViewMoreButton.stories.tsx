import type { Meta, StoryObj } from "@storybook/react";

// component
import ViewMoreButton from "../ViewMoreButton";

const meta: Meta = {
  title: "Components/Atoms/ViewMoreButton",
  component: ViewMoreButton,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "Component ID",
    },
    stringId: {
      control: {
        type: "text",
      },
      description: "Component ID '#'",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示テキスト",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先URL",
    },
  },
};

export default meta;

type ViewMoreButtonStory = StoryObj<typeof ViewMoreButton>;

export const Default: ViewMoreButtonStory = {
  args: {
    id: 1,
    stringId: "view-more-button",
    text: "もっと見る",
    link: "/",
  },
};
