<template>
  <div class="grid-column__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

const props = defineProps({
  alignContent: {
    default: "",
    type: String as PropType<CSS.AlignContentProperty>,
  },
  alignItems: {
    default: "",
    type: String as PropType<CSS.AlignItemsProperty>,
  },
  justifyContent: {
    default: "",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
  justifyItems: {
    default: "",
    type: String as PropType<CSS.JustifyItemsProperty>,
  },
  width: {
    default: "initiañ",
    type: [String, Number] as PropType<CSS.WidthProperty<string | number>>,
  },
  height: {
    default: "auto",
    type: [String, Number] as PropType<CSS.HeightProperty<string | number>>,
  },
  margin: {
    default: 0,
    type: [String, Number] as PropType<CSS.MarginProperty<string | number>>,
  },
  rowGap: {
    default: 0,
    type: [String, Number] as PropType<CSS.RowGapProperty<string | number>>,
  },
  padding: {
    default: 0,
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
  },
  gridRow: {
    default: "",
    type: [String, Number] as PropType<CSS.GridRowProperty>,
  },
  gridColumn: {
    default: "",
    type: [String, Number] as PropType<CSS.GridColumnProperty>,
  },
  gridTemplateRows: {
    default: "initial",
    type: [String, Number] as PropType<CSS.GridTemplateRowsProperty<string | number>>,
  },
  backgroundColor: {
    default: "transparent",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
  borderRadius: {
    default: "",
    type: String as PropType<CSS.BorderRadiusProperty<string>>,
  },
  boxShadow: {
    default: "",
    type: String as PropType<CSS.BoxShadowProperty>,
  },
  overflow: {
    default: "initial",
    type: String as PropType<CSS.OverflowProperty>,
  },
});

// Composables

const colors = useColors();

// Computed

const backgroundColorInner = computed(() => {
  return colors.getRealColor(props.backgroundColor)
});
</script>

<style scoped>
.grid-column__container {
  display: grid;
  min-height: 0;
  width: v-bind(width);
  grid-auto-flow: row;
  margin: v-bind(margin);
  height: v-bind(height);
  row-gap: v-bind(rowGap);
  padding: v-bind(padding);
  grid-row: v-bind(gridRow);
  overflow: v-bind(overflow);
  box-shadow: v-bind(boxShadow);
  grid-column: v-bind(gridColumn);
  align-items: v-bind(alignItems);
  border-radius: v-bind(borderRadius);
  justify-items: v-bind(justifyItems);
  align-content: v-bind(alignContent);
  justify-content: v-bind(justifyContent);
  grid-template-rows: v-bind(gridTemplateRows);
  background-color: v-bind(backgroundColorInner);
}
</style>
