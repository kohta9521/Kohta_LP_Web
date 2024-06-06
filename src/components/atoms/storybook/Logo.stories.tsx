import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "Component ID",
    },
    link: {
      control: {
        type: "text",
      },
      description: "画面遷移先のリンク",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "ロゴのサイズ 3段階",
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
  },
};

export const Small: LogoStory = {
  args: {
    id: 2,
    link: "/",
    size: "small",
  },
};

export const Medium: LogoStory = {
  args: {
    id: 3,
    link: "/",
    size: "medium",
  },
};

export const Large: LogoStory = {
  args: {
    id: 4,
    link: "/",
    size: "large",
  },
};
