<template>
  <TTooltip :disabled="disabled">
    <template #activator>
      <div
        :class="iconButtonClass"
        @click="onClick"
      >
        <FigmaIcon
          v-if="icon.startsWith('fm')"
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
    </template>
    <p
      v-if="checkSlot() && !disabled"
      class="p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
    >
      <slot />
    </p>
  </TTooltip>
</template>

<script setup lang="ts">
// Vue
import { computed, useSlots } from "vue";

// Composables
import { useColors } from "@/composables/colors";

//Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

//Componentes
import SvgIcon from "./SvgIcon.vue";
import TTooltip from "./TTooltip.vue";
import FigmaIcon from "./FigmaIcon.vue";

// Definiciones

const props = defineProps({
  color: {
    default: "black",
    type: String as PropType<Property.Color | CustomColor>,
  },
  icon: {
    type: String,
    required: true,
  },
  size: {
    default: "20px",
    type: String as PropType<Property.Width>,
  },
  disabled: {
    type: Boolean,
  },
  backgroundColor: {
    default: "",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  containerSize: {
    default: "initial",
    type: String as PropType<Property.Width>,
  },
  borderRadius: {
    default: "1rem",
    type: String as PropType<Property.BorderRadius>,
  },
  inactive: {
    type: Boolean,
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
  "icon-button__button--inactive": props.inactive,
  "icon-button__button--background": !!props.backgroundColor,
  "icon-button__button--background-disabled": props.disabled && props.backgroundColor,
}));

const backgroundInner = computed(() => {
  if (!props.backgroundColor) return "";
  return colors.getRealColor(props.backgroundColor);
});

const colorInner = computed(() => (props.disabled ? "neutro-4" : props.color));

// Methods

const checkSlot = () => !!slots["default"];

// Emits

const onClick = (ev: MouseEvent) => {
  if (props.disabled || props.inactive) return;
  emits("click", ev);
};
</script>

<style scoped lang="scss">
.icon-button__button {
  user-select: none;
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

  &:not(&--inactive):hover {
    opacity: 0.6;
  }

  &:not(&--inactive):active {
    opacity: 1;
  }
}
</style>
