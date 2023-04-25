<template>
  <div
    :class="iconTooltipContainerClass"
  >
    <div
      :class="iconButtonClass"
      @click="onClick"
      @mouseenter.stop="onMouseEnter"
      @mouseleave.stop="onMouseLeave"
    >
      <FontAwesomeIcon
        v-if="icon.startsWith('fa')"
        :name="icon"
        :size="size"
        :color="colorInner"
      />
      <FigmaIcon
        v-else-if="icon.startsWith('fm')"
        :name="icon"
        :size="size"
        :color="colorInner"
      />
      <SvgIcon
        v-else
        :src="icon"
        :size="size"
        :color="colorInner"
      />
    </div>
    <div
      v-if="checkSlot()"
      ref="tooltipRef"
      :class="tooltipClass"
    >
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {computed, nextTick, ref, useSlots} from "vue";

// Composables
import {useColors} from "../composables/colors";

//Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

//Componentes
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";
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
  borderRadius: {
    default: "1rem",
    type: String as PropType<CSS.BorderRadiusProperty<string>>,
  },
});

const emits = defineEmits(["click"]);

// Composables

const slots = useSlots();
const colors = useColors();

// Data

const open = ref(false);
const top = ref("initial");
const left = ref("initial");
const right = ref("initial");
const tooltipRef = ref<HTMLDivElement | null>(null);

// Computed

const tooltipClass = computed(() => ({
  'icon-button__tooltip': true,
  'icon-button__tooltip--opened': open.value,
}));

const iconTooltipContainerClass = computed(() => ({
  'icon-button__tooltip-container': true,
  'icon-button__tooltip-container--disabled': props.disabled,
}));

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
  props.disabled ? "neutro-4" : props.color,
);

// Methods

const checkSlot = () => !!slots["default"];

const onMouseEnter = async () => {
  if (!tooltipRef.value) return;
  open.value = true;
  await nextTick();
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
  top.value = `calc(${rect.top}px + ${props.containerSize})`;
};

const onMouseLeave = () => {
  top.value = "";
  left.value = "";
  right.value = "";
  open.value = false;
};

// Emits

const onClick = (ev: MouseEvent) => {
  emits("click", ev);
};
</script>

<style scoped lang="scss">
.icon-button__button {
  width: v-bind(containerSize);
  height: v-bind(containerSize);

  &--background {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: v-bind(borderRadius);
    background: v-bind(backgroundInner);
  }

  &--disabled {
    pointer-events: none;
  }

  &--background-disabled {
    background-color: rgb(var(--neutro-3));
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
  justify-content: center;

  &--disabled {
    pointer-events: none;
  }

  .icon-button__tooltip {
    opacity: 0;
    z-index: 1007;
    display: none;
    position: fixed;
    padding: 0.5rem;
    top: v-bind(top);
    left: v-bind(left);
    border-radius: 1rem;
    right: v-bind(right);
    transition: all 300ms ease;
    color: rgb(var(--neutro-1));
    background-color: rgba(var(--neutro-4), 0.7);
    // Text style
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    line-height: 1.25rem;
    font-family: "Metropolis", sans-serif !important;

    &--opened {
      opacity: 1;
      display: block;
    }
  }

}
</style>
