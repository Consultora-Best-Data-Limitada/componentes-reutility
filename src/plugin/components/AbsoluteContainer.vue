<template>
  <div class="absolute__container">
    <slot/>
  </div>
</template>

<script setup lang="ts">
// Vue
import {computed} from "vue";

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
  top: {
    default: "",
    type: String as PropType<CSS.TopProperty<string>>,
  },
  left: {
    default: "",
    type: String as PropType<CSS.LeftProperty<string>>,
  },
  right: {
    default: "",
    type: String as PropType<CSS.RightProperty<string>>,
  },
  bottom: {
    default: "",
    type: String as PropType<CSS.BottomProperty<string>>,
  },
  transform: {
    default: "unset",
    type: String as PropType<CSS.TransformProperty>,
  },
  zIndex: {
    default: "1",
    type: String as PropType<CSS.ZIndexProperty>,
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
