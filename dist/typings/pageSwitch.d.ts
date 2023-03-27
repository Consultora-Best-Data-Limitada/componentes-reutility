import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const PageSwitch: DefineComponent<{
  modelValue: boolean;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
  activeColor?: CSS.ColorProperty | CustomColor
  width?: CSS.WidthProperty<string>;
  color?: CSS.ColorProperty | CustomColor;
  readonly?: boolean;
  labelWeight?: CSS.FontWeightProperty;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  justifyContent?: CSS.JustifyContentProperty;
  "@update:model-value": (value: boolean) => void;
}>;
