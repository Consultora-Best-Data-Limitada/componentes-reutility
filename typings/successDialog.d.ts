import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface SuccessDialogProps {
  icon: string;
  text: string;
  duration?: number;
  modelValue: boolean;
  subtitle?: string;
  width?: CSS.WidthProperty<string>;
  "@close"?: () => void;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const ISuccessDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SuccessDialogProps;
};
