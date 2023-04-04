<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill="fillInner"
      d="M3.5555 0C1.59185 0 -6.10352e-05 1.592 -6.10352e-05 3.55556V12.4444C-6.10352e-05 14.408 1.59185 16 3.5555 16H12.4444C14.4081 16 16 14.408 16 12.4444V3.55556C16 1.592 14.4081 0 12.4444 0H3.5555ZM11.5555 5.16623C11.783 5.16712 12.0209 5.24266 12.1945 5.41688C12.5416 5.76355 12.5416 6.31911 12.1945 6.66667L8.86111 10C7.83862 11.0222 6.27426 10.8693 5.47213 9.66667L4.58324 8.33333C4.31097 7.92533 4.42484 7.35555 4.83328 7.08355C5.24181 6.81066 5.81097 6.92444 6.08333 7.33333L6.97222 8.66667C7.15195 8.936 7.38191 8.95112 7.61106 8.72179L10.9166 5.41688C11.0902 5.24355 11.328 5.16623 11.5555 5.16623Z"
    />
  </svg>
</template>

<script setup lang="ts">
// Vue
import {computed} from "vue";

// Composables
import {useColors} from "../../composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Definiciones

const props = defineProps({
  fill: {
    default: "black",
    type: String as PropType<CustomColor | CSS.FillProperty>,
  },
  size: {
    default: "1rem",
    type: [String, Number] as PropType<CSS.WidthProperty<string | number>>,
  },
});

// Composables

const colors = useColors();

// Computed

const fillInner = computed(() => {
  return colors.getRealColor(props.fill);
});
</script>
