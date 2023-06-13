<template>
  <div
    ref="svgContent"
    class="svg-icon__container"
  ></div>
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted, ref, watch } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definiciones

const props = defineProps({
  color: {
    default: "black",
    type: String as PropType<Property.Color | CustomColor>,
  },
  src: {
    type: String,
    required: true,
  },
  size: {
    default: "1.5rem",
    type: [String, Number] as PropType<Property.Width>,
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

// Methods

const mountSVG = async () => {
  if (!svgContent.value) return;
  try {
    const response = await fetch(props.src);
    svgContent.value.innerHTML = await response.text();
    const svg = svgContent.value.querySelector("svg");
    if (!svg) return;
    svg.setAttribute("width", props.size.toString());
    svg.setAttribute("height", props.size.toString());
  } catch (err) {
    console.log(err);
  }
};

// Watchs

watch(() => props.src, mountSVG);

watch(() => props.size, mountSVG);
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
