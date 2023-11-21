<script setup lang="ts">
// Vue
import {ref, watch, nextTick, computed} from "vue";

// Props

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  persistent: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value", "closed"]);

// Data

const shaking = ref(false);
const dialogEl = ref<HTMLDialogElement | null>(null);

// Computed

const opened = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

// Methods

function closeDialog() {
  if (props.persistent) {
    shaking.value = true;
  } else {
    opened.value = false;
  }
}

function onClick(ev: MouseEvent) {
  if (ev.target === dialogEl.value) {
    closeDialog();
  }
}

function onKeydown(ev: KeyboardEvent) {
  if (ev.key !== "Escape") return;
  ev.preventDefault();
  closeDialog();
}

function onAnimationend(ev: AnimationEvent) {
  shaking.value = false;
  if (!opened.value && !ev.pseudoElement) {
    emits("closed");
  }
}

// Watchs

watch(opened, async (val) => {
  await nextTick();
  if (val) {
    if (!dialogEl.value) return;
    dialogEl.value.showModal();
  }
});
</script>

<template>
  <transition name="scale-in">
    <dialog
      v-if="opened"
      ref="dialogEl"
      :class="{
        'horizontal-shaking': shaking,
        'bg-transparent backdrop:bg-neutro-3/50 backdrop:backdrop-blur-sm m-auto outline-none': true,
      }"
      @click="onClick"
      @keydown="onKeydown"
      @animationend="onAnimationend"
    >
      <slot/>
    </dialog>
  </transition>
</template>

<style scoped>
.horizontal-shaking {
  animation: horizontal-shaking 300ms;
}

.scale-in-enter-active {
  animation: scale-in 400ms;
}

.scale-in-leave-active {
  animation: scale-in 400ms reverse;
}

.scale-in-enter-active::backdrop {
  animation: fade-in 400ms;
}

.scale-in-leave-active::backdrop {
  animation: fade-in 400ms reverse;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
