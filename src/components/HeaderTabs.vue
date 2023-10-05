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

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

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
    type: String as PropType<Property.ColumnGap>,
  },
  color: {
    default: "acento-principal",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const colors = useColors();

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
  return colors.getRealColor(props.color);
});

const hoverColor = computed(() => {
  if (colors.isCustom(props.color)) {
    return `rgba(var(--${props.color}), 0.1)`;
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
  overflow: hidden;
  white-space: nowrap;
  border-radius: 1rem;
  padding: 0.75rem 0.5rem;
  text-overflow: ellipsis;
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
    color: rgb(var(--neutro-1));
    background-color: v-bind(colorInner);
  }
}
</style>
