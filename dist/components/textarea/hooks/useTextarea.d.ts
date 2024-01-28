import React from "react";
import { Tag } from "../type";
interface UseTextareaProps {
    defaultValue: string;
    tags: Array<Tag>;
    setValue: (e: string) => void;
}
export default function UseTextarea({ defaultValue, tags, setValue, }: UseTextareaProps): {
    chatBoxRef: React.MutableRefObject<HTMLDivElement>;
    addToDiv: (tag: Tag) => void;
};
export {};
