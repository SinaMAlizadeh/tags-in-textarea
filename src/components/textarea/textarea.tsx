import React from "react";
import "../../components/textarea/textarea.style.css";
import { Props, Tag } from "./type";
import TagsButton from "../tagsButton";
import UseTextarea from "./hooks/useTextarea";

export function Textarea({
  dir = "ltr",
  tags,
  defaultValue = "",
  setValue,
}: Props) {
  const { addToDiv, chatBoxRef } = UseTextarea({
    defaultValue,
    tags,
    setValue,
  });

  return (
    <>
      <div className="textarea-content" dir={dir}>
        <div className="tags-list-button">
          {tags.map((tag, index) => (
            <TagsButton addToDiv={addToDiv} tag={tag} key={index} />
          ))}
        </div>
        <div
          id="chatBox"
          ref={chatBoxRef}
          contentEditable
          className="chatBox"
        ></div>
      </div>
    </>
  );
}
