<template>
  <div
    :class="gradientButtonClass"
    @click="onClick"
  >
    <div
      v-if="!loading"
      class="gradient-button__content"
    >
      <FontAwesomeIcon
        v-if="icon"
        size="1rem"
        :name="icon"
        :color="textColor"
      />
      <slot />
    </div>
    <LdThreeBounce
      v-else
      size="1.125rem"
      fill="neutro-1"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Componentes
import FontAwesomeIcon from "@/components/FontAwesomeIcon.vue";
import LdThreeBounce from "@/components/icons/LdThreeBounce.vue";

const props = defineProps({
  width: {
    default: "100%",
    type: [String, Number] as PropType<CSS.WidthProperty<string | number>>,
  },
  height: {
    default: "100%",
    type: [String, Number] as PropType<CSS.HeightProperty<string | number>>,
  },
  colorFrom: {
    default: "#000000",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  colorTo: {
    default: "#ffffff",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  textColor: {
    default: "#ffffff",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  disabled: {
    type: Boolean,
  },
  icon: {
    default: "",
    type: String,
  },
  loading: {
    type: Boolean,
  },
});

const emits = defineEmits(["click"]);

// Computed

const colorFromInner = computed(() => {
  if (props.colorFrom?.startsWith("-")) {
    return `rgb(var(--${props.colorFrom}))`;
  }
  return props.colorFrom;
});

const colorToInner = computed(() => {
  if (props.colorTo?.startsWith("-")) {
    return `rgb(var(--${props.colorTo}))`;
  }
  return props.colorTo;
});

const textColorInner = computed(() => {
  if (props.textColor?.startsWith("-")) {
    return `rgb(var(--${props.textColor}))`;
  }
  return props.textColor;
});

const gradientButtonClass = computed(() => ({
  "gradient-button__container": true,
  "gradient-button__container--loading": props.loading,
  "gradient-button__container--disabled": props.disabled,
}));

// Emits

const onClick = (ev: MouseEvent) => {
  if (!props.disabled) emits("click", ev);
};
</script>

<style scoped lang="scss">
.gradient-button__container {
  display: flex;
  cursor: pointer;
  padding: 0.75rem;
  font-weight: 700;
  overflow: hidden;
  user-select: none;
  position: relative;
  font-size: 1.125rem;
  width: v-bind(width);
  border-radius: 0.5rem;
  line-height: 1.125rem;
  height: v-bind(height);
  justify-content: center;
  color: v-bind(textColorInner);
  font-family: "Metropolis", sans-serif;
  background: linear-gradient(323.09deg, v-bind(colorToInner) 0%, v-bind(colorFromInner) 89.32%);

  &.gradient-button__container--disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &.gradient-button__container--loading {
    pointer-events: none;
  }

  &::before {
    top: 0;
    opacity: 0;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-color: #000000;
    transition: opacity 200ms ease;
  }

  &:hover::before {
    opacity: 0.15;
  }

  &:active::before {
    opacity: 0.3;
  }
}

.gradient-button__content {
  display: flex;
  column-gap: 0.5rem;
}
</style>
