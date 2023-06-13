<template>
  <div class="font-awesome-icon__container">
    <em :class="iconClass" />
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

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    default: "black",
    type: String as PropType<Property.Color | CustomColor>,
  },
  size: {
    default: "1rem",
    type: [String, Number] as PropType<Property.FontSize>,
  },
});

// Composables

const colors = useColors();

// Computed

const iconClass = computed(() => {
  return `icon-${props.name}`;
});

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});
</script>

<style scoped lang="scss">
.font-awesome-icon__container {
  display: flex;
  width: v-bind(size);
  align-items: center;
  justify-content: center;

  em {
    font-size: v-bind(size);
    color: v-bind(colorInner);
  }
}
</style>
