<template>
  <TTooltip :disabled="disabled">
    <template #activator>
      <div
        :class="pageSwitchContainerClass"
        @click="toggle"
      >
        <div
          v-if="label"
          class="page-switch__label"
        >
          {{ label }}
        </div>
        <div class="page-switch__switch">
          <input
            v-model="model"
            type="checkbox"
            class="page-switch__checkbox"
          />
          <div :class="pageSwitchSliderClass"></div>
        </div>
      </div>
    </template>
    <p
      v-if="tooltip && !disabled"
      class="p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
    >
      {{ tooltip }}
    </p>
  </TTooltip>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import TTooltip from "./TTooltip.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    default: "",
    type: String,
  },
  tooltip: {
    default: "",
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  activeColor: {
    default: "acento-principal",
    type: String as PropType<Property.Color | CustomColor>,
  },
  width: {
    default: "1.5rem",
    type: String as PropType<Property.Width>,
  },
  color: {
    default: "neutro-4",
    type: String as PropType<Property.Color | CustomColor>,
  },
  readonly: {
    type: Boolean,
  },
  labelWeight: {
    default: 600,
    type: [Number, String] as PropType<Property.FontWeight>,
  },
  gridTemplateColumns: {
    default: "1fr auto",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<Property.JustifyContent>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const colors = useColors();

// Computed

const model = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (!props.readonly) emits("update:model-value", value);
  },
});

const activeColorInner = computed(() => {
  return colors.getRealColor(props.activeColor);
});

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});

const realColor = computed(() => {
  if (props.disabled) return "rgb(var(--neutro-4))";
  if (!props.activeColor) return colorInner.value;
  return model.value ? activeColorInner.value : colorInner.value;
});

const pageSwitchSliderClass = computed(() => ({
  "page-switch__slider": true,
  "page-switch__slider--active": model.value,
}));

const pageSwitchContainerClass = computed(() => ({
  "page-switch__container": true,
  "page-switch__container--disabled": props.disabled,
}));

const labelColor = computed(() => {
  if (props.disabled) return "rgb(var(--neutro-4))";
  return "rgb(var(--secundario))";
});

// Methods

const toggle = () => {
  if (props.readonly || props.disabled) return;
  model.value = !model.value;
};
</script>

<style lang="scss" scoped>
.page-switch__container {
  display: grid;
  cursor: pointer;
  column-gap: 0.75rem;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  justify-content: v-bind(justifyContent);

  &--disabled {
    pointer-events: none;
  }
}

.page-switch__label {
  font-size: 1rem;
  line-height: 1rem;
  user-select: none;
  color: v-bind(labelColor);
  font-weight: v-bind(labelWeight);
  font-family: "Metropolis", sans-serif;
}

.page-switch__switch {
  height: 1rem;
  cursor: pointer;
  position: relative;
  border-radius: 1rem;
  width: v-bind(width);
  background-color: v-bind(realColor);
  transition: background-color 100ms ease, opacity 100ms ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }

  .page-switch__checkbox {
    opacity: 0;
    cursor: pointer;
  }

  .page-switch__slider {
    top: 0.25rem;
    left: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    border-radius: 50%;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;

    &.page-switch__slider--active {
      left: calc(100% - 12px);
    }
  }
}
</style>
