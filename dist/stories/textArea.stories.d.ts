import type { StoryObj } from "@storybook/react";
import { Textarea } from "../components/textarea/textarea";
declare const meta: {
    title: string;
    component: typeof Textarea;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TextAreaStory: Story;
