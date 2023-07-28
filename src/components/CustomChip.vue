<template>
  <div
    :class="wrapperClass"
    @click="select"
  >
    <TextContainer
      :color="color"
      predefined-style="caption"
    >
      {{ text }}
    </TextContainer>
    <IconButton
      v-if="selected"
      size="1rem"
      color="neutro-4"
      icon="fm-circle-close"
      @click.stop="deselect"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import IconButton from "@/components/IconButton.vue";
import TextContainer from "@/components/TextContainer.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    default: null,
    type: [String, Number, Array] as PropType<string | number | (string | number)[] | null>,
  },
  text: {
    type: String,
    required: true,
  },
  value: {
    required: true,
    type: [String, Number] as PropType<string | number>,
  },
  maxWidth: {
    default: "initial",
    type: String as PropType<Property.Width>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const selected = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue === props.value;
});

const wrapperClass = computed(() => {
  return {
    "custom-chip__wrapper": true,
    "custom-chip__wrapper--selected": selected.value,
  };
});

const color = computed(() => {
  return selected.value ? "acento-secundario-pressed" : "acento-secundario";
});

const wrapperColor = computed(() => {
  return `rgb(var(--${color.value}))`;
});

// Methods

function select() {
  if (selected.value) return;
  if (Array.isArray(props.modelValue)) {
    const copia = [...props.modelValue];
    copia.push(props.value);
    emits("update:model-value", copia);
  } else {
    emits("update:model-value", props.value);
  }
}

function deselect() {
  if (!selected.value) return;
  if (Array.isArray(props.modelValue)) {
    const copia = [...props.modelValue];
    const index = copia.indexOf(props.value);
    copia.splice(index, 1);
    emits("update:model-value", copia);
  } else {
    emits("update:model-value", null);
  }
}
</script>

<style scoped lang="scss">
.custom-chip__wrapper {
  display: grid;
  cursor: pointer;
  align-items: center;
  column-gap: 0.25rem;
  border-radius: 1rem;
  grid-auto-flow: column;
  padding: 0.25rem 0.5rem;
  max-width: v-bind(maxWidth);
  justify-content: space-between;
  transition: opacity 200ms ease;
  border: 1px solid v-bind(wrapperColor);

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }

  &--selected {
    border-width: 2px;
  }
}
</style>
