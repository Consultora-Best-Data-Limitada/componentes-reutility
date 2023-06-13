import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from "vue";

export declare interface FormSelectProps {
  label: string;
  dark?: boolean;
  items: unknown[];
  itemValue?: string;
  itemTitle?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  outlined?: boolean;
  placeholder: string;
  clearable?: boolean;
  searchable?: boolean;
  errorMessage?: string;
  textMultiple?: string;
  returnObject?: boolean;
  textTransform?: Property.TextTransform;
  gridTemplateColumns?: Property.GridTemplateColumns;
  modelValue?: string | number | Record<string, any> | unknown[] | null;
  "@update:model-value"?: (value: string | number | Record<string, any> | unknown[] | null) => void;
}

export declare const IFormSelect: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormSelectProps;
  $slots: {
    "append-item"?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
