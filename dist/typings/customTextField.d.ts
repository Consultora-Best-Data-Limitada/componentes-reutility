import type {DefineComponent, VNode} from "vue";

declare const CustomTextField: DefineComponent<{
  placeholder: string;
  modelValue?: string | number;
  clearable?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  outlined?: boolean;
  readonly?: boolean;
  type?: "email" | "phone" | "text" | "time" | "password"
  dark?: string;
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
