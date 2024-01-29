# React Tags In Textarea

Enhance your projects with our intuitive tagging package, designed for seamless integration into your text content. Effortlessly define and embed customizable tags amidst text, providing users with the flexibility to craft and annotate their narratives. Ideal for organizing, highlighting, or categorizing text elements, our package empowers you to enrich your content, making it more interactive and informative. Perfect for developers seeking to add dynamic tagging capabilities to their React applications.

## Installation

The package can be installed via NPM:

```
npm i react-tags-in-textarea
```

## Usage

Import Textarea for usage :

```js
import { Textarea } from "react-tags-in-textarea";
```

Define your Textarea and config :

```js
<Textarea
  defaultValue="my text"
  setValue={(value) => setValue(value)}
  dir="ltr"
  tags={[
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
  ]}
/>
```

## User guide

| Prop name    | Description                                                          | Default value    | Example values                    |
| ------------ | -------------------------------------------------------------------- | ---------------- | --------------------------------- | ----- |
| dir          | Direction of text content                                            | ltr              | "rtl"                             | "rtl" |
| tags         | Tags you define and user see as button to add into text - Array<Tag> | []               | [{ label: string;value: string;}] |
| defaultValue | Default value import in text in first render                         | Optional         | "my first Text"                   |
| setValue     | Function to call every time text change in textarea                  | (e: Tag) => void |                                   |

## Style

You can add style with className "textarea-content" , "tags-list-button" , "tags-button" , "tag" , "chatBox"
