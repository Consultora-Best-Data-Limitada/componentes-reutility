import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const CheckBox: DefineComponent<{
  boxIcon?: string;
  boxColor?: CSS.ColorProperty | CustomColor;
  checkedColor?: CSS.ColorProperty | CustomColor;
  readonly?: boolean;
  disabled?: boolean;
  boxIconSize?: CSS.FontSizeProperty<string>
  checkedIcon?: string;
  checkedIconSize?: CSS.FontSizeProperty<string>
  modelValue: boolean;
  "@update:model-value": (value: boolean) => void;
}>;
