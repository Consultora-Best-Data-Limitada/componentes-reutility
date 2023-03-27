import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FormTextFieldProps {
  modelValue?: string | number;
  label: string;
  placeholder: string;
  errorMessage?: string;
  readonly?: boolean;
  dark?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  clearable?: boolean;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  type?: "email" | "phone" | "text" | "time" | "password";
  "@update:model-value"?: (value: string | number) => void;
  "@keydown"?: (ev: KeyboardEvent) => void;
  "@keyup"?: (ev: KeyboardEvent) => void;
  "@input"?: (ev: KeyboardEvent) => void;
  "@focus"?: (ev: FocusEvent) => void;
  "@blur"?: (ev: FocusEvent) => void;
}

export declare const IFormTextField: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormTextFieldProps;
  $slots: {
    append?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
