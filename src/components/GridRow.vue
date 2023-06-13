<template>
  <div class="grid-row__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useColors } from "@/composables/colors";

//Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

const props = defineProps({
  width: {
    default: "initial",
    type: [String, Number] as PropType<Property.Width>,
  },
  backgroundColor: {
    default: "initial",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  gridColumn: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridColumn>,
  },
  gridRow: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridRow>,
  },
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
  },
  columnGap: {
    default: "initial",
    type: [String, Number] as PropType<Property.ColumnGap>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridTemplateColumns>,
  },
  gridAutoColumns: {
    default: "initial",
    type: String as PropType<Property.GridAutoColumns>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
  },
  alignItems: {
    default: "initial",
    type: String as PropType<Property.AlignItems>,
  },
  height: {
    default: "initial",
    type: [String, Number] as PropType<Property.Height>,
  },
});

// Composables

const colors = useColors();

// Computed

const backgroundColorInner = computed(() => {
  return colors.getRealColor(props.backgroundColor);
});
</script>

<style scoped>
.grid-row__container {
  display: grid;
  min-height: 0;
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
