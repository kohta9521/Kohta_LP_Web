import type { Meta, StoryObj } from "@storybook/react";

// component
import ContactBannerButton from "../ContactBannerButton";

const meta: Meta = {
  title: "Components/Atoms/ContactBannerButton",
  component: ContactBannerButton,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "Component ID",
    },
    defaultPhoneBoolean: {
      control: {
        type: "boolean",
      },
      description: "デフォルトの電話番号がある場合はtrue",
    },
    popupText: {
      control: {
        type: "text",
      },
      description: "ポップアップのテキスト",
    },
    mainText: {
      control: {
        type: "text",
      },
      description: "メインのテキスト",
    },
  },
};

export default meta;

type ContactBannerButtonStory = StoryObj<typeof ContactBannerButton>;

export const Default: ContactBannerButtonStory = {
  args: {
    id: 1,
    defaultPhoneBoolean: true,
    popupText: "お問い合わせはこちら",
    mainText: "0120-000-000",
  },
};
export const NotPhone: ContactBannerButtonStory = {
  args: {
    id: 1,
    defaultPhoneBoolean: false,
    popupText: "お問い合わせはこちら",
    mainText: "0120-000-000",
  },
};
