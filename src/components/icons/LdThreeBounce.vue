<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 52 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      r="6"
      cx="6"
      cy="6"
      stroke="none"
      :fill="fillInner"
    >
      <animate
        dur="1s"
        begin="0.1"
        values="0;1;0"
        attributeName="opacity"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      r="6"
      cy="6"
      cx="26"
      stroke="none"
      :fill="fillInner"
    >
      <animate
        dur="1s"
        begin="0.2"
        values="0;1;0"
        attributeName="opacity"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      r="6"
      cy="6"
      cx="46"
      stroke="none"
      :fill="fillInner"
    >
      <animate
        dur="1s"
        begin="0.3"
        values="0;1;0"
        attributeName="opacity"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definiciones

const props = defineProps({
  fill: {
    default: "black",
    type: String as PropType<CustomColor | Property.Fill>,
  },
  size: {
    default: "1rem",
    type: [String, Number] as PropType<Property.Width>,
  },
});

// Composables

const colors = useColors();

// Computed

const fillInner = computed(() => {
  return colors.getRealColor(props.fill);
});
</script>
