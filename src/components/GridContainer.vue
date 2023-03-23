<template>
  <div class="grid__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

defineProps({
  height: {
    default: "auto",
    type: [String, Number] as PropType<CSS.HeightProperty<string | number>>,
  },
  alignItems: {
    default: "",
    type: String as PropType<CSS.AlignItemsProperty>,
  },
  alignContent: {
    default: "",
    type: String as PropType<CSS.AlignContentProperty>,
  },
  justifyContent: {
    default: "",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
  justifyItems: {
    default: "",
    type: String as PropType<CSS.JustifyItemsProperty>,
  },
  gridTemplateRows: {
    default: "initial",
    type: String as PropType<CSS.GridTemplateRowsProperty<string | number>>,
  },
  rowGap: {
    default: 0,
    type: [String, Number] as PropType<CSS.RowGapProperty<string | number>>,
  },
  margin: {
    default: 0,
    type: [String, Number] as PropType<CSS.MarginProperty<string | number>>,
  },
  padding: {
    default: 0,
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string | number>>,
  },
  columnGap: {
    default: 0,
    type: [String, Number] as PropType<CSS.ColumnGapProperty<string | number>>,
  },
  gridAutoFlow: {
    default: "",
    type: String as PropType<CSS.GridAutoFlowProperty>,
  },
});
</script>

<style scoped>
.grid__container {
  display: grid;
  height: v-bind(height);
  margin: v-bind(margin);
  row-gap: v-bind(rowGap);
  padding: v-bind(padding);
  column-gap: v-bind(columnGap);
  align-items: v-bind(alignItems);
  align-content: v-bind(alignContent);
  justify-items: v-bind(justifyItems);
  grid-auto-flow: v-bind(gridAutoFlow);
  justify-content: v-bind(justifyContent);
  grid-template-rows: v-bind(gridTemplateRows);
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
