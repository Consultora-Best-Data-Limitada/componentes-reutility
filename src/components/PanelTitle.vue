<template>
  <div :class="containerClass">
    <TextContainer
      :color="textColor"
      text-align="center"
      class="panel-title__text"
      :predefined-style="predefinedStyle"
    >
      <slot />
    </TextContainer>
    <div
      v-if="closable"
      class="panel-title__close"
      @click="onClickClose"
    >
      <FigmaIcon
        color="error"
        :size="iconSize"
        name="fm-circle-close"
      />
    </div>
  </div>
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
import FigmaIcon from "./FigmaIcon.vue";
import TextContainer from "./TextContainer.vue";

// Definiciones

const props = defineProps({
  closable: {
    type: Boolean,
  },
  iconSize: {
    type: String,
    default: "1.5rem",
  },
  predefinedStyle: {
    default: "subtitle-2",
    type: String as PropType<PredefinedStyle>,
  },
  textColor: {
    default: "acento-principal",
    type: String as PropType<CustomColor | Property.Color>,
  },
  backgroundColor: {
    default: "initial",
    type: String as PropType<CustomColor | Property.BackgroundColor>,
  },
});

const emits = defineEmits(["click:close"]);

// Composables

const colors = useColors();

// Computed

const containerClass = computed(() => ({
  "panel-title__container": true,
  "panel-title__container--close": props.closable,
}));

const backgroundColorInner = computed(() => {
  return colors.getRealColor(props.backgroundColor);
});

// Emits

const onClickClose = () => {
  emits("click:close");
};
</script>

<style scoped lang="scss">
.panel-title__container {
  background-color: v-bind(backgroundColorInner);

  &--close {
    display: grid;
    align-items: center;
    grid-template-columns: v-bind(iconSize) 1fr v-bind(iconSize);

    & .panel-title__text {
      grid-column: 2;
    }
  }
}

.panel-title__close {
  cursor: pointer;

  &:hover :deep(*) {
    color: rgb(var(--error-hover));
  }

  &:active :deep(*) {
    color: rgb(var(--error-pressed));
  }
}
</style>
