import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface DataTableItemProps {
  disabled?: boolean;
  selected?: boolean;
  textTransform?: CSS.TextTransformProperty;
  textAlign?: CSS.TextAlignProperty;
}

export declare const IDataTableItem: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & DataTableItemProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
