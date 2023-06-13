import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface DataTableProps {
  selected?: string;
  maxHeight?: string;
  noDataText?: string;
  noDataIcon?: string;
  stickyHead?: boolean;
  disabledKey?: string;
  itemsPerPage?: number;
  items: DataTableItem[];
  disabledValue?: string;
  height?: Property.Height;
  hideNoDataIcon?: boolean;
  headers: DataTableHeader[];
  stickyLastColumn?: boolean;
  stickyFirstColumn?: boolean;
  compareSelectedWith?: string;
  backgroundColor?: Property.BackgroundColor;
  gridTemplateColumns?: Property.GridTemplateColumns;
  "@click:row"?: (item: any) => void;
}

export declare const IDataTable: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & DataTableProps;
  $slots: {
    [key: string]:
      | (({ Component, item, headerText }: { Component: VNode; item: DataTableItem; headerText: string }) => VNode[])
      | undefined;
  };
  "v-slots": {
    [key: string]:
      | (({ Component, item, headerText }: { Component: VNode; item: DataTableItem; headerText: string }) => VNode[])
      | undefined;
  };
};
