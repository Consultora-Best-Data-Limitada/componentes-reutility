<template>
  <div class="icon-button__tooltip-container">
    <div
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
    <div
      v-if="checkSlot()"
      class="icon-button__tooltip"
    >
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {computed, useSlots} from "vue";

// Composables
import {useColors} from "../composables/colors";

//Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

//Componentes
import SvgIcon from "./SvgIcon.vue";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

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
const colors = useColors();

// Computed

const iconButtonClass = computed(() => ({
  "icon-button__button": true,
  "icon-button__button--disabled": props.disabled,
  "icon-button__button--background": !!props.backgroundColor,
  "icon-button__button--background-disabled": props.disabled && props.backgroundColor,
}));

const backgroundInner = computed(() => {
  if (!props.backgroundColor) return "";
  return colors.getRealColor(props.backgroundColor);
});

const colorInner = computed(() =>
  props.disabled && !props.backgroundColor ? "neutro-4" : props.color,
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
  width: v-bind(containerSize);
  height: v-bind(containerSize);
  background: v-bind(backgroundInner);

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

.icon-button__tooltip-container {
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;

  .icon-button__tooltip {
    opacity: 0;
    z-index: 10;
    padding: 0.5rem;
    visibility: hidden;
    border-radius: 1rem;
    top: calc(100% + 0.5rem);
    transition: all 300ms ease;
    color: rgb(var(--neutro-1));
    background-color: rgb(var(--neutro-4));
    // Text style
    font-size: 1rem;
    position: absolute;
    line-height: 1.25rem;
    font-family: "Metropolis", sans-serif;
  }

  &:hover .icon-button__tooltip {
    opacity: 1;
    visibility: visible;
  }
}
</style>
