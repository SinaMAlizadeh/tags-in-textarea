import React from "react";
import { Tag } from "../textarea/type";
interface TagsButtonProps {
    tag: Tag;
    addToDiv: (e: Tag) => void;
}
declare function TagsButton({ tag, addToDiv }: TagsButtonProps): React.JSX.Element;
export default TagsButton;
