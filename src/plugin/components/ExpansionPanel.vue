<template>
  <div
    :class="containerClass"
    @transitionend="transitionEndHandler"
  >
    <div
      ref="activatorRef"
      class="expansion-panel__activator"
      @click="toogleOpened"
    >
      <slot
        name="activator"
        :opened="dummyOpened"
      />
    </div>
    <div
      ref="contentRef"
      class="expansion-panel__content"
    >
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {onMounted, ref, computed, watch} from "vue";

// Composables
import {useColors} from "@/plugin/composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Definiciones

const props = defineProps({
  outlined: {
    type: Boolean,
  },
  backgroundColor: {
    default: "neutro-1",
    type: String as PropType<CustomColor | CSS.BackgroundColorProperty>,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<CSS.BorderRadiusProperty<string>>,
  },
  modelValue: {
    default: undefined,
    type: Boolean,
  },
  transitionDuration: {
    default: "250ms",
    type: String,
  },
  transitionTimingFunction: {
    default: "ease-in-out",
    type: String as PropType<CSS.TransitionTimingFunctionProperty>,
  },
});

const emits = defineEmits([
  "update:model-value",
]);

// Composables

const colors = useColors();

// Data

const contentHeight = ref(0);
const activatorHeight = ref(0);
const maxHeight = ref("initial");
const opened = ref(props.modelValue ?? false);
const dummyOpened = ref(props.modelValue ?? false);
const contentRef = ref<HTMLDivElement | null>(null);
const activatorRef = ref<HTMLDivElement | null>(null);

// Mounted

onMounted(() => {
  if (!activatorRef.value || !contentRef.value) return;
  activatorHeight.value = activatorRef.value.offsetHeight;
  contentHeight.value = contentRef.value.offsetHeight;
  let height = activatorHeight.value;
  if (props.modelValue === true) {
    height += contentHeight.value;
  }
  maxHeight.value = `${height}px`;
});

// Computed

const model = computed({
  get() {
    return props.modelValue ?? false;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

const containerClass = computed(() => ({
  'expansion-panel__container': true,
  'expansion-panel__container--outlined': props.outlined,
}));

const backgroundColorInner = computed(() => {
  return colors.getRealColor(props.backgroundColor);
});

// Methods

function transitionEndHandler() {
  opened.value = !opened.value;
}

function toogleOpened() {
  dummyOpened.value = !opened.value;
  model.value = dummyOpened.value;
  const openedHeight = opened.value ? 0 : contentHeight.value;
  const height = activatorHeight.value + openedHeight;
  maxHeight.value = `${height}px`;
}

// Watchs

watch(model, (value: boolean) => {
  if (dummyOpened.value !== value) {
    toogleOpened();
  }
});
</script>

<style scoped lang="scss">
.expansion-panel__container {
  overflow: hidden;
  max-height: v-bind(maxHeight);
  transition-property: max-height;
  border-radius: v-bind(borderRadius);
  background-color: v-bind(backgroundColorInner);
  transition-duration: v-bind(transitionDuration);
  transition-timing-function: v-bind(transitionTimingFunction);

  &--outlined {
    border: 1px solid rgb(var(--neutro-3));
  }
}

.expansion-panel__activator {
  cursor: pointer;
  user-select: none;
}
</style>
