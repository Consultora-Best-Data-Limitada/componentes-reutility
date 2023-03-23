<template>
  <button
    :disabled="disabled"
    :class="customButtonClass"
    @click="onClick"
  >
    <template v-if="preppendIcon">
      <FontAwesomeIcon
        v-if="!loading"
        size="1rem"
        :color="iconColor"
        :name="preppendIcon"
      />
    </template>
    <span class="custom-button__text">
      <LdThreeBounce
        v-if="loading"
        :fill="iconColor"
      />
      <slot v-else />
    </span>
    <template v-if="appendIcon">
      <FontAwesomeIcon
        v-if="!loading"
        size="1rem"
        :color="iconColor"
        :name="appendIcon"
      />
    </template>
  </button>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

// Componentes
import FontAwesomeIcon from "@/components/custom/FontAwesomeIcon.vue";
import LdThreeBounce from "@/components/icons/LdThreeBounce.vue";

// Definiciones

const props = defineProps({
  color: {
    default: "#000000",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  contentColor: {
    default: "#ffffff",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  hoverColor: {
    default: "",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  activeColor: {
    default: "",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  outlined: {
    type: Boolean,
  },
  width: {
    default: "initial",
    type: String as PropType<CSS.WidthProperty<string>>,
  },
  height: {
    default: "2.5rem",
    type: String as PropType<CSS.HeightProperty<string>>,
  },
  disabled: {
    type: Boolean,
  },
  appendIcon: {
    default: "",
    type: String,
  },
  preppendIcon: {
    default: "",
    type: String,
  },
  justifyContent: {
    default: "center",
    type: String as PropType<CSS.JustifyContentProperty>,
  },
  gridTemplateColumns: {
    default: "",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
  },
  loading: {
    type: Boolean,
  },
});

const emits = defineEmits(["click"]);

// Computed

const iconColor = computed(() => (props.outlined ? props.color : props.contentColor));

const colorInner = computed(() => {
  if (props.color?.startsWith("-")) {
    return `rgb(var(--v-theme${props.color}))`;
  }
  return props.color;
});

const contentColorInner = computed(() => {
  if (props.contentColor?.startsWith("-")) {
    return `rgb(var(--v-theme${props.contentColor}))`;
  }
  return props.contentColor;
});

const hoverColorInner = computed(() => {
  if (!props.hoverColor) {
    if (props.color?.startsWith("-")) {
      return `rgb(var(--v-theme${props.color}-hover))`;
    }
    return props.color;
  }
  if (props.hoverColor.startsWith("-")) {
    return `rgb(var(--v-theme${props.hoverColor}))`;
  }
  return props.hoverColor;
});

const activeColorInner = computed(() => {
  if (!props.activeColor) {
    if (props.color?.startsWith("-")) {
      return `rgb(var(--v-theme${props.color}-pressed))`;
    }
    return props.color;
  }
  if (props.activeColor.startsWith("-")) {
    return `rgb(var(--v-theme${props.activeColor}))`;
  }
  return props.activeColor;
});

const customButtonClass = computed(() => ({
  "custom-button__container": true,
  "custom-button__container--loading": props.loading,
  "custom-button__container--outlined": props.outlined,
  "custom-button__container--icon": props.preppendIcon || props.appendIcon,
}));

const gridTemplateColumnsButton = computed(() => {
  if (props.gridTemplateColumns) return props.gridTemplateColumns;
  if (props.preppendIcon || props.appendIcon) return "1rem 1fr 1rem";
  return "1fr";
});

// Methods

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;
  emits("click", ev);
};
</script>

<style lang="scss" scoped>
.custom-button__container {
  /* TEXT STYLE */
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25rem;
  color: v-bind(contentColorInner);
  font-family: "Metropolis", sans-serif;
  /* BUTTON STYLE */
  display: grid;
  cursor: pointer;
  user-select: none;
  padding: 0 0.75rem;
  column-gap: 0.5rem;
  text-align: center;
  border-radius: 1rem;
  align-items: center;
  width: v-bind(width);
  height: v-bind(height);
  border: 2px solid transparent;
  background-color: v-bind(colorInner);
  justify-content: v-bind(justifyContent);
  grid-template-columns: v-bind(gridTemplateColumnsButton);

  .custom-button__text {
    height: 1rem;
  }

  &--loading {
    pointer-events: none;
  }

  &.custom-button__container--icon .custom-button__text {
    grid-column: 2;
  }

  &:not(&--outlined) {
    &:not(:hover):focus {
      outline: none;
      border-color: v-bind(activeColorInner);
      background-color: v-bind(hoverColorInner);
    }

    &:disabled {
      pointer-events: none;
      color: rgba(var(--v-theme-neutro-4));
      background-color: rgba(var(--v-theme-neutro-3));
    }

    &:hover {
      background-color: v-bind(hoverColorInner);
    }

    &:active {
      background-color: v-bind(activeColorInner);
    }
  }

  &--outlined {
    color: v-bind(colorInner);
    background-color: transparent;
    border-color: v-bind(colorInner);

    &:not(:hover):focus {
      outline: none;
      color: v-bind(activeColorInner);
      border-color: v-bind(hoverColorInner);

      & :deep(*) {
        fill: v-bind(activeColorInner) !important;
        color: v-bind(activeColorInner) !important;
      }
    }

    &:disabled {
      pointer-events: none;
      background-color: transparent;
      color: rgba(var(--v-theme-neutro-4));
      border-color: rgba(var(--v-theme-neutro-4));

      & :deep(*) {
        fill: rgba(var(--v-theme-neutro-4)) !important;
        color: rgba(var(--v-theme-neutro-4)) !important;
      }
    }

    &:hover {
      color: v-bind(hoverColorInner);
      border-color: v-bind(hoverColorInner);

      & :deep(*) {
        fill: v-bind(hoverColorInner) !important;
        color: v-bind(hoverColorInner) !important;
      }
    }

    &:active {
      color: v-bind(activeColorInner);
      border-color: v-bind(activeColorInner);

      & :deep(*) {
        fill: v-bind(activeColorInner) !important;
        color: v-bind(activeColorInner) !important;
      }
    }
  }
}
</style>
