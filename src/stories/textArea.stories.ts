import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "../components/textarea/textarea";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["Textarea"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaStory: Story = {
  args: {
    dir: "ltr",
    defaultValue: "",
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
