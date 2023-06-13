import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface SuccessDialogProps {
  text: string;
  duration?: number;
  subtitle?: string;
  modelValue: boolean;
  width?: Property.Width;
  icon: string | FigmaIconChoice;
  iconColor?: Property.Color | CustomColor;
  "@close"?: () => void;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const ISuccessDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SuccessDialogProps;
};
