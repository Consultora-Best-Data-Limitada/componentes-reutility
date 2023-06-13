import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface ExpandableDataTableItemProps {
  opened?: boolean;
  title: string | number;
  showActiveStyle?: boolean;
  textTransform?: Property.TextTransform;
  itemColor?: Property.Color | CustomColor;
  items: (string | number)[] | Record<string, string | number>;
}

export declare const IExpandableDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpandableDataTableItemProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
    value?: (({ Component, value }: { Component: VNode; value: any }) => VNode[]) | undefined;
  };
};
