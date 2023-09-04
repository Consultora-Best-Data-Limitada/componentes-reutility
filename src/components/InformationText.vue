<template>
  <div class="grid gap-x-3 items-center information-text__wrapper">
    <p class="text-base leading-4 information-text__text">
      {{ label }}
    </p>
    <p class="text-base leading-4 pl-3 font-semibold overflow-hidden text-ellipsis information-text__text">
      <slot />
    </p>
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

// Definiciones

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  padding: {
    default: "0.75rem 0",
    type: String as PropType<Property.Padding>,
  },
  textTransform: {
    default: "capitalize",
    type: String as PropType<Property.TextTransform>,
  },
  color: {
    default: "secundario",
    type: String as PropType<Property.Color | CustomColor>,
  },
});

// Composables

const { getRealColor } = useColors();

// Computed

const realColor = computed(() => {
  return getRealColor(props.color);
});
</script>

<style scoped>
.information-text__wrapper {
  padding: v-bind(padding);
  grid-template-columns: v-bind(gridTemplateColumns);
}

.information-text__text {
  color: v-bind(realColor);
}
</style>
