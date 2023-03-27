<template>
  <div
    ref="svgContent"
    class="svg-icon__container"
  ></div>
</template>

<script setup lang="ts">
// Vue
import {computed, onMounted, ref, watch} from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Definiciones

const props = defineProps({
  color: {
    default: "black",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  src: {
    type: String,
    required: true,
  },
  size: {
    default: "1.5rem",
    type: [String, Number] as PropType<CSS.WidthProperty<string | number>>,
  },
});

// Composables

const colors = useColors();

// Mounted

onMounted(() => {
  mountSVG();
});

// Data

const svgContent = ref<HTMLDivElement | null>(null);

// Computed

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});

const realSrc = computed(() => {
  return new URL(props.src, import.meta.url).href;
});

// Methods

const mountSVG = async () => {
  if (!svgContent.value) return;
  const response = await fetch(realSrc.value);
  svgContent.value.innerHTML = await response.text();
  const svg = svgContent.value.querySelector("svg");
  if (!svg) return;
  svg.setAttribute("width", props.size.toString());
  svg.setAttribute("height", props.size.toString());
};

// Watchs

watch(realSrc, mountSVG);
</script>

<style scoped lang="scss">
.svg-icon__container {
  display: flex;
  width: v-bind(size);
  height: v-bind(size);
  align-items: center;
  justify-content: center;
}

.svg-icon__container :deep(> svg) {
  fill: v-bind(colorInner);
}
</style>
