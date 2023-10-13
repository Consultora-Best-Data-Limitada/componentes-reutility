<template>
  <div
    ref="wrapperRef"
    @mouseenter="showPopover"
    @mouseleave="hidePopover"
  >
    <slot name="activator" />
    <div
      v-if="checkSlot()"
      v-show="supportsPopover"
      ref="popoverRef"
      popover
      class="fixed z-[2000] bg-transparent"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, nextTick, useSlots } from "vue";

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
const { supportsPopover, tooltipWrapper } = useTooltips();

// Data

let cloneRef: HTMLDivElement | null = null;
const wrapperRef = ref<HTMLDivElement | null>(null);
const popoverRef = ref<HTMLDivElement | null>(null);

// Methods

const checkSlot = () => !!slots["default"];

async function calculatePosition(wrapper: HTMLDivElement, popover: HTMLDivElement) {
  await nextTick();
  const wrapperBounds = wrapper.getBoundingClientRect()
  const popoverBounds = popover.getBoundingClientRect();
  let left = wrapperBounds.left;
  let top = wrapperBounds.top + wrapperBounds.height;
  if (top + popoverBounds.height > window.innerHeight) {
    top -= popoverBounds.height + wrapperBounds.height;
  }
  if (left + popoverBounds.width > window.innerWidth) {
    left -= popoverBounds.width - wrapperBounds.width;
  }
  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function showPopover() {
  if (!wrapperRef.value || !popoverRef.value || props.disabled) return;
  if (supportsPopover) {
    popoverRef.value.showPopover();
  } else if (tooltipWrapper.value) {
    cloneRef = popoverRef.value.cloneNode(true) as HTMLDivElement;
    cloneRef.style.display = "block";
    tooltipWrapper.value.appendChild(cloneRef);
  }
  calculatePosition(wrapperRef.value, cloneRef ?? popoverRef.value);
}

function hidePopover() {
  if (!popoverRef.value || props.disabled) return;
  if (supportsPopover) {
    popoverRef.value.hidePopover();
  } else if (tooltipWrapper.value && cloneRef) {
    tooltipWrapper.value.removeChild(cloneRef);
    cloneRef = null;
  }
}
</script>
