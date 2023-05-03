<template>
  <div class="relative__container">
    <slot/>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

const props = defineProps({
  width: {
    default: "initial",
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
  padding: {
    default: 0,
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
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
  return colors.getRealColor(props.backgroundColor);
});
</script>

<style scoped lang="scss">
.relative__container {
  position: relative;
  width: v-bind(width);
  margin: v-bind(margin);
  height: v-bind(height);
  padding: v-bind(padding);
  overflow: v-bind(overflow);
  box-shadow: v-bind(boxShadow);
  border-radius: v-bind(borderRadius);
  background-color: v-bind(backgroundColorInner);
}
</style>
