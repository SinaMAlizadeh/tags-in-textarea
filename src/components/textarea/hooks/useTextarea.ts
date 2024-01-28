import React, { useEffect, useRef, useState } from "react";
import { Tag } from "../type";
import { TagsConvertWithValue } from "../../../helper";

interface UseTextareaProps {
  defaultValue: string;
  tags: Array<Tag>;
  setValue: (e: string) => void;
}

export default function UseTextarea({
  defaultValue,
  tags,
  setValue,
}: UseTextareaProps) {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleContentChange = () => {
    setValue(TagsConvertWithValue(chatBoxRef?.current?.innerHTML || "", tags));
  };

  const insertTagAtCaret = (tag: HTMLElement) => {
    chatBoxRef.current?.focus();
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const spanNode = document.createElement("span");
      spanNode.className = "tag";
      spanNode.appendChild(tag);
      spanNode.setAttribute("contenteditable", "false");
      spanNode.classList.add("inserted-tag");
      range.insertNode(spanNode);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    chatBoxRef.current?.focus();
  };

  const addToDiv = (tag: Tag) => {
    const tagElement = document.createElement("span");
    tagElement.innerText = tag.label;
    const removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.onclick = () => removeTag(tagElement.parentElement);
    tagElement.appendChild(removeButton);
    insertTagAtCaret(tagElement);
    handleContentChange();
  };

  const removeTag = (spanNode: HTMLElement | null) => {
    if (spanNode && spanNode.parentNode) {
      spanNode.parentNode.removeChild(spanNode);
      handleContentChange();
    }
  };

  useEffect(() => {
    const currentChatBox = chatBoxRef.current;
    if (currentChatBox) {
      currentChatBox.innerHTML = defaultValue;
      currentChatBox.addEventListener("input", handleContentChange); // Listen for content changes
    }

    // Cleanup function to remove the event listener
    return () => {
      if (currentChatBox) {
        currentChatBox.removeEventListener("input", handleContentChange);
      }
    };
  }, [defaultValue]);

  return {
    chatBoxRef,
    addToDiv,
  };
}
