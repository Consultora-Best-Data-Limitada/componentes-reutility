import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FormTextFieldProps {
  label: string;
  mask?: string;
  dark?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  placeholder: string;
  clearable?: boolean;
  maskTokens?: string;
  errorMessage?: string;
  modelValue?: string | number;
  gridTemplateColumns?: Property.GridTemplateColumns;
  type?: "email" | "phone" | "text" | "time" | "password";
  "@blur"?: (ev: FocusEvent) => void;
  "@focus"?: (ev: FocusEvent) => void;
  "@keyup"?: (ev: KeyboardEvent) => void;
  "@input"?: (ev: KeyboardEvent) => void;
  "@keydown"?: (ev: KeyboardEvent) => void;
  "@update:model-value"?: (value: string | number) => void;
}

export declare const IFormTextField: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormTextFieldProps;
  $slots: {
    append?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
