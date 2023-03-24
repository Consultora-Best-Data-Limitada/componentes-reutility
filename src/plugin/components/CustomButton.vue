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
      <slot v-else/>
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
import {computed} from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Componentes
import FontAwesomeIcon from "./FontAwesomeIcon.vue";
import LdThreeBounce from "./icons/LdThreeBounce.vue";

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

// Composables

const colors = useColors();

// Computed

const iconColor = computed(() => (props.outlined ? props.color : props.contentColor));

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});

const contentColorInner = computed(() => {
  return colors.getRealColor(props.contentColor)
});

const hoverColorInner = computed(() => {
  const name = `${props.color}-hover`;
  if (!props.hoverColor && colors.isCustom(name)) {
    return colors.getRealColor(name)
  }
  return colors.getRealColor(props.hoverColor);
});

const activeColorInner = computed(() => {
  const name = `${props.color}-pressed`;
  if (!props.activeColor && colors.isCustom(name)) {
    return colors.getRealColor(name)
  }
  return colors.getRealColor(props.activeColor);
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
      color: rgba(var(--neutro-4));
      background-color: rgba(var(--neutro-3));
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
      color: rgba(var(--neutro-4));
      border-color: rgba(var(--neutro-4));

      & :deep(*) {
        fill: rgba(var(--neutro-4)) !important;
        color: rgba(var(--neutro-4)) !important;
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
