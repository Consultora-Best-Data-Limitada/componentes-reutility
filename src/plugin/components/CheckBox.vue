<template>
  <div
    :class="containerClass"
    @click="toggle"
  >
    <transition
      name="bounce"
      mode="out-in"
    >
      <div
        v-if="model"
        class="check-box__icon"
      >
        <FontAwesomeIcon
          v-if="checkedIcon && checkedIcon.startsWith('fa')"
          :name="checkedIcon"
          :size="checkedIconSize"
          :color="checkedColorInner"
        />
        <FigmaIcon
          v-else-if="checkedIcon && checkedIcon.startsWith('fm')"
          :name="checkedIcon"
          :size="checkedIconSize"
          :color="checkedColorInner"
        />
        <SvgIcon
          v-else-if="checkedIcon"
          :src="checkedIcon"
          :size="checkedIconSize"
          :color="checkedColorInner"
        />
      </div>
    </transition>
    <FontAwesomeIcon
      v-if="boxIcon && boxIcon.startsWith('fa')"
      :name="boxIcon"
      :size="boxIconSize"
      :color="boxColorInner"
    />
    <FigmaIcon
      v-else-if="boxIcon && boxIcon.startsWith('fm')"
      :name="boxIcon"
      :size="boxIconSize"
      :color="boxColorInner"
    />
    <SvgIcon
      v-else-if="boxIcon"
      :src="boxIcon"
      :size="boxIconSize"
      :color="boxColorInner"
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
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

// Definiciones
const props = defineProps({
  boxIcon: {
    type: String,
    default: "fm-square-outlined",
  },
  boxColor: {
    default: "acento-principal",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  checkedColor: {
    default: "acento-principal",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  readonly: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  boxIconSize: {
    default: "1rem",
    type: String as PropType<CSS.FontSizeProperty<string>>,
  },
  checkedIcon: {
    default: "fm-square-check",
    type: String,
  },
  checkedIconSize: {
    default: "1rem",
    type: String as PropType<CSS.FontSizeProperty<string>>,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

const containerClass = computed(() => ({
  "check-box__container": true,
  "check-box__container--disabled": props.disabled,
}));

const boxColorInner = computed(() => (props.disabled ? "neutro-4" : props.boxColor));

const checkedColorInner = computed(() => (props.disabled ? "neutro-4" : props.checkedColor));

// Methods

const toggle = () => {
  if (props.readonly || props.disabled) return;
  model.value = !model.value;
};
</script>

<style lang="scss">
.bounce-enter-active {
  animation: bounce-in 0.4s;
}

.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.check-box__icon {
  position: absolute;
}

.check-box__container {
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;

  &--disabled {
    pointer-events: none;
  }
}
</style>
