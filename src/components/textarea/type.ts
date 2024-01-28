export interface Tag {
  label: string;
  value: string;
}

export type Props = {
  dir?: "rtl" | "ltr";
  tags: Array<Tag>;
  defaultValue?: string;
  setValue: (e: string) => void;
};
