import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface PageSwitchProps {
  modelValue: boolean;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
  activeColor?: CSS.ColorProperty | CustomColor;
  width?: CSS.WidthProperty<string>;
  color?: CSS.ColorProperty | CustomColor;
  readonly?: boolean;
  labelWeight?: CSS.FontWeightProperty;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  justifyContent?: CSS.JustifyContentProperty;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const IPageSwitch: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & PageSwitchProps;
};
