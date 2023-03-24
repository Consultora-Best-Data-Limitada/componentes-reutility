<template>
  <TextContainer
    font-size="1rem"
    :color="textColor"
    line-height="1.25rem"
    :text-align="textAlign"
    :font-weight="fontWeight"
    :text-transform="textTransform"
  >
    <slot />
  </TextContainer>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Componentes
import TextContainer from "@/components/TextContainer.vue";

// Definiciones

const props = defineProps({
  disabled: {
    type: Boolean,
  },
  selected: {
    type: Boolean,
  },
  textTransform: {
    default: "",
    type: String as PropType<CSS.TextTransformProperty>,
  },
  textAlign: {
    default: "center",
    type: String as PropType<CSS.TextAlignProperty>,
  },
});

// Computed

const textColor = computed<CustomColor>(() => {
  if (props.disabled) return "neutro-4";
  if (props.selected) return "acento-principal";
  return "secundario";
});

const fontWeight = computed(() => {
  if (props.selected) return 700;
  return 400;
});
</script>
