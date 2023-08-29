<template>
  <dialog
    ref="dialogRef"
    :class="dialogClass"
    @click="onClick"
    @keydown="onKeydown"
    @animationend="onAnimationEnd"
  >
    <slot />
  </dialog>
</template>

<script setup lang="ts">
// Vue
import { computed, nextTick, ref, watch } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  persistent: {
    type: Boolean,
  },
  margin: {
    default: "auto",
    type: String as PropType<Property.Margin>,
  },
});

const emits = defineEmits(["update:model-value", "closed"]);

const dialogRef = ref<HTMLDialogElement | null>(null);

const opening = ref(false);
const closing = ref(false);
const shaking = ref(false);

const dialogClass = computed(() => {
  return {
    custom__dialog: true,
    "custom__dialog--closing": closing.value,
    "custom__dialog--shaking": shaking.value,
    "custom__dialog--opening": opening.value,
  };
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

watch(model, (value: boolean) => {
  if (!dialogRef.value) return;
  if (value) {
    opening.value = true;
    dialogRef.value.showModal();
  } else {
    closing.value = true;
  }
});

function startClosingAnimation() {
  if (props.persistent) {
    shaking.value = true;
  } else {
    model.value = false;
  }
}

function onClick(ev: MouseEvent) {
  if (ev.target === ev.currentTarget) {
    startClosingAnimation();
  }
}

function onAnimationEnd() {
  if (shaking.value) {
    shaking.value = false;
  } else if (closing.value) {
    closing.value = false;
    if (!dialogRef.value) return;
    dialogRef.value.close();
    emits("closed");
  } else if (opening.value) {
    opening.value = false;
  }
}

function onKeydown(ev: KeyboardEvent) {
  if (ev.key !== "Escape") return;
  ev.preventDefault();
  startClosingAnimation();
}

// Watchs

watch(model, async (val) => {
  if (!val) return;
  await nextTick();
  dialogRef.value?.focus();
});
</script>

<style scoped lang="scss">
.custom__dialog {
  border: none;
  outline: none;
  overflow: initial;
  margin: v-bind(margin);
  background: transparent;
  --animation-in-settings: 500ms cubic-bezier(0.25, 0, 0.3, 1) normal;
  --animation-out-settings: 500ms cubic-bezier(0.5, -0.5, 0.1, 1.5) normal;

  &::backdrop {
    background: rgba(196, 211, 229, 0.5);
    backdrop-filter: blur(5px);
  }

  &--opening {
    animation: fadein var(--animation-in-settings);

    &::backdrop {
      animation: fadein var(--animation-in-settings);
    }
  }

  &--closing {
    animation: minimize var(--animation-out-settings);
  }

  &--shaking {
    animation: scale 100ms ease !important;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes minimize {
  to {
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}
</style>
