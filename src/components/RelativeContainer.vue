<template>
  <div class="relative__container">
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
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
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
