<template>
  <div class="header-tabs__container">
    <button
      v-for="(item, index) in items"
      :key="`tab-${index}`"
      :class="getItemClass(index)"
      @click="selectItem(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Definiciones

const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<string[]>,
  },
  modelValue: {
    type: Number,
    required: true,
  },
  columnGap: {
    default: "0.5rem",
    type: String as PropType<CSS.ColumnGapProperty<string>>,
  },
  color: {
    default: "-acento-principal",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emits("update:model-value", value);
  },
});

const colorInner = computed(() => {
  if (props.color?.startsWith("-")) {
    return `rgb(var(--v-theme${props.color}))`;
  }
  return props.color;
});

const hoverColor = computed(() => {
  if (props.color?.startsWith("-")) {
    return `rgba(var(--v-theme${props.color}), 0.1)`;
  }
  return props.color;
});
// Methods

const getItemClass = (index: number) => ({
  "header-tabs__button": true,
  "header-tabs__button--selected": model.value === index,
});

const selectItem = (index: number) => {
  model.value = index;
};
</script>

<style scoped lang="scss">
.header-tabs__container {
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  column-gap: v-bind(columnGap);
}

.header-tabs__button {
  height: 2.875rem;
  border-radius: 1rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid v-bind(colorInner);
  // Text style
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: v-bind(colorInner);
  font-family: "Metropolis", sans-serif;

  &:not(&--selected):hover {
    background-color: v-bind(hoverColor);
  }

  &:not(&--selected):active {
    border: 2px solid v-bind(colorInner);
  }

  &--selected {
    color: rgb(var(--v-theme-neutro-1));
    background-color: v-bind(colorInner);
  }
}
</style>
