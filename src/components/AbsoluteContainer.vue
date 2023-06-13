<template>
  <div class="absolute__container">
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
    type: String as PropType<Property.Width>,
  },
  height: {
    default: "auto",
    type: String as PropType<Property.Height>,
  },
  margin: {
    default: "initial",
    type: String as PropType<Property.Margin>,
  },
  padding: {
    default: "initial",
    type: String as PropType<Property.Padding>,
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
  top: {
    default: "initial",
    type: String as PropType<Property.Top>,
  },
  left: {
    default: "initial",
    type: String as PropType<Property.Left>,
  },
  right: {
    default: "initial",
    type: String as PropType<Property.Right>,
  },
  bottom: {
    default: "initial",
    type: String as PropType<Property.Bottom>,
  },
  transform: {
    default: "initial",
    type: String as PropType<Property.Transform>,
  },
  zIndex: {
    default: "initial",
    type: String as PropType<Property.ZIndex>,
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
.absolute__container {
  top: v-bind(top);
  left: v-bind(left);
  position: absolute;
  right: v-bind(right);
  width: v-bind(width);
  bottom: v-bind(bottom);
  margin: v-bind(margin);
  height: v-bind(height);
  z-index: v-bind(zIndex);
  padding: v-bind(padding);
  overflow: v-bind(overflow);
  transform: v-bind(transform);
  box-shadow: v-bind(boxShadow);
  border-radius: v-bind(borderRadius);
  background-color: v-bind(backgroundColorInner);
}
</style>
