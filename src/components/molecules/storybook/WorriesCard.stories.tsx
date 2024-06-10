import type { Meta, StoryObj } from "@storybook/react";

// component
import WorriesCard from "../WorriesCard";

const meta: Meta = {
  title: "Components/Molecules/WorriesCard",
  component: WorriesCard,
  tags: ["autodocs"],
};

export default meta;

type WorriesCardStory = StoryObj<typeof WorriesCard>;

export const Default: WorriesCardStory = {
  args: {
    id: 1,
    imgLink: "/images/top/worries1.webp",
    desc: (
      <p>
        ホームページ制作を考えて
        <br />
        制作会社を探してみたものの
      </p>
    ),
    title: (
      <h2>
        どこに頼めば結果に
        <br />
        繋がるのか分からない...
      </h2>
    ),
  },
};
