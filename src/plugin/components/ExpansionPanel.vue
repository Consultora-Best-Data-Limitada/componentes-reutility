<template>
  <div :class="containerClass">
    <div
      class="expansion-panel__activator"
      @click="toggle"
    >
      <slot name="activator" />
    </div>
    <div :class="wrapperClass">
      <div class="expansion-panel__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {ref, computed} from "vue";

// Composables
import {useColors} from "@/plugin/composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Definiciones

const props = defineProps({
  outlined: {
    type: Boolean,
  },
  backgroundColor: {
    default: "neutro-1",
    type: String as PropType<CustomColor | CSS.BackgroundColorProperty>,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<CSS.BorderRadiusProperty<string>>,
  },
  modelValue: {
    default: undefined,
    type: Boolean,
  },
  transitionDuration: {
    default: "250ms",
    type: String,
  },
  transitionTimingFunction: {
    default: "ease-in-out",
    type: String as PropType<CSS.TransitionTimingFunctionProperty>,
  },
  boxShadow: {
    default: "initial",
    type: String as PropType<CSS.BoxShadowProperty>,
  },
});

const emits = defineEmits([
  "update:model-value",
]);

// Composables

const colors = useColors();

// Data

const opened = ref(false);

// Computed

const model = computed({
  get() {
    if(props.modelValue === undefined) return opened.value;
    return props.modelValue;
  },
  set(value: boolean) {
    opened.value = value;
    emits("update:model-value", value);
  }
})

const containerClass = computed(() => {
  return {
    "expansion-panel__container": true,
    "expansion-panel__container--outlined": props.outlined,
  };
});

const wrapperClass = computed(() => {
  return {
    "expansion-panel__wrapper": true,
    "expansion-panel__wrapper--opened": model.value,
  };
});

const backgroundColorInner = computed(() => {
  return colors.getRealColor(props.backgroundColor);
});

// Methods

function toggle() {
  model.value = !model.value;
}
</script>

<style scoped lang="scss">
.expansion-panel__container {
  overflow: hidden;
  box-shadow: v-bind(boxShadow);
  border-radius: v-bind(borderRadius);
  background-color: v-bind(backgroundColorInner);

  &--outlined {
    border: 1px solid rgb(var(--neutro-3));
  }
}

.expansion-panel__activator {
  cursor: pointer;
  user-select: none;
}

.expansion-panel__wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: grid-template-rows;
  transition-duration: v-bind(transitionDuration);
  transition-timing-function: v-bind(transitionTimingFunction);
}

.expansion-panel__content {
  overflow: hidden;
}

.expansion-panel__wrapper--opened {
  grid-template-rows: 1fr;
}
</style>
