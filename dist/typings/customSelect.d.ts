import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const CustomSelect: DefineComponent<{
  errorMessage?: string;
  placeholder: string;
  itemValue?: string;
  itemTitle?: string;
  returnObject?: boolean;
  clearable?: boolean;
  textMultiple?: string;
  items: unknown[]
  textTransform?: CSS.TextTransformProperty
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: string | number | Record<string, any> | unknown[] | null;
  outlined?: boolean;
  searchable?: boolean;
  dark?: boolean;
  "@update:model-value": (value: string | number | Record<string, any> | unknown[] | null) => void;
}>;
