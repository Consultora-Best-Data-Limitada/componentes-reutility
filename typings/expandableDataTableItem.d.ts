import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";
import type CSS from "csstype";

export declare interface ExpandableDataTableItemProps {
  title: string | number;
  opened?: boolean;
  showActiveStyle?: boolean;
  itemColor?: CSS.Color | CustomColor;
  textTransform?: CSS.TextTransformProperty;
  items: (string | number)[] | Record<string, string | number>;
}

export declare const IExpandableDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpandableDataTableItemProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
