import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface ConfirmationDialogProps {
  title: string;
  subtitle?: string;
  modelValue: boolean;
  width?: Property.Width;
  "@click:no"?: () => void;
  "@click:yes"?: () => void;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const IConfirmationDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ConfirmationDialogProps;
};
