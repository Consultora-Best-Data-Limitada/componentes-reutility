<template>
  <v-tooltip
    location="bottom"
    :disabled="disabled || !checkSlot()"
    class="icon-button__tooltip-container"
  >
    <template #activator="activator">
      <div
        :style="iconButtonStyle"
        v-bind="activator.props"
        :class="iconButtonClass"
        @click="onClick"
      >
        <FontAwesomeIcon
          v-if="icon.startsWith('fa')"
          :name="icon"
          :size="size"
          :color="colorInner"
        />
        <SvgIcon
          v-else
          :name="icon"
          :size="size"
          :color="colorInner"
        />
      </div>
    </template>
    <div class="icon-button__tooltip">
      <slot />
    </div>
  </v-tooltip>
</template>

<script setup lang="ts">
// Vue
import { computed, useSlots } from "vue";

//Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

//Componentes
import SvgIcon from "@/components/custom/SvgIcon.vue";
import FontAwesomeIcon from "@/components/custom/FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  color: {
    default: "black",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  icon: {
    type: String,
    required: true,
  },
  size: {
    default: "20px",
    type: String as PropType<CSS.WidthProperty<string>>,
  },
  disabled: {
    type: Boolean,
  },
  backgroundColor: {
    default: "",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
  containerSize: {
    default: "",
    type: String as PropType<CSS.WidthProperty<string>>,
  },
});

const emits = defineEmits(["click"]);

// Composables

const slots = useSlots();

// Computed

const iconButtonClass = computed(() => ({
  "icon-button__button": true,
  "icon-button__button--disabled": props.disabled,
  "icon-button__button--background": !!props.backgroundColor,
  "icon-button__button--background-disabled": props.disabled && props.backgroundColor,
}));

const backgroundInner = computed(() => {
  if (!props.backgroundColor) return "";
  if (props.backgroundColor.startsWith("-")) {
    return `rgb(var(--v-theme${props.backgroundColor}))`;
  }
  return props.backgroundColor;
});

const iconButtonStyle = computed(() => ({
  width: props.containerSize ?? "initial",
  height: props.containerSize ?? "initial",
  background: backgroundInner.value ?? "initial",
}));

const colorInner = computed(() =>
  props.disabled && !props.backgroundColor ? "-neutro-4" : props.color,
);

// Methods

const checkSlot = () => !!slots["default"];

// Emits

const onClick = (ev: MouseEvent) => {
  emits("click", ev);
};
</script>

<style scoped lang="scss">
.icon-button__button {
  cursor: pointer;

  &--background {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    justify-content: center;
  }

  &--disabled {
    pointer-events: none;
  }

  &--background-disabled {
    opacity: 0.3;
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
}

.icon-button__tooltip-container :deep(> div) {
  border-radius: 1rem;
  background-color: rgba(var(--v-theme-secundario), 0.7);
}

.icon-button__tooltip {
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: "Metropolis", sans-serif;
}
</style>
