<template>
  <div class="flex__container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

defineProps({
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
  },
  margin: {
    default: "initial",
    type: [String, Number] as PropType<Property.Margin>,
  },
  width: {
    default: "initial",
    type: String as PropType<Property.Width>,
  },
  height: {
    default: "initial",
    type: String as PropType<Property.Height>,
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
  flexDirection: {
    default: "row",
    type: String as PropType<Property.FlexDirection>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
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
