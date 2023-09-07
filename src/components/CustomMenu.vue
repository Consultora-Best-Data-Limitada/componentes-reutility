<template>
  <div
    ref="container"
    class="custom-menu__container"
  >
    <div @mousedown.stop="toggleMenu">
      <slot name="activator" />
    </div>
    <transition>
      <div
        v-if="menu"
        ref="menuContainer"
        class="custom-menu__menu"
      >
        <slot :close="closeMenu" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// Vue
import { nextTick, onMounted, ref } from "vue";

// Definiciones

const props = defineProps({
  disabled: {
    type: Boolean,
  },
  default: {
    type: Boolean,
    default: undefined,
  },
  nudgeTop: {
    default: 0,
    type: Number,
  },
  nudgeBottom: {
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
});

const emits = defineEmits(["close"]);

// Mounted

onMounted(() => {
  if (props.default === true) {
    openMenu();
  }
});

// Data

const top = ref("");
const left = ref("");
const width = ref("");
const menu = ref(false);
const listenerExist = ref(false);
const container = ref<HTMLDivElement | null>(null);
const menuContainer = ref<HTMLDivElement | null>(null);

// Methods

const updatePosition = async () => {
  top.value = "";
  left.value = "";
  await nextTick();
  const containerEl = container.value;
  const menuContainerEl = menuContainer.value;
  if (!containerEl || !menuContainerEl) return;
  const rect = containerEl.getBoundingClientRect();
  const menuRect = menuContainerEl.getBoundingClientRect();
  const nudgeX = props.nudgeLeft - props.nudgeRight;
  const nudgeY = props.nudgeTop - props.nudgeBottom;
  const realLeft = rect.left + nudgeX;
  left.value = `${realLeft}px`;
  width.value = `${rect.width}px`;
  const menuEnd = rect.top + rect.height + menuRect.height;
  const windowHeight = window.innerHeight;
  const realTop = rect.top + rect.height + nudgeY;
  if (menuEnd > windowHeight) {
    const diferencia = menuEnd - windowHeight;
    top.value = `${realTop - diferencia - 16}px`;
  } else {
    top.value = `${realTop}px`;
  }
  const menuRight = menuRect.right;
  const windowWidth = window.innerWidth;
  if (menuRight > windowWidth) {
    const diferencia = menuRight - windowWidth;
    left.value = `${realLeft - diferencia}px`;
  }
};

const openMenu = () => {
  if (props.disabled && !props.default) return;
  menu.value = true;
  updatePosition();
  if (props.disabled) return;
  listenerExist.value = true;
  document.addEventListener("click", closeMenuHandler);
};

const closeMenu = () => {
  if (props.disabled) return;
  menu.value = false;
  listenerExist.value = false;
  document.removeEventListener("click", closeMenuHandler);
  emits("close");
};

const closeMenuHandler = (ev: MouseEvent) => {
  if (!container.value || !ev.target) return;
  if (!container.value.contains(ev.target as Node)) {
    closeMenu();
  }
};

const toggleMenu = () => {
  if (props.disabled) return;
  if (menu.value) {
    closeMenu();
  } else {
    openMenu();
  }
};
</script>

<style scoped lang="scss">
.custom-menu__container {
  display: grid;
  row-gap: 0.25rem;
}

.custom-menu__menu {
  z-index: 1008;
  position: fixed;
  top: v-bind(top);
  left: v-bind(left);
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
