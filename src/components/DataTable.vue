<template>
  <div class="data-table__container">
    <table
      :data-dark="dark"
      :class="tableClass"
      aria-describedby="Reutility"
    >
      <thead :class="theadClass">
        <tr>
          <th
            v-for="header in headers"
            :key="header.value"
            :class="thClass(header)"
            @click="sortBy(header)"
          >
            <div class="data-table__header-text">
              <slot
                v-if="checkSlot(`header.${header.value}`)"
                :header-text="header.text"
                :name="`header.${header.value}`"
              />
              <template v-else>
                {{ header.text }}
              </template>
            </div>
            <div
              v-if="header.sortable !== false"
              :class="sortIconClass(header.value)"
            >
              <FigmaIcon
                :name="getSortIcon(header.value)"
                :color="sortIconColor(header.value)"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody
        ref="tableBodyRef"
        class="data-table__body"
      >
        <tr
          v-if="items.length === 0"
          class="data-table__row--empty"
        >
          <template v-if="!checkSlot('no-data')">
            <FigmaIcon
              v-if="!hideNoDataIcon && noDataIcon.startsWith('fm')"
              size="5rem"
              color="neutro-4"
              :name="noDataIcon"
            />
            <SvgIcon
              v-else-if="!hideNoDataIcon"
              size="5rem"
              color="neutro-4"
              :src="noDataIcon"
            />
            {{ noDataText }}
          </template>
          <slot name="no-data" />
        </tr>
        <tr
          v-for="item in itemsCurrentPage"
          :key="getRowKey(item)"
          :class="rowClass(item)"
          @click="onClickRow(item)"
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
    <TPagination
      v-model="currentPage"
      :page-count="pageCount"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { useSlots, computed, onMounted, ref, watch } from "vue";

// Composables
import { useDateTable } from "@/composables/dataTable";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";
import TPagination from "./TPagination.vue";

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
  dark: {
    type: Boolean,
  },
  backgroundColor: {
    default: "initial",
    type: String as PropType<Property.BackgroundColor>,
  },
  itemsPerPage: {
    default: null,
    type: Number as PropType<number | null>,
  },
  height: {
    default: "initial",
    type: String as PropType<Property.Height>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: String as PropType<Property.GridTemplateColumns>,
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
    default: "fm-sad-face",
  },
  stickyFirstColumn: {
    type: Boolean,
  },
  stickyLastColumn: {
    type: Boolean,
  },
  stickyHead: {
    type: Boolean,
  },
  maxHeight: {
    default: "inital",
    type: String as PropType<Property.MaxHeight>,
  },
});

const emits = defineEmits(["click:row"]);

// Composables

const computedItems = computed(() => props.items);
const computedItemsPerPage = computed(() => props.itemsPerPage);

const slots = useSlots();
const {
  pageCount,
  currentPage,
  getSortOrder,
  itemsCurrentPage,
  setSortBy,
  getRowKey,
  isSortedBy,
  getCellKey,
  getCellValue,
  calculatePagination,
  recalculatePagination,
} = useDateTable(computedItems, computedItemsPerPage);

// Mounted

onMounted(() => {
  if (!tableBodyRef.value || noCalculatePagination.value) return;
  calculatePagination(tableBodyRef.value);
});

// Data

const tableBodyRef = ref<HTMLTableSectionElement | null>(null);

// Computed

const theadClass = computed(() => ({
  "data-table__head": true,
  "data-table__head--sticky": props.stickyHead,
  "data-table__head--sticky-last": props.stickyLastColumn,
  "data-table__head--sticky-first": props.stickyFirstColumn,
}));

const tableClass = computed(() => ({
  "data-table__table": true,
  "data-table__table--sticky":
    props.stickyHead || props.stickyFirstColumn || props.stickyLastColumn,
}));

const noCalculatePagination = computed(() => {
  return (
    props.stickyHead ||
    props.stickyLastColumn ||
    props.stickyFirstColumn ||
    props.itemsPerPage !== null
  );
});

// Methods

function checkSlot(name: string) {
  return !!slots[name];
}

function getSortIcon(value: string) {
  if (isSortedBy(value)) {
    return getSortOrder.value === "asc" ? "fm-arrow-down" : "fm-arrow-up";
  }
  return "fm-arrow-down";
}

function sortIconClass(value: string) {
  return {
    "data-table__sort-icon": true,
    "data-table__sort-icon--active": isSortedBy(value),
  };
}

function thClass(header: DataTableHeader) {
  return {
    "data-table__th": true,
    "data-table__th--sortable": header.sortable !== false,
  };
}

function rowClass(item: DataTableItem) {
  return {
    "data-table__row": true,
    "data-table__row--sticky-last": props.stickyLastColumn,
    "data-table__row--sticky-first": props.stickyFirstColumn,
    "data-table__row--selected": item[props.compareSelectedWith] === props.selected,
    "data-table__row--disabled":
      props.disabledKey && props.disabledValue && item[props.disabledKey] === props.disabledValue,
  };
}

function sortIconColor(value: string): CustomColor {
  if (isSortedBy(value)) return props.dark ? "neutro-1" : "acento-secundario";
  return "neutro-3";
}

function sortBy(header: DataTableHeader) {
  if (!tableBodyRef.value) return;
  setSortBy(header, tableBodyRef.value);
}

// Emits

function onClickRow(item: DataTableItem) {
  emits("click:row", item);
}

// Watchs

watch(
  () => props.items,
  async () => {
    if (!tableBodyRef.value || noCalculatePagination.value) {
      if (currentPage.value > pageCount.value) {
        currentPage.value = Math.max(1, pageCount.value);
      }
      return;
    }
    await recalculatePagination(tableBodyRef.value);
  },
);
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.data-table__container {
  display: grid;
  row-gap: 1rem;
  height: v-bind(height);
  grid-template-rows: minmax(0, 1fr);
}

.data-table__table {
  display: grid;
  overflow: auto;
  border-collapse: collapse;
  max-height: v-bind(maxHeight);
  grid-template-rows: auto minmax(0, 1fr);
  background-color: v-bind(backgroundColor);
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
  &--sticky {
    top: 0;
    z-index: 2;
    position: sticky;
    background-color: v-bind(backgroundColor);
  }

  &--sticky-last th:last-child,
  &--sticky-first th:first-child {
    left: 0;
    z-index: 1;
    position: sticky;
    background-color: v-bind(backgroundColor);
  }

  &--sticky-last th:last-child {
    left: initial;
    right: 0;
  }

  .data-table__th {
    @include text-subtitle-2;
    display: grid;
    min-height: 3rem;
    user-select: none;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
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
    @include text-body-1;
    row-gap: 0.75rem;
    padding-top: 5rem;
    text-align: center;
    grid-auto-flow: row;
    justify-items: center;
    grid-template-columns: 1fr;
    color: rgb(var(--secundario));
  }

  .data-table__row {
    border-bottom: 1px solid rgb(var(--neutro-3));

    &--sticky-last td:last-child,
    &--sticky-first td:first-child {
      left: 0;
      z-index: 1;
      position: sticky;
      background-color: v-bind(backgroundColor);
    }

    &--sticky-last td:last-child {
      left: initial;
      right: 0;
    }

    &:hover,
    &--sticky-first:hover td:last-child,
    &--sticky-first:hover td:first-child {
      background-color: rgb(var(--neutro-2));
    }

    td {
      @include text-body-1;
      display: grid;
      min-height: 3rem;
      padding: 0.75rem 0;
      text-align: center;
      align-items: center;
      color: rgb(var(--secundario));
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

[data-dark="true"] {
  .data-table__th,
  .data-table__row td,
  .data-table__row--empty {
    color: rgb(var(--neutro-1));
  }

  .data-table__row:hover,
  .data-table__row--sticky-first:hover td:last-child,
  .data-table__row--sticky-first:hover td:first-child {
    background-color: rgb(var(--neutro-4));
  }
}
</style>
