import type { Meta, StoryObj } from "@storybook/react";

// component
import ReviewCard from "../ReviewCard";

const meta: Meta = {
  title: "Components/Molecules/ReviewCard",
  component: ReviewCard,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "レビューカードのID",
    },
    image: {
      control: {
        type: "text",
      },
      description: "レビューカードの画像",
    },
    title: {
      control: {
        type: "text",
      },
      description: "レビューカードのタイトル",
    },
    text: {
      control: {
        type: "text",
      },
      description: "レビューカードのテキスト",
    },
  },
};

export default meta;

type ReviewCardStory = StoryObj<typeof ReviewCard>;

export const Default: ReviewCardStory = {
  args: {
    id: 1,
    image: "/images/top/review1.webp",
    title: "レビューカードのタイトル",
    text: (
      <p>
        湘南サーフィンで1番になる!!
        <br />
        更に生徒様を集めて、周囲のサーフィン仲間を驚かせたいと考えています。
        <br />
        「何したらそうなったの？」と聞かれ、「御社に頼んだからだよ！」と答え、「じゃあうちもそこに依頼する！」と言...
      </p>
    ),
  },
};
