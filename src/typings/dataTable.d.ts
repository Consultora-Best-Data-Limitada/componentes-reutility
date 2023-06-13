interface DataTableHeader {
  text: string;
  value: string;
  sortable?: boolean;
  sort?: (valueA: string, valueB: string) => number;
}

interface DataTableItem {
  [id: string]: any;
}
