import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const SuccessDialog: DefineComponent<{
  icon: string;
  text: string;
  duration?: number;
  modelValue: boolean;
  subtitle?: string;
  width?: CSS.WidthProperty<string>;
  "@close": () => void;
  "@update:model-value": (value: boolean) => void;
}>;
