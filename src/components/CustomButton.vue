<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="customButtonClass"
    @click="onClick"
  >
    <template v-if="preppendIcon && !loading">
      <FigmaIcon
        v-if="preppendIcon && preppendIcon.startsWith('fm')"
        size="1rem"
        :color="iconColor"
        :name="preppendIcon"
      />
      <SvgIcon
        v-else
        size="1rem"
        :color="iconColor"
        :src="preppendIcon"
      />
    </template>
    <span class="custom-button__text">
      <LdThreeBounce
        v-if="loading"
        :fill="iconColor"
      />
      <slot v-else />
    </span>
    <template v-if="appendIcon && !loading">
      <FigmaIcon
        v-if="appendIcon && appendIcon.startsWith('fm')"
        size="1rem"
        :color="iconColor"
        :name="appendIcon"
      />
      <SvgIcon
        v-else
        size="1rem"
        :color="iconColor"
        :src="appendIcon"
      />
    </template>
  </button>
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
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";
import LdThreeBounce from "./icons/LdThreeBounce.vue";

// Definiciones

const props = defineProps({
  type: {
    default: "button",
    type: String as PropType<"button" | "submit" | "reset">
  },
  color: {
    default: "#000000",
    type: String as PropType<Property.Color | CustomColor>,
  },
  contentColor: {
    default: "#ffffff",
    type: String as PropType<Property.Color | CustomColor>,
  },
  hoverColor: {
    default: "",
    type: String as PropType<Property.Color | CustomColor>,
  },
  activeColor: {
    default: "",
    type: String as PropType<Property.Color | CustomColor>,
  },
  outlined: {
    type: Boolean,
  },
  width: {
    default: "initial",
    type: String as PropType<Property.Width>,
  },
  height: {
    default: "2.5rem",
    type: String as PropType<Property.Height>,
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
    type: String as PropType<Property.JustifyContent>,
  },
  justifyItems: {
    default: "initial",
    type: String as PropType<Property.JustifyItems>,
  },
  gridTemplateColumns: {
    default: "initial",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  loading: {
    type: Boolean,
  },
});

const emits = defineEmits(["click"]);

// Composables

const colors = useColors();

// Computed

const iconColor = computed(() => {
  if (props.disabled) return "neutro-4";
  return props.outlined ? props.color : props.contentColor;
});

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});

const contentColorInner = computed(() => {
  return colors.getRealColor(props.contentColor);
});

const hoverColorInner = computed(() => {
  const name = `${props.color}-hover`;
  if (!props.hoverColor && colors.isCustom(name)) {
    return colors.getRealColor(name);
  }
  return colors.getRealColor(props.hoverColor);
});

const activeColorInner = computed(() => {
  const name = `${props.color}-pressed`;
  if (!props.activeColor && colors.isCustom(name)) {
    return colors.getRealColor(name);
  }
  return colors.getRealColor(props.activeColor);
});

const customButtonClass = computed(() => ({
  "custom-button__container": true,
  "custom-button__container--loading": props.loading,
  "custom-button__container--outlined": props.outlined,
}));

const gridTemplateColumnsButton = computed(() => {
  if (props.gridTemplateColumns) return props.gridTemplateColumns;
  const columns = ["1fr"];
  if (props.preppendIcon) columns.unshift("1rem");
  if (props.appendIcon) columns.push("1rem");
  return columns.join(" ");
});

// Methods

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;
  emits("click", ev);
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins";

.custom-button__container {
  @include text-subtitle-2;
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
  grid-auto-flow: column;
  border: 2px solid transparent;
  color: v-bind(contentColorInner);
  justify-items: v-bind(justifyItems);
  background-color: v-bind(colorInner);
  justify-content: v-bind(justifyContent);
  grid-template-columns: v-bind(gridTemplateColumnsButton);

  .custom-button__text {
    height: 1rem;
  }

  &--loading {
    pointer-events: none;
  }

  &:not(&--outlined) {
    &:not(:hover):focus {
      outline: none;
      border-color: v-bind(activeColorInner);
      background-color: v-bind(hoverColorInner);
    }

    &:disabled {
      pointer-events: none;
      color: rgb(var(--neutro-4));
      background-color: rgb(var(--neutro-3));
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
