import type CSS from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from "vue";

export declare interface FilterSelectProps {
  label: string;
  placeholder: string;
  itemValue?: string;
  itemTitle?: string;
  returnObject?: boolean;
  textMultiple?: string;
  items: unknown[];
  textTransform?: CSS.TextTransformProperty;
  multiple?: boolean;
  modelValue?: string | number | Record<string, any> | unknown[] | null;
  searchable?: boolean;
  "@update:model-value"?: (value: string | number | Record<string, any> | unknown[] | null) => void;
}

export declare const IFilterSelect: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FilterSelectProps;
  $slots: {
    "append-item"?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
