import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";
import DataTableItem from "../../src/plugin/components/DataTableItem.vue";

export interface DataTableHeader {
  text: string;
  value: string;
  sortable?: boolean;
  sort?: (valueA: string, valueB: string) => number;
}

export interface DataTableItem {
  [id: string]: any;
}

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
    [key: string]: (({Component, item}: {
      Component: VNode;
      item: DataTableItem;
    }) => VNode[]) | undefined;
  };
  "v-slots": {
    [key: string]: (({Component, item}: {
      Component: VNode;
      item: DataTableItem;
    }) => VNode[]) | undefined;
  },
};
