<template>
  <div class="grid__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definiciones
const props = defineProps({
  height: {
    default: "initial",
    type: [String, Number] as PropType<Property.Height>,
  },
  alignItems: {
    default: "initial",
    type: String as PropType<Property.AlignItems>,
  },
  alignContent: {
    default: "initial",
    type: String as PropType<Property.AlignContent>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
  },
  justifyItems: {
    default: "initial",
    type: String as PropType<Property.JustifyItems>,
  },
  gridTemplateRows: {
    default: "initial",
    type: String as PropType<Property.GridTemplateRows>,
  },
  rowGap: {
    default: "initial",
    type: [String, Number] as PropType<Property.RowGap>,
  },
  margin: {
    default: "initial",
    type: [String, Number] as PropType<Property.Margin>,
  },
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  columnGap: {
    default: "initial",
    type: [String, Number] as PropType<Property.ColumnGap>,
  },
  gridAutoFlow: {
    default: "initial",
    type: String as PropType<Property.GridAutoFlow>,
  },
  backgroundColor: {
    default: "initial",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<Property.BorderRadius>,
  },
  boxShadow: {
    default: "initial",
    type: String as PropType<Property.BoxShadow>,
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
.grid__container {
  display: grid;
  height: v-bind(height);
  margin: v-bind(margin);
  row-gap: v-bind(rowGap);
  padding: v-bind(padding);
  box-shadow: v-bind(boxShadow);
  column-gap: v-bind(columnGap);
  align-items: v-bind(alignItems);
  border-radius: v-bind(borderRadius);
  align-content: v-bind(alignContent);
  justify-items: v-bind(justifyItems);
  grid-auto-flow: v-bind(gridAutoFlow);
  justify-content: v-bind(justifyContent);
  grid-template-rows: v-bind(gridTemplateRows);
  background-color: v-bind(backgroundColorInner);
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
