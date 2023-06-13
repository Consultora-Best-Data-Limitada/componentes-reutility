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
      class="custom-tooltip__tooltip"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, computed, nextTick, useSlots } from "vue";

// Composables
import { useTooltips } from "@/composables/tooltip";

// Definiciones

const props = defineProps({
  disabled: {
    type: Boolean,
  },
});

// Composables

const slots = useSlots();
const { overlayContainer } = useTooltips();

// Data

const top = ref("initial");
const left = ref("initial");
const right = ref("initial");
const tooltipRef = ref<HTMLDivElement | null>(null);

// Computed

const tooltipContainerClass = computed(() => ({
  "custom-tooltip__container": true,
  "custom-tooltip__container--disabled": props.disabled,
}));

// Methods

const checkSlot = () => !!slots["default"];

const onMouseEnter = async (ev: MouseEvent) => {
  if (!tooltipRef.value || !overlayContainer.value) return;
  overlayContainer.value.innerHTML = tooltipRef.value.innerHTML;
  overlayContainer.value.classList.add("custom-tooltip--overlay--opened");
  await nextTick();
  const rect = overlayContainer.value.getBoundingClientRect();
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
  overlayContainer.value.style.top = top.value;
  overlayContainer.value.style.left = left.value;
  overlayContainer.value.style.right = right.value;
};

const onMouseLeave = () => {
  top.value = "";
  left.value = "";
  right.value = "";
  if (overlayContainer.value) {
    overlayContainer.value.classList.remove("custom-tooltip--overlay--opened");
    overlayContainer.value.style.top = top.value;
    overlayContainer.value.style.left = left.value;
    overlayContainer.value.style.right = right.value;
  }
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
    display: none;
  }
}
</style>
