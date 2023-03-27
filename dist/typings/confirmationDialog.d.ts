import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface ConfirmationDialogProps {
  title: string;
  subtitle?: string;
  modelValue: boolean;
  width?: CSS.WidthProperty<string>;
  "@click:no"?: () => void;
  "@click:yes"?: () => void;
  "@update:model-value": (value: boolean) => void;
}

export declare const IConfirmationDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ConfirmationDialogProps;
};
