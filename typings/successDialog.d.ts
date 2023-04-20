import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface SuccessDialogProps {
  text: string;
  duration?: number;
  modelValue: boolean;
  subtitle?: string;
  icon: string | FigmaIconChoice;
  width?: CSS.WidthProperty<string>;
  iconColor?: CSS.ColorProperty | CustomColor;
  "@close"?: () => void;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const ISuccessDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SuccessDialogProps;
};
