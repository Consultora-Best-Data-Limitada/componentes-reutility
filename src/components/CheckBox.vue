<template>
  <div class="grid place-items-center relative [&:has(input:focus-visible)]:outline">
    <transition
      name="bounce"
      mode="out-in"
    >
      <template v-if="model">
        <FigmaIcon
          v-if="checkedIcon && checkedIcon.startsWith('fm')"
          class="absolute"
          :name="checkedIcon"
          :size="checkedIconSize"
          :color="checkedColorInner"
        />
        <SvgIcon
          v-else-if="checkedIcon"
          class="absolute"
          :src="checkedIcon"
          :size="checkedIconSize"
          :color="checkedColorInner"
        />
      </template>
    </transition>
    <FigmaIcon
      v-if="boxIcon && boxIcon.startsWith('fm')"
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
    <input
      v-model="model"
      type="checkbox"
      :readonly="readonly"
      :disabled="disabled"
      class="absolute w-full h-full opacity-0 outline-1 cursor-pointer disabled:cursor-default"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";

// Definiciones
const props = defineProps({
  boxIcon: {
    type: String,
    default: "fm-square-outlined",
  },
  boxColor: {
    default: "acento-principal",
    type: String as PropType<Property.Color | CustomColor>,
  },
  checkedColor: {
    default: "acento-principal",
    type: String as PropType<Property.Color | CustomColor>,
  },
  readonly: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  boxIconSize: {
    default: "1rem",
    type: String as PropType<Property.FontSize>,
  },
  checkedIcon: {
    default: "fm-square-check",
    type: String,
  },
  checkedIconSize: {
    default: "1rem",
    type: String as PropType<Property.FontSize>,
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

const boxColorInner = computed(() => (props.disabled ? "neutro-4" : props.boxColor));

const checkedColorInner = computed(() => (props.disabled ? "neutro-4" : props.checkedColor));
</script>

<style>
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
</style>
