<template>
  <div class="information-text__container">
    <div class="information-text__label">
      {{ label }}
    </div>
    <div class="information-text__value">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Definiciones

defineProps({
  label: {
    type: String,
    required: true,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
  },
  padding: {
    default: "0.75rem 0",
    type: String as PropType<CSS.PaddingProperty<string>>,
  },
  textTransform: {
    default: "capitalize",
    type: String as PropType<CSS.TextTransformProperty>,
  },
});
</script>

<style scoped lang="scss">
.information-text__container {
  display: grid;
  column-gap: 0.75rem;
  align-items: center;
  padding: v-bind(padding);
  grid-template-columns: v-bind(gridTemplateColumns);
}

.information-text__label,
.information-text__value {
  font-size: 1rem;
  line-height: 1.25rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;
}

.information-text__value {
  font-weight: 600;
  padding-left: 0.75rem;
  text-transform: v-bind(textTransform);
}
</style>
