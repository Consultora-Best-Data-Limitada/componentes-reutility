import type {DefineComponent} from "vue";

declare const CustomDialog: DefineComponent<{
  modelValue: boolean;
  persistent?: boolean;
  "@update:model-value": (value: boolean) => void;
}>;
