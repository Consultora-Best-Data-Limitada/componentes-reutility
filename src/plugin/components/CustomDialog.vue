<template>
  <transition name="fade">
    <div
      v-if="model"
      ref="container"
      tabindex="-1"
      :class="containerClass"
      @keyup="clearClosing"
      @mouseover="mouseOver"
      @mouseup="clearClosing"
      @keydown.esc="keydownEsc"
      @mousedown="clickOutside"
    >
      <slot/>
    </div>
  </transition>
</template>

<script setup lang="ts">
// Vue
import {computed, ref} from "vue";

// Definiciones

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  persistent: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Data

const closing = ref(false);
const container = ref<HTMLDivElement | null>(null);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

const containerClass = computed(() => ({
  'custom-dialog__container': true,
  'custom-dialog__container--closing': closing.value,
}));

// Methods

const keydownEsc = () => {
  if (props.persistent) {
    closing.value = true;
  } else {
    model.value = false;
  }
}

const clearClosing = () => {
  closing.value = false;
};

const mouseOver = () => {
  if(!container.value) return;
  container.value.focus();
};

const clickOutside = (ev: MouseEvent) => {
  if (ev.currentTarget === ev.target) {
    if (props.persistent) {
      closing.value = true;
    } else {
      model.value = false;
    }
  }
};
</script>

<style scoped lang="scss">
.custom-dialog__container {
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2000;
  outline: none;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(var(--neutro-3), 0.5);

  &--closing :deep(> *) {
    animation: scale 100ms ease;
  }
}

.fade-enter-active {
  animation: fade 300ms ease;
}

.fade-leave-active {
  animation: fade 300ms reverse ease;
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
