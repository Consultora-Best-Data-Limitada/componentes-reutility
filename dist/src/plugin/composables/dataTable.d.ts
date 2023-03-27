import type { Ref } from "vue";
export declare const useDateTable: (items: Ref<DataTableItem[]>, itemsPerPage: Ref<number>) => {
    pageCount: import("vue").ComputedRef<number>;
    currentPage: Ref<number>;
    itemsCurrentPage: import("vue").ComputedRef<DataTableItem[]>;
    setItems: (value: DataTableItem[]) => void;
    nextPage: () => void;
    setSortBy: (header: DataTableHeader) => void;
    getRowKey: (item: DataTableItem) => any;
    getCellKey: (item: DataTableItem, header: DataTableHeader) => string;
    isSortedBy: (value: string) => boolean;
    getSortOrder: import("vue").ComputedRef<"asc" | "desc">;
    getCellValue: (item: DataTableItem, value: string) => any;
    previousPage: () => void;
    setCurrentPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};
