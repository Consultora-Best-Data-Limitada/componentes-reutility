import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface ExpandableDataTableItemProps {
  title: string | number;
  opened?: boolean;
  showActiveStyle?: boolean;
  itemColor?: CustomColor;
  items: (string | number)[] | Record<string, string | number>;
}

export declare const IExpandableDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpandableDataTableItemProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
