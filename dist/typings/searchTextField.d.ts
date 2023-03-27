import type { DefineComponent } from "vue";

declare const SearchTextField: DefineComponent<{
  placeholder: string;
  modelValue?: string;
  "@update:model-value": (value: string) => void;
}>;
