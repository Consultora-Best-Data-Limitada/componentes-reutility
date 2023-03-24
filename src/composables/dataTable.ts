// Vue
import { computed, ref } from "vue";

// Tipos
import type { Ref } from "vue";

export const useDateTable = (items: Ref<DataTableItem[]>, itemsPerPage: Ref<number>) => {
  // Data

  const sortBy = ref<DataTableHeader | null>(null);
  const currentPage = ref(1);
  const sortOrder = ref<"asc" | "desc">("asc");

  // Computed

  const sortedItems = computed(() => {
    const copy = items.value.slice();
    if (!sortBy.value) return copy;
    return copy.sort((itemA, itemB) => {
      if (!sortBy.value) return 0;
      const valueA = getCellValue(itemA, sortBy.value.value);
      const valueB = getCellValue(itemB, sortBy.value.value);
      let order = valueA > valueB ? 1 : -1;
      if (sortBy.value.sort) {
        order = sortBy.value.sort(valueA, valueB);
      }
      return sortOrder.value === "asc" ? order : order * -1;
    });
  });

  const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage.value));

  const itemsCurrentPage = computed(() => {
    return sortedItems.value.slice(
      (currentPage.value - 1) * itemsPerPage.value,
      currentPage.value * itemsPerPage.value,
    );
  });

  const getSortOrder = computed(() => {
    return sortOrder.value;
  });

  // Methods

  const nextPage = () => {
    if (currentPage.value < pageCount.value) currentPage.value++;
  };

  const previousPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  const getRowKey = (item: DataTableItem) => {
    return item["id"] ?? Object.values(item)[0];
  };

  const getCellKey = (item: DataTableItem, header: DataTableHeader) => {
    const headerKey = header.value;
    const itemKey = getRowKey(item);
    return `${itemKey}.${headerKey}`;
  };

  const getCellValue = (item: DataTableItem, value: string) => {
    return item[value] ?? "";
  };

  const setItemsPerPage = (value: number) => {
    itemsPerPage.value = value;
  };

  const setCurrentPage = (value: number) => {
    currentPage.value = value;
  };

  const setItems = (value: DataTableItem[]) => {
    items.value = value;
  };

  const setSortBy = (header: DataTableHeader) => {
    currentPage.value = 1;
    if (sortBy.value?.value === header.value) {
      if (sortOrder.value === "asc") {
        sortOrder.value = "desc";
      } else {
        sortBy.value = null;
        sortOrder.value = "asc";
      }
    } else {
      sortBy.value = header;
      sortOrder.value = "asc";
    }
  };

  const isSortedBy = (value: string) => sortBy.value?.value === value;

  return {
    // Computed
    pageCount,
    currentPage,
    itemsCurrentPage,
    // Methods
    setItems,
    nextPage,
    setSortBy,
    getRowKey,
    getCellKey,
    isSortedBy,
    getSortOrder,
    getCellValue,
    previousPage,
    setCurrentPage,
    setItemsPerPage,
  };
};
