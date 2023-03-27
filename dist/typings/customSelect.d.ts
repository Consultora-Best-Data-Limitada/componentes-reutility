import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CustomSelectProps {
  errorMessage?: string;
  placeholder: string;
  itemValue?: string;
  itemTitle?: string;
  returnObject?: boolean;
  clearable?: boolean;
  textMultiple?: string;
  items: unknown[];
  textTransform?: CSS.TextTransformProperty;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: string | number | Record<string, any> | unknown[] | null;
  outlined?: boolean;
  searchable?: boolean;
  dark?: boolean;
  "@update:model-value": (value: string | number | Record<string, any> | unknown[] | null) => void;
}

export declare const ICustomSelect: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomSelectProps;
};
