<template>
  <div class="font-awesome-icon__container">
    <em :class="iconClass" />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    default: "black",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  size: {
    default: "1rem",
    type: [String, Number] as PropType<CSS.FontSizeProperty<string | number>>,
  },
});

// Data

const packages: { [key: string]: string } = {
  fat: "thin",
  fas: "solid",
  fal: "light",
  fab: "brands",
  far: "regular",
  fad: "duotone",
};

// Computed

const iconClass = computed(() => {
  const sharp = props.name.endsWith("#");
  const icon = props.name.replace(/#/g, "");
  const abbreviation = icon.slice(0, 3);
  const name = icon.slice(4);
  if (!abbreviation || !name) return `fa-solid fa-bug`;
  const packageName = packages[abbreviation];
  if (!packageName) return `fa-solid fa-bug`;
  if (!sharp) return `fa-${packageName} fa-${name}`;
  return `fa-sharp fa-${packageName} fa-${name}`;
});

const colorInner = computed(() => {
  if (props.color?.startsWith("-")) {
    return `rgb(var(--v-theme${props.color}))`;
  }
  return props.color;
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
