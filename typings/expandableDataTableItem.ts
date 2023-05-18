import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface ExpandableDataTableItemProps {
  title: string;
  opened?: boolean;
  items: string[];
  showActiveStyle?: boolean;
  itemColor?: CustomColor;
}

export declare const IExpandableDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpandableDataTableItemProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
