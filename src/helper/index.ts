import { Tag } from "../components/textarea/type";

export const TagsConvertWithValue = (
  content: string,
  tags: Array<Tag>
): string => {
  const htmlContent = content || "";
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;

  tags.forEach((tag) => {
    const tagElements = Array.from(
      tempDiv.getElementsByClassName("inserted-tag")
    );

    tagElements.forEach((element) => {
      // Check if the child span contains the label
      const childSpan = element.querySelector("span");
      if (childSpan && childSpan.textContent?.replace("x", "") === tag.label) {
        const textNode = document.createTextNode(tag.value);
        element.parentNode?.replaceChild(textNode, element);
      }
    });
  });

  // Replace &nbsp; with a regular space
  const contentTemp = tempDiv.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
  return contentTemp.replace(/&nbsp;/g, " ");
};
