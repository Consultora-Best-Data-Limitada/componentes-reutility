<template>
  <div class="data-table__container">
    <table
      class="data-table__table"
      aria-describedby="Reutility"
    >
      <thead class="data-table__head">
        <tr>
          <th
            v-for="header in headers"
            :key="header.value"
            :class="thClass(header)"
            @click="sortBy(header)"
          >
            <div class="data-table__header-text">
              {{ header.text }}
            </div>
            <div
              v-if="header.sortable !== false"
              :class="sortIconClass(header.value)"
            >
              <FontAwesomeIcon
                :name="getSortIcon(header.value)"
                :color="sortIconColor(header.value)"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="data-table__body">
        <tr
          v-if="items.length === 0"
          class="data-table__row--empty"
        >
          <FontAwesomeIcon
            v-if="!hideNoDataIcon"
            size="5rem"
            color="neutro-4"
            :name="noDataIcon"
          />
          {{
            noDataText
          }}
        </tr>
        <tr
          v-for="item in itemsCurrentPage"
          :key="getRowKey(item)"
          :class="rowClass(item)"
        >
          <td
            v-for="header in headers"
            :key="getCellKey(item, header)"
          >
            <slot
              v-if="checkSlot(header.value)"
              :item="item"
              :name="header.value"
            />
            <template v-else>
              {{ getCellValue(item, header.value) }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="pageCount > 1"
      class="data-table__footer"
    >
      <IconButton
        size="1rem"
        icon="fas-arrow-left"
        color="acento-principal"
        :disabled="currentPage === 1"
        @click="previousPage"
      />
      <div class="data-table__footer-buttons">
        <button
          v-for="page in pages"
          :key="`page-${page}`"
          :class="pageButtonClass(page)"
          @click="setCurrentPage(page)"
        >
          {{ page }}
        </button>
      </div>
      <IconButton
        size="1rem"
        icon="fas-arrow-right"
        color="acento-principal"
        :disabled="currentPage === pageCount"
        @click="nextPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { useSlots, computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Composables
import { useDateTable } from "../composables/dataTable";

// Componentes
import IconButton from "./IconButton.vue";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<DataTableItem[]>,
  },
  headers: {
    required: true,
    type: Array as PropType<DataTableHeader[]>,
  },
  itemsPerPage: {
    default: 10,
    type: Number,
  },
  height: {
    default: "100%",
    type: String as PropType<CSS.HeightProperty<string>>,
  },
  gridTemplateColumns: {
    default: "",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
  },
  noDataText: {
    type: String,
    default: "No hay datos registrados",
  },
  selected: {
    default: "",
    type: String,
  },
  compareSelectedWith: {
    type: String,
    default: "id",
  },
  disabledKey: {
    type: String,
    default: "",
  },
  disabledValue: {
    type: String,
    default: "",
  },
  hideNoDataIcon: {
    type: Boolean,
  },
  noDataIcon: {
    type: String,
    default: "far-face-frown-slight",
  },
});

// Composables

const computedItems = computed(() => props.items);
const computedItemsPerPage = computed(() => props.itemsPerPage);

const slots = useSlots();
const dataTable = useDateTable(computedItems, computedItemsPerPage);

// Computed

const pageCount = dataTable.pageCount;

const currentPage = dataTable.currentPage;

const itemsCurrentPage = dataTable.itemsCurrentPage;

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

const nextPage = dataTable.nextPage;

const getRowKey = dataTable.getRowKey;

const getCellKey = dataTable.getCellKey;

const getCellValue = dataTable.getCellValue;

const previousPage = dataTable.previousPage;

const setCurrentPage = dataTable.setCurrentPage;

const checkSlot = (name: string) => !!slots[name];

const getSortIcon = (value: string) => {
  if (dataTable.isSortedBy(value)) {
    return dataTable.getSortOrder.value === "asc" ? "fad-sort-down" : "fad-sort-up";
  }
  return "fas-sort";
};

const sortBy = (header: DataTableHeader) => {
  if (header.sortable === false) return;
  dataTable.setSortBy(header);
};

const pageButtonClass = (page: number) => ({
  "data-table__footer-page": true,
  "data-table__footer-page--selected": page === currentPage.value,
});

const sortIconClass = (value: string) => ({
  "data-table__sort-icon": true,
  "data-table__sort-icon--active": dataTable.isSortedBy(value),
});

const thClass = (header: DataTableHeader) => ({
  "data-table__th": true,
  "data-table__th--sortable": header.sortable !== false,
});

const rowClass = (item: DataTableItem) => ({
  "data-table__row": true,
  "data-table__row--selected": item[props.compareSelectedWith] === props.selected,
  "data-table__row--disabled":
    props.disabledKey && props.disabledValue && item[props.disabledKey] === props.disabledValue,
});

const sortIconColor = (value: string): CustomColor =>
  dataTable.isSortedBy(value) ? "acento-secundario" : "neutro-3";
</script>

<style scoped lang="scss">
.data-table__container {
  display: grid;
  row-gap: 1rem;
  height: v-bind(height);
  grid-template-rows: 1fr auto;
}

.data-table__table {
  border-collapse: collapse;
}

.data-table__head,
.data-table__body {
  tr {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-template-columns: v-bind(gridTemplateColumns);
  }
}

.data-table__head {
  .data-table__th {
    display: grid;
    min-height: 3rem;
    user-select: none;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    // Text style
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-family: "Metropolis", sans-serif;
    color: rgb(var(--acento-secundario));

    &--sortable {
      cursor: pointer;
      grid-template-columns: 1rem 1fr 1rem;

      .data-table__header-text {
        grid-column: 2;
      }
    }

    .data-table__sort-icon {
      transition: opacity 200ms ease-out;

      &:not(&--active) {
        opacity: 0;
      }
    }

    &:hover .data-table__sort-icon {
      &:not(&--active) {
        opacity: 1;
      }
    }
  }
}

.data-table__body {
  .data-table__row--empty {
    row-gap: 0.75rem;
    font-size: 1rem;
    padding-top: 5rem;
    text-align: center;
    grid-auto-flow: row;
    line-height: 1.25rem;
    justify-items: center;
    grid-template-columns: 1fr;
    color: rgb(var(--secundario));
    font-family: "Metropolis", sans-serif;
  }

  .data-table__row {
    border-bottom: 1px solid rgb(var(--neutro-3));

    &:hover {
      background-color: rgb(var(--neutro-2));
    }

    td {
      display: grid;
      min-height: 3rem;
      padding: 0.75rem 0;
      align-items: center;
      // Text style
      font-size: 1rem;
      text-align: center;
      line-height: 1.25rem;
      color: rgb(var(--secundario));
      font-family: "Metropolis", sans-serif;
    }

    &--selected td {
      font-weight: 600;
      color: rgb(var(--acento-principal));
    }

    &--disabled td {
      color: rgb(var(--neutro-4));
    }
  }
}

.data-table__footer {
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.data-table__footer-buttons {
  display: flex;
  column-gap: 0.25rem;
}

.data-table__footer-page {
  width: 2.25rem;
  height: 2.25rem;
  user-select: none;
  border-radius: 50%;
  // Text style
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: "Metropolis", sans-serif;
  color: rgb(var(--acento-secundario));

  &:not(&--selected):hover {
    color: rgb(var(--acento-secundario-hover));
  }

  &:not(&--selected):active {
    color: rgb(var(--acento-secundario-pressed));
  }

  &--selected {
    color: rgb(var(--neutro-1));
    background-color: rgb(var(--acento-secundario));
  }
}
</style>
