<template>
  <form
    :name="name"
    class="grid"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Types
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definitions

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  gridTemplateColumns: {
    default: "initial",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  gridTemplateRows: {
    default: "initial",
    type: String as PropType<Property.GridTemplateRows>,
  },
  gridAutoFlow: {
    default: "initial",
    type: String as PropType<Property.GridAutoFlow>,
  },
  gridAutoColumns: {
    default: "initial",
    type: String as PropType<Property.GridAutoColumns>,
  },
  gridAutoRows: {
    default: "initial",
    type: String as PropType<Property.GridAutoRows>,
  },
  alignItems: {
    default: "initial",
    type: String as PropType<Property.AlignItems>,
  },
  alignContent: {
    default: "initial",
    type: String as PropType<Property.AlignContent>,
  },
  justifyItems: {
    default: "initial",
    type: String as PropType<Property.JustifyItems>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
  },
  rowGap: {
    default: "initial",
    type: String as PropType<Property.RowGap>,
  },
  columnGap: {
    default: "initial",
    type: String as PropType<Property.ColumnGap>,
  },
  backgroundColor: {
    default: "initial",
    type: String as PropType<CustomColor | Property.BackgroundColor>,
  },
  padding: {
    default: "initial",
    type: String as PropType<Property.Padding>,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<Property.BorderRadius>,
  },
});

const emits = defineEmits(["submit"]);

// Composables

const { getRealColor } = useColors();

// Computed

const realBackgroundColor = computed(() => {
  return getRealColor(props.backgroundColor);
});

// Emits

function onSubmit(ev: SubmitEvent) {
  emits("submit", ev);
}
</script>

<style scoped>
form {
  row-gap: v-bind(rowGap);
  padding: v-bind(padding);
  column-gap: v-bind(columnGap);
  align-items: v-bind(alignItems);
  align-content: v-bind(alignContent);
  justify-items: v-bind(justifyItems);
  border-radius: v-bind(borderRadius);
  grid-auto-flow: v-bind(gridAutoFlow);
  grid-auto-rows: v-bind(gridAutoRows);
  justify-content: v-bind(justifyContent);
  grid-auto-columns: v-bind(gridAutoColumns);
  grid-template-rows: v-bind(gridTemplateRows);
  background-color: v-bind(realBackgroundColor);
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
