import React from "react";
import { Tag } from "../textarea/type";

interface TagsButtonProps {
  tag: Tag;
  addToDiv: (e: Tag) => void;
}

function TagsButton({ tag, addToDiv }: TagsButtonProps) {
  return (
    <button type="button" className="tags-button" onClick={() => addToDiv(tag)}>
      {tag.label}
    </button>
  );
}

export default TagsButton;
