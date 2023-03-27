import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const DataTable: DefineComponent<{
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
}>;
