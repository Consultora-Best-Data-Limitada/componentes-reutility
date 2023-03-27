import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CustomDialogProps {
  modelValue: boolean;
  persistent?: boolean;
  "@update:model-value"?: (value: boolean) => void;
}

export declare const ICustomDialog: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomDialogProps;
};
