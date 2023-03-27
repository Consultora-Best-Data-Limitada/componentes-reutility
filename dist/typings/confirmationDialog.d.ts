import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const ConfirmationDialog: DefineComponent<{
  title: string;
  subtitle?: string;
  modelValue: boolean;
  width?: CSS.WidthProperty<string>;
  "@click:no": () => void;
  "@click:yes": () => void;
  "@update:model-value": (value: boolean) => void;
}>;
