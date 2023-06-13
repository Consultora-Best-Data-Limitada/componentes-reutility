import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface DataTableItemProps {
  disabled?: boolean;
  selected?: boolean;
  textAlign?: Property.TextAlign;
  textTransform?: Property.TextTransform;
}

export declare const IDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & DataTableItemProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
