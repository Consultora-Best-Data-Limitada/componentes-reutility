<template>
  <div class="flex__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

defineProps({
  padding: {
    default: 0,
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
  },
  margin: {
    default: 0,
    type: [String, Number] as PropType<CSS.MarginProperty<string | number>>,
  },
  width: {
    default: "",
    type: String as PropType<CSS.WidthProperty<string | number>>,
  },
  height: {
    default: "",
    type: String as PropType<CSS.HeightProperty<string | number>>,
  },
  alignItems: {
    default: "",
    type: String as PropType<CSS.AlignItemsProperty>,
  },
  alignContent: {
    default: "",
    type: String as PropType<CSS.AlignContentProperty>,
  },
  justifyItems: {
    default: "",
    type: String as PropType<CSS.JustifyItemsProperty>,
  },
  flexDirection: {
    default: "row",
    type: String as PropType<CSS.FlexDirectionProperty>,
  },
  justifyContent: {
    default: "",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
});
</script>

<style scoped>
.flex__container {
  display: flex;
  width: v-bind(width);
  margin: v-bind(margin);
  height: v-bind(height);
  padding: v-bind(padding);
  align-items: v-bind(alignItems);
  align-content: v-bind(alignContent);
  justify-items: v-bind(justifyItems);
  flex-direction: v-bind(flexDirection);
  justify-content: v-bind(justifyContent);
}
</style>
