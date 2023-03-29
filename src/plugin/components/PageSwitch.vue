<template>
  <div class="page-switch__tooltip-container">
    <div
      :style="pageSwitchContainer"
      class="page-switch__container"
      @click="toggle"
      @mouseenter="onMouseEnter"
    >
      <div
        v-if="label"
        :style="labelStyle"
        class="page-switch__label"
      >
        {{ label }}
      </div>
      <div
        :style="pageSwitchStyle"
        class="page-switch__switch"
      >
        <input
          v-model="model"
          type="checkbox"
          class="page-switch__checkbox"
        />
        <div :class="pageSwitchSliderClass"></div>
      </div>
    </div>
    <div
      v-if="tooltip"
      ref="tooltipRef"
      class="page-switch__tooltip"
    >
      {{ tooltip }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {computed, ref} from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType, StyleValue} from "vue";

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
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  width: {
    default: "1.5rem",
    type: String as PropType<CSS.WidthProperty<string>>,
  },
  color: {
    default: "neutro-4",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  readonly: {
    type: Boolean,
  },
  labelWeight: {
    default: 600,
    type: [Number, String] as PropType<CSS.FontWeightProperty>,
  },
  gridTemplateColumns: {
    default: "1fr auto",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
  },
  justifyContent: {
    default: "initial",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const colors = useColors();

// Data

const left = ref("initial");
const right = ref("initial");
const tooltipRef = ref<HTMLDivElement | null>(null);

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
  if (!props.activeColor) return colorInner.value;
  return model.value ? activeColorInner.value : colorInner.value;
});

const pageSwitchSliderClass = computed(() => ({
  "page-switch__slider": true,
  "page-switch__slider--active": model.value,
}));

const pageSwitchContainer = computed<StyleValue>(() => ({
  "justify-content": props.justifyContent,
  "pointer-events": props.disabled ? "none" : "initial",
  "grid-template-columns": props.label ? props.gridTemplateColumns : "1fr",
}));

const pageSwitchStyle = computed<StyleValue>(() => ({
  width: props.width,
  "background-color": props.disabled ? "rgb(var(--neutro-4))" : realColor.value,
}));

const labelStyle = computed<StyleValue>(() => ({
  "font-weight": props.labelWeight,
}));

// Methods

const toggle = () => {
  if (props.readonly || props.disabled) return;
  model.value = !model.value;
};

const onMouseEnter = () => {
  if (!tooltipRef.value) return;
  const rect = tooltipRef.value.getBoundingClientRect();
  const rightX = rect.x + rect.width;
  if (rect.x < 0) {
    left.value = "0";
    right.value = "initial";
  } else if (rightX >= window.innerWidth) {
    left.value = "initial";
    right.value = "0";
  } else {
    left.value = "initial";
    right.value = "initial";
  }
};
</script>

<style lang="scss" scoped>
.page-switch__container {
  display: grid;
  cursor: pointer;
  column-gap: 0.75rem;
  align-items: center;
}

.page-switch__tooltip-container {
  display: flex;
  position: relative;
  justify-content: center;

  .page-switch__tooltip {
    opacity: 0;
    z-index: 1007;
    padding: 0.5rem;
    left: v-bind(left);
    visibility: hidden;
    border-radius: 1rem;
    right: v-bind(right);
    top: calc(100% + 0.5rem);
    transition: all 300ms ease;
    color: rgb(var(--neutro-1));
    background-color: rgba(var(--neutro-4), 0.7);
    // Text style
    font-size: 1rem;
    position: absolute;
    white-space: nowrap;
    line-height: 1.25rem;
    font-family: "Metropolis", sans-serif;
  }

  &:hover .page-switch__tooltip {
    opacity: 1;
    visibility: visible;
  }
}


.page-switch__label {
  font-size: 1rem;
  line-height: 1rem;
  user-select: none;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;
}

.page-switch__switch {
  height: 1rem;
  width: 1.5rem;
  cursor: pointer;
  position: relative;
  border-radius: 1rem;
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
