<template>
  <div class="grid-column__container">
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

const props = defineProps({
  alignContent: {
    default: "initial",
    type: String as PropType<Property.AlignContent>,
  },
  alignItems: {
    default: "initial",
    type: String as PropType<Property.AlignItems>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
  },
  justifyItems: {
    default: "initial",
    type: String as PropType<Property.JustifyItems>,
  },
  width: {
    default: "initial",
    type: [String, Number] as PropType<Property.Width>,
  },
  height: {
    default: "initial",
    type: [String, Number] as PropType<Property.Height>,
  },
  margin: {
    default: "initial",
    type: [String, Number] as PropType<Property.Margin>,
  },
  rowGap: {
    default: "initial",
    type: [String, Number] as PropType<Property.RowGap>,
  },
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
  },
  gridRow: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridRow>,
  },
  gridColumn: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridColumn>,
  },
  gridTemplateRows: {
    default: "initial",
    type: [String, Number] as PropType<Property.GridTemplateRows>,
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
  overflow: {
    default: "initial",
    type: String as PropType<Property.Overflow>,
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
