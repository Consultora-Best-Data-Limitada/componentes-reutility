import type CSS from "csstype";
import type {DefineComponent, VNode} from "vue";

declare const FormTextField: DefineComponent<{
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
  type: "email" | "phone" | "text" | "time" | "password";
  "@update:model-value": (value: string | number) => void;
  "@keydown": (ev: KeyboardEvent) => void;
  "@keyup": (ev: KeyboardEvent) => void;
  "@input": (ev: KeyboardEvent) => void;
  "@focus": (ev: FocusEvent) => void;
  "@blur": (ev: FocusEvent) => void;
  $slots: {
    append?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
