import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "../components/textarea/textarea";

const meta = {
  title: "Example/TextArea",
  component: TextArea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["textArea"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaStory: Story = {
  args: {
    dir: "ltr",
    tags: [
      {
        label: "FirstName",
        value: "$FirstName$",
      },
      {
        label: "LastName",
        value: "$LastName$",
      },
      {
        label: "PhoneNumber",
        value: "$PhoneNumber$",
      },
    ],
  },
};
