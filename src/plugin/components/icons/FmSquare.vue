<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill="fillInner"
      d="M3.55562 0C1.59197 0 6.10352e-05 1.592 6.10352e-05 3.55556V12.4444C6.10352e-05 14.408 1.59197 16 3.55562 16H12.4445C14.4081 16 16.0001 14.408 16.0001 12.4444V3.55556C16.0001 1.592 14.4081 0 12.4445 0H3.55562ZM3.55562 1.77778H12.4445C13.4268 1.77778 14.2223 2.57333 14.2223 3.55556V12.4444C14.2223 13.4267 13.4268 14.2222 12.4445 14.2222H3.55562C2.57375 14.2222 1.77784 13.4267 1.77784 12.4444V3.55556C1.77784 2.57333 2.57375 1.77778 3.55562 1.77778Z"
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
