import type { Meta, StoryObj } from "@storybook/react";

// component
import IntroCard from "../IntroCard";

const meta: Meta = {
  title: "Components/Molecules/IntroCard",
  component: IntroCard,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "カードID",
    },
    sideBoolean: {
      control: {
        type: "boolean",
      },
      description: "左と右の画像とテキストを入れ替える",
    },
    image: {
      control: {
        type: "text",
      },
      description: "画像のパス",
    },
    bgtext: {
      control: {
        type: "text",
      },
      description: "背景色のあるタイトル",
    },
    title: {
      control: {
        type: "text",
      },
      description: "タイトル",
    },
    desc: {
      control: {
        type: "text",
      },
      description: "小要素のReact.ReactNode",
    },
    icon: {
      control: {
        type: "text",
      },
      description: "アイコンの画像",
    },
  },
};

export default meta;

type IntroCardStory = StoryObj<typeof IntroCard>;

export const Right: IntroCardStory = {
  args: {
    id: 1,
    sideBoolean: true,
    iamge: "/",
    bgtext: "",
    title: "",
    desc: <p>sample</p>,
    icon: "/",
  },
};

export const Left: IntroCardStory = {
  args: {
    id: 1,
    sideBoolean: true,
    iamge: "/",
    bgtext: "",
    title: "",
    desc: <p>sample</p>,
    icon: "/",
  },
};
