<template>
  <div class="grid-row__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

//Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

const props = defineProps({
  width: {
    default: "",
    type: [String, Number] as PropType<CSS.WidthProperty<string | number>>,
  },
  backgroundColor: {
    default: "",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
  gridColumn: {
    default: "",
    type: [String, Number] as PropType<CSS.GridColumnProperty>,
  },
  gridRow: {
    default: "",
    type: [String, Number] as PropType<CSS.GridRowProperty>,
  },
  padding: {
    default: 0,
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
  },
  columnGap: {
    default: 0,
    type: [String, Number] as PropType<CSS.ColumnGapProperty<string | number>>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: [String, Number] as PropType<CSS.GridTemplateColumnsProperty<string | number>>,
  },
  gridAutoColumns: {
    default: "",
    type: String as PropType<CSS.GridAutoColumnsProperty<string | number>>,
  },
  justifyContent: {
    default: "",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
  alignItems: {
    default: "",
    type: String as PropType<CSS.AlignItemsProperty>,
  },
  height: {
    default: "",
    type: [String, Number] as PropType<CSS.HeightProperty<string | number>>,
  },
});

// Computed

const backgroundColorInner = computed(() => {
  if (props.backgroundColor?.startsWith("-")) {
    return `rgb(var(--v-theme${props.backgroundColor}))`;
  }
  return props.backgroundColor;
});
</script>

<style scoped>
.grid-row__container {
  display: grid;
  width: v-bind(width);
  grid-auto-flow: column;
  height: v-bind(height);
  padding: v-bind(padding);
  grid-row: v-bind(gridRow);
  column-gap: v-bind(columnGap);
  grid-column: v-bind(gridColumn);
  align-items: v-bind(alignItems);
  justify-content: v-bind(justifyContent);
  grid-auto-columns: v-bind(gridAutoColumns);
  background-color: v-bind(backgroundColorInner);
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
