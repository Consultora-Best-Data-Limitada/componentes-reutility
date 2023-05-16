<template>
  <div :class="tooltipContainerClass">
    <div
      @mouseenter.stop="onMouseEnter"
      @mouseleave.stop="onMouseLeave"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="checkSlot()"
      ref="tooltipRef"
      :class="tooltipClass"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, computed, nextTick, useSlots } from "vue";

// Definiciones

const props = defineProps({
  disabled: {
    type: Boolean,
  },
});

// Composables

const slots = useSlots();

// Data

const open = ref(false);
const top = ref("initial");
const left = ref("initial");
const right = ref("initial");
const tooltipRef = ref<HTMLDivElement | null>(null);

// Computed

const tooltipClass = computed(() => ({
  "custom-tooltip__tooltip": true,
  "custom-tooltip__tooltip--opened": open.value,
}));

const tooltipContainerClass = computed(() => ({
  "custom-tooltip__container": true,
  "custom-tooltip__container--disabled": props.disabled,
}));

// Methods

const checkSlot = () => !!slots["default"];

const onMouseEnter = async (ev: MouseEvent) => {
  if (!tooltipRef.value) return;
  open.value = true;
  await nextTick();
  const rect = tooltipRef.value.getBoundingClientRect();
  const targetRect = (ev.target as HTMLDivElement).getBoundingClientRect();
  const rightX = targetRect.x + rect.width;
  if (targetRect.x < 0) {
    left.value = "0";
    right.value = "initial";
  } else if (rightX >= window.innerWidth) {
    left.value = "initial";
    right.value = "0";
  } else if (targetRect.x !== rect.left) {
    left.value = `${targetRect.x}px`;
  } else {
    left.value = "initial";
    right.value = "initial";
  }
  top.value = `${targetRect.top + targetRect.height + 8}px`;
};

const onMouseLeave = () => {
  top.value = "";
  left.value = "";
  right.value = "";
  open.value = false;
};
</script>

<style scoped lang="scss">
.custom-tooltip__container {
  display: flex;
  cursor: pointer;
  justify-content: center;

  &--disabled {
    pointer-events: none;
  }

  .custom-tooltip__tooltip {
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
