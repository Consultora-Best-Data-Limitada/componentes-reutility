import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface CustomTextFieldProps {
  dark?: string;
  mask?: string;
  disabled?: boolean;
  outlined?: boolean;
  readonly?: boolean;
  placeholder: string;
  clearable?: boolean;
  maskTokens?: string;
  errorMessage?: string;
  modelValue?: string | number;
  type?: "email" | "phone" | "text" | "time" | "password";
  "@blur"?: (ev: FocusEvent) => void;
  "@focus"?: (ev: FocusEvent) => void;
  "@keyup"?: (ev: KeyboardEvent) => void;
  "@input"?: (ev: KeyboardEvent) => void;
  "@keydown"?: (ev: KeyboardEvent) => void;
  "@update:model-value"?: (value: string | number) => void;
}

export declare const ICustomTextField: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomTextFieldProps;
  $slots: {
    append?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
