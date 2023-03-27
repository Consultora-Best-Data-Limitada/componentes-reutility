import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CustomTextFieldProps {
  placeholder: string;
  modelValue?: string | number;
  clearable?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  outlined?: boolean;
  readonly?: boolean;
  type?: "email" | "phone" | "text" | "time" | "password";
  dark?: string;
  "@update:model-value"?: (value: string | number) => void;
  "@keydown"?: (ev: KeyboardEvent) => void;
  "@keyup"?: (ev: KeyboardEvent) => void;
  "@input"?: (ev: KeyboardEvent) => void;
  "@focus"?: (ev: FocusEvent) => void;
  "@blur"?: (ev: FocusEvent) => void;
}

export declare const ICustomTextField: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomTextFieldProps;
  $slots: {
    append?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
