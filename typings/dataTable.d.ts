import type CSS from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface DataTableProps {
  items: DataTableItem[];
  headers: DataTableHeader[];
  itemsPerPage?: number;
  maxHeight?: string;
  stickyFirstColumn?: boolean;
  stickyLastColumn?: boolean;
  stickyHead?: boolean;
  backgroundColor?: CSS.BackgroundColorProperty;
  height?: CSS.HeightProperty<string>;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  noDataText?: string;
  selected?: string;
  compareSelectedWith?: string;
  disabledKey?: string;
  disabledValue?: string;
  hideNoDataIcon?: boolean;
  noDataIcon?: string;
  "@click:row": (item: any) => void;
}

export declare const IDataTable: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & DataTableProps;
  $slots: {
    [key: string]:
      | (({ Component, item }: { Component: VNode; item: DataTableItem }) => VNode[])
      | undefined;
  };
  "v-slots": {
    [key: string]:
      | (({ Component, item }: { Component: VNode; item: DataTableItem }) => VNode[])
      | undefined;
  };
};
