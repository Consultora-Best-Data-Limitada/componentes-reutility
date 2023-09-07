<script setup lang="ts">
// Vue
import { ref, watch, computed, nextTick, onMounted } from "vue";

// Types
import type { PropType } from "vue";

// Definitions

const props = defineProps({
  disabled: {
    type: Boolean,
  },
  modelValue: {
    default: null,
    type: Boolean,
  },
  nudgeTop: {
    default: 0,
    type: Number,
  },
  nudgeLeft: {
    default: 0,
    type: Number,
  },
  nudgeRight: {
    default: 0,
    type: Number,
  },
  nudgeBottom: {
    default: 0,
    type: Number,
  },
  animation: {
    default: "animate-fade-down",
    type: String,
  },
  position: {
    default: "bottom",
    type: String as PropType<"left" | "right" | "top" | "bottom">,
  },
});

const emits = defineEmits(["update:model-value"]);

// Data

const innerOpened = ref(false);
const menuDiv = ref<HTMLElement | null>(null);
const activatorButton = ref<HTMLElement | null>(null);

// Mounted

onMounted(() => {
  toggle(opened.value);
});

// Computed

const opened = computed({
  get() {
    if (props.modelValue === null) return innerOpened.value;
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
    innerOpened.value = value;
  },
});

// Methods

function toggle(value: boolean) {
  if (!menuDiv.value) return;
  menuDiv.value.classList.add(props.animation);
  if (value) {
    menuDiv.value.classList.remove("animate-reverse");
    menuDiv.value.classList.remove("hidden"); // Change for menuDiv.value.showPopover();
    menuDiv.value.focus();
    calculateBounds();
    document.addEventListener("click", onDocumentClick);
  } else {
    menuDiv.value.classList.add("animate-reverse");
    document.removeEventListener("click", onDocumentClick);
  }
}

async function calculateBounds() {
  await nextTick();
  if (!menuDiv.value || !activatorButton.value) return;
  const menuRect = menuDiv.value.getBoundingClientRect();
  const activatorRect = activatorButton.value.getBoundingClientRect();
  let marginTop = calculateTop(menuRect, activatorRect);
  let marginLeft = calculateLeft(menuRect, activatorRect);
  // Adjust the margins if the position is outside the viewport
  marginTop = Math.max(0, Math.min(marginTop, window.innerHeight - menuRect.height));
  marginLeft = Math.max(0, Math.min(marginLeft, window.innerWidth - menuRect.width));
  const verticalNudge = props.nudgeTop - props.nudgeBottom;
  const horizontalNudge = props.nudgeLeft - props.nudgeRight;
  menuDiv.value.style.top = `${marginTop + verticalNudge}px`;
  menuDiv.value.style.left = `${marginLeft + horizontalNudge}px`;
}

// Get the left for the menu depending on the position property
function calculateLeft(menuRect: DOMRect, activatorRect: DOMRect) {
  let left = activatorRect.left;
  if (props.position === "left") left -= menuRect.width;
  if (props.position === "right") left += activatorRect.width;
  return left;
}

// Get the top for the menu depending on the position property
function calculateTop(menuRect: DOMRect, activatorRect: DOMRect) {
  let top = activatorRect.top;
  if (props.position === "top") top -= menuRect.height;
  if (props.position === "bottom") top = activatorRect.bottom;
  return top;
}

// Listeners

function onToggle(event: { newState: "closed" | "open" }) {
  if (event.newState === "open") return;
  opened.value = false;
}

function onDocumentClick(ev: MouseEvent) {
  if (!menuDiv.value || !activatorButton.value || !opened.value) return;
  const target = ev.target as HTMLElement;
  // Check if the target is inside the activator div
  // If the menu is wanted to be opened from another element, that element needs the attribute data-menu-activator.
  const isActivator = target.getAttribute("data-menu-activator") !== null;
  if (isActivator || activatorButton.value === target || activatorButton.value.contains(target)) {
    return;
  }
  if (target !== menuDiv.value && !menuDiv.value.contains(target)) {
    opened.value = false;
  }
}

function onAnimationEnd() {
  if (!menuDiv.value) return;
  menuDiv.value.classList.remove(props.animation);
  if (opened.value) return;
  menuDiv.value.classList.remove("animate-reverse");
  menuDiv.value.classList.add("hidden"); // Change for menuDiv.value.hidePopover()
}

function onKeydown({ key }: KeyboardEvent) {
  if (key !== "Escape") return;
  opened.value = false;
}

function onActivatorClick() {
  if (props.disabled) return;
  opened.value = !opened.value;
}

// Watchs

watch(opened, () => {
  if (!menuDiv.value) return;
  toggle(opened.value);
});
</script>

<template>
  <div>
    <button
      ref="activatorButton"
      type="button"
      @click.stop="onActivatorClick"
    >
      <slot name="activator" />
    </button>
    <!-- Remove  fixed and hidden, and add popover="manual"-->
    <div
      ref="menuDiv"
      role="menu"
      tabindex="0"
      class="animate-duration-300 bg-transparent outline-none fixed hidden z-[100]"
      @toggle="onToggle"
      @keydown.stop="onKeydown"
      @animationend="onAnimationEnd"
    >
      <slot />
    </div>
  </div>
</template>
