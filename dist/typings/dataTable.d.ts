import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface DataTableProps {
  items: DataTableItem[];
  headers: DataTableHeader[];
  itemsPerPage?: number;
  height?: CSS.HeightProperty<string>;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  noDataText?: string;
  selected?: string;
  compareSelectedWith?: string;
  disabledKey?: string;
  disabledValue?: string;
  hideNoDataIcon?: boolean;
  noDataIcon?: string;
}

export declare const IDataTable: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & DataTableProps;
  $slots: {
    [key: string]: (({Component, item: DataTableItem}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
