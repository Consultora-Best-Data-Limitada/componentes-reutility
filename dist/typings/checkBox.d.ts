import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CheckBoxProps {
  boxIcon?: string;
  boxColor?: CSS.ColorProperty | CustomColor;
  checkedColor?: CSS.ColorProperty | CustomColor;
  readonly?: boolean;
  disabled?: boolean;
  boxIconSize?: CSS.FontSizeProperty<string>;
  checkedIcon?: string;
  checkedIconSize?: CSS.FontSizeProperty<string>;
  modelValue: boolean;
  "@update:model-value": (value: boolean) => void;
}

export declare const ICheckBox: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CheckBoxProps;
};
