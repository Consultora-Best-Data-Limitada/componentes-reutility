import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface CheckBoxProps {
  readonly?: boolean;
  disabled?: boolean;
  modelValue: boolean;
  boxIconSize?: Property.FontSize;
  boxIcon?: string | FigmaIconChoice;
  checkedIconSize?: Property.FontSize;
  checkedIcon?: string | FigmaIconChoice;
  boxColor?: Property.Color | CustomColor;
  checkedColor?: Property.Color | CustomColor;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const ICheckBox: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CheckBoxProps;
};
