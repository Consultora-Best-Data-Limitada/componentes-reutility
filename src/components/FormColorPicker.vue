<template>
  <div
    ref="container"
    class="form-color-picker__container"
  >
    <div class="form-color-picker__label">
      {{ label }}
    </div>
    <div
      class="form-color-picker__input"
      @click="openMenu"
    ></div>
    <transition>
      <div
        v-if="menu"
        ref="menuContainer"
        class="form-color-picker__menu"
      >
        <ColorPicker
          v-model="model"
          :dark="dark"
          :background="background"
          :pickable-colors="pickableColors"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, nextTick, ref } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import ColorPicker from "@/components/ColorPicker.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  large: {
    type: Boolean,
  },
  background: {
    default: "neutro-1",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  dark: {
    type: Boolean,
  },
  pickableColors: {
    default: undefined,
    type: Array as PropType<string[]>,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Data

const top = ref("");
const left = ref("");
const width = ref("");
const menu = ref(false);
const listenerExist = ref(false);
const container = ref<HTMLDivElement | null>(null);
const menuContainer = ref<HTMLDivElement | null>(null);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});

// Computed

const labelColor = computed(() => {
  if (props.disabled) return "rgb(var(--neutro-4))";
  if (props.dark) return "rgb(var(--neutro-1))";
  return "rgb(var(--secundario))";
});

const colorWidth = computed(() => {
  if (props.large) return "100%";
  return "2.75rem";
});

// Methods

async function updatePosition() {
  await nextTick();
  const containerEl = container.value;
  const menuContainerEl = menuContainer.value;
  if (!containerEl || !menuContainerEl) return;
  const rect = containerEl.getBoundingClientRect();
  const menuRect = menuContainerEl.getBoundingClientRect();
  left.value = `${rect.left}px`;
  width.value = `${rect.width}px`;
  const menuEnd = rect.top + rect.height + menuRect.height;
  const windowHeight = window.innerHeight;
  const realTop = rect.top + rect.height;
  if (menuEnd > windowHeight) {
    const diferencia = menuEnd - windowHeight;
    top.value = `${realTop - diferencia - 16}px`;
  } else {
    top.value = `${realTop}px`;
  }
}

function openMenu() {
  if (props.disabled || props.readonly || menu.value) return;
  menu.value = true;
  updatePosition();
  listenerExist.value = true;
  document.addEventListener("click", closeMenuHandler);
}

function closeMenuHandler(ev: MouseEvent) {
  if (!container.value || !ev.target) return;
  if (!container.value.contains(ev.target as Node)) {
    closeMenu();
  }
}

function closeMenu() {
  menu.value = false;
  listenerExist.value = false;
  document.removeEventListener("click", closeMenuHandler);
}
</script>

<style scoped lang="scss">
.form-color-picker__container {
  display: grid;
  row-gap: 0.25rem;
  column-gap: 0.75rem;
  align-items: center;
  grid-template-columns: v-bind(gridTemplateColumns);
}

.form-color-picker__label {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: v-bind(labelColor);
  font-family: "Metropolis", sans-serif;
}

.form-color-picker__input {
  outline: none;
  cursor: pointer;
  height: 2.75rem;
  border-radius: 0.5rem;
  width: v-bind(colorWidth);
  background: v-bind(model);
  border: 1px solid v-bind(labelColor);
}

.form-color-picker__menu {
  z-index: 1;
  width: 16.5rem;
  position: fixed;
  top: v-bind(top);
  overflow: hidden;
  left: v-bind(left);
  border-radius: 1rem;
  box-shadow: 3px 3px 17px rgba(151, 168, 194, 0.24);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
