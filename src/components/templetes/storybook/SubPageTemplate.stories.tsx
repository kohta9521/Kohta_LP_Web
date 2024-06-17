import type { Meta, StoryObj } from "@storybook/react";

// component
import SubPageTemplate from "../SubPageTemplate";

const meta: Meta = {
  title: "Components/Template/SubPageTemplate",
  component: SubPageTemplate,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "templateのID",
    },
    image: {
      control: {
        type: "text",
      },
      description: "画像のURL",
    },
    jaTitle: {
      control: {
        type: "text",
      },
      description: "日本語タイトル",
    },
    enTitle: {
      control: {
        type: "text",
      },
      description: "英語タイトル",
    },
    children: {
      control: {
        type: "text",
      },
      description: "小要素",
    },
  },
};

export default meta;

type SubPageTemplateStory = StoryObj<typeof SubPageTemplate>;

export const Default: SubPageTemplateStory = {
  args: {
    id: 1,
    image: "/",
    jaTitle: "サイト概要",
    enTitle: "About",
    children: <h1>sample code</h1>,
  },
};
