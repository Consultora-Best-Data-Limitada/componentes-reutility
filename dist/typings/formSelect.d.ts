import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FormSelectProps {
  label: string;
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
  modelValue?: string | number | Record<string, any> | unknown[] | null
  outlined?: boolean;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>
  searchable?: boolean;
  dark?: boolean;
  "@update:model-value": (value: string | number | Record<string, any> | unknown[] | null) => void;
}

export declare const IFormSelect: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormSelectProps;
};
