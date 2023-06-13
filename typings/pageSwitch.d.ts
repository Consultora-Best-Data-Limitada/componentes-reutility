import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface PageSwitchProps {
  label?: string;
  tooltip?: string;
  disabled?: boolean;
  readonly?: boolean;
  modelValue: boolean;
  width?: Property.Width;
  color?: Property.Color;
  activeColor?: Property.Color;
  labelWeight?: Property.FontWeight;
  justifyContent?: Property.JustifyContent;
  gridTemplateColumns?: Property.GridTemplateColumns;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const IPageSwitch: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & PageSwitchProps;
};
