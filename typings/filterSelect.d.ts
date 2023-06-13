import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from "vue";

export declare interface FilterSelectProps {
  label: string;
  items: unknown[];
  itemValue?: string;
  itemTitle?: string;
  multiple?: boolean;
  placeholder: string;
  searchable?: boolean;
  textMultiple?: string;
  returnObject?: boolean;
  textTransform?: Property.TextTransform;
  modelValue?: string | number | Record<string, any> | unknown[] | null;
  "@update:model-value"?: (value: string | number | Record<string, any> | unknown[] | null) => void;
}

export declare const IFilterSelect: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FilterSelectProps;
  $slots: {
    "append-item"?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
