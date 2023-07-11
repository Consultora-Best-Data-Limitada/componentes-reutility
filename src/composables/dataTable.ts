// Vue
import { computed, nextTick, ref } from "vue";

// Tipos
import type { Ref } from "vue";

export const useDateTable = (items: Ref<DataTableItem[]>, itemsPerPage: Ref<number | null>) => {
  // Data

  const currentPage = ref(1);
  const pagination = ref<number[]>([]);
  const sortOrder = ref<"asc" | "desc">("asc");
  const sortBy = ref<DataTableHeader | null>(null);

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

  const pageCount = computed(() => {
    if (itemsPerPage.value !== null) {
      return Math.ceil(items.value.length / itemsPerPage.value);
    }
    return Math.max(...pagination.value);
  });

  const itemsCurrentPage = computed(() => {
    if (itemsPerPage.value !== null) {
      return sortedItems.value.slice(
        (currentPage.value - 1) * itemsPerPage.value,
        currentPage.value * itemsPerPage.value,
      );
    }
    if (pagination.value.length === 0) return sortedItems.value;
    return sortedItems.value.filter((item, index) => {
      return pagination.value[index] === currentPage.value;
    });
  });

  const getSortOrder = computed(() => {
    return sortOrder.value;
  });

  const pages = computed(() => {
    const page = currentPage.value;
    let pagesToShow: number[];
    if (page === 1) {
      pagesToShow = [page, page + 1, page + 2];
    } else if (page === pageCount.value) {
      pagesToShow = [page - 2, page - 1, page];
    } else {
      pagesToShow = [page - 1, page, page + 1];
    }
    return pagesToShow.filter((p) => p > 0 && p <= pageCount.value);
  });

  // Methods

  function nextPage() {
    if (currentPage.value < pageCount.value) currentPage.value++;
  }

  function previousPage() {
    if (currentPage.value > 1) currentPage.value--;
  }

  function getRowKey(item: DataTableItem) {
    return item["id"] ?? Object.values(item)[0];
  }

  function getCellKey(item: DataTableItem, header: DataTableHeader) {
    const headerKey = header.value;
    const itemKey = getRowKey(item);
    return `${itemKey}.${headerKey}`;
  }

  function getCellValue(item: DataTableItem, value: string) {
    return item[value] ?? "";
  }

  function setCurrentPage(value: number) {
    currentPage.value = value;
  }

  function setItems(value: DataTableItem[]) {
    items.value = value;
  }

  async function setSortBy(header: DataTableHeader, el: HTMLTableSectionElement) {
    if (header.sortable === false) return;
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
    if (itemsPerPage.value !== null) return;
    await recalculatePagination(el);
  }

  function isSortedBy(value: string) {
    return sortBy.value?.value === value;
  }

  async function recalculatePagination(el: HTMLTableSectionElement) {
    pagination.value = [];
    await nextTick();
    calculatePagination(el);
  }

  function calculatePagination(el: HTMLTableSectionElement) {
    const temp: number[] = [];
    const bounds = el.getBoundingClientRect();
    const tableHeight = Math.floor(bounds.height - 52);
    let pageNumber = 1;
    let accumulatedSize = 0;
    const rows = el.rows;
    for (let i = 0; i < rows.length; i++) {
      const rowHeight = rows[i].offsetHeight;
      accumulatedSize += rowHeight;
      if (accumulatedSize >= tableHeight) {
        accumulatedSize = rowHeight;
        pageNumber++;
      }
      temp.push(pageNumber);
    }
    pagination.value = [...temp];
  }

  return {
    // Computed
    pages,
    pageCount,
    sortedItems,
    currentPage,
    getSortOrder,
    itemsCurrentPage,
    // Methods
    setItems,
    nextPage,
    setSortBy,
    getRowKey,
    getCellKey,
    isSortedBy,
    getCellValue,
    previousPage,
    setCurrentPage,
    calculatePagination,
    recalculatePagination,
  };
};