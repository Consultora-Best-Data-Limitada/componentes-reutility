<template>
  <div :class="wrapperClass">
    <input
      ref="inputRef"
      hidden
      type="file"
      accept=".jpg,.png,.webp,.svg,.gif,.jpeg"
      @change="onInputChange"
    />
    <div
      class="input-image__icon"
      @click="clickInput"
    >
      <FigmaIcon
        name="fm-image"
        :size="iconSize"
        color="neutro-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, ref } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import FigmaIcon from "@/components/FigmaIcon.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    default: null,
    type: Object as PropType<File | null>,
  },
  iconSize: {
    default: "1rem",
    type: String as PropType<Property.FontSize>,
  },
  src: {
    default: null,
    type: String as PropType<string | null>,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<Property.BorderRadius>,
  },
  width: {
    default: "1rem",
    type: String as PropType<Property.Width>,
  },
  height: {
    default: "1rem",
    type: String as PropType<Property.Height>,
  },
  objectFit: {
    default: "cover",
    type: String as PropType<Property.ObjectFit>,
  },
  objectPosition: {
    default: "initial",
    type: String as PropType<Property.ObjectPosition>,
  },
});

const emits = defineEmits(["error:extension", "update:model-value"]);

// Data

const inputRef = ref<HTMLInputElement | null>(null);
const accept = ["jpg", "png", "webp", "svg", "gif", "jpeg"];

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: File | null) {
    emits("update:model-value", value);
  },
});

const url = computed(() => {
  if (!model.value) {
    if (!props.src) return "";
    return `url("${props.src}")`;
  }
  return `url("${URL.createObjectURL(model.value)}")`;
});

const wrapperClass = computed(() => ({
  "input-image__wrapper": true,
  "input-image__wrapper--hidden": Boolean(model.value || props.src),
}));

// Methods

function clickInput() {
  if (!inputRef.value) return;
  inputRef.value.click();
}

function onInputChange() {
  if (!inputRef.value) return;
  const file = inputRef.value.files?.[0];
  if (!file) return;
  const extension = file.name.split(".").pop();
  if (!extension || !accept.includes(extension)) {
    emits("error:extension");
  } else {
    model.value = file;
  }
  inputRef.value.value = "";
}
</script>

<style scoped lang="scss">
.input-image__wrapper {
  overflow: hidden;
  width: v-bind(width);
  height: v-bind(height);
  background-image: v-bind(url);
  background-size: v-bind(objectFit);
  border-radius: v-bind(borderRadius);
  background-position: v-bind(objectPosition);
  cursor: pointer;

  &--hidden .input-image__icon {
    opacity: 0;
  }

  &--hidden:hover .input-image__icon {
    opacity: 0.5;
  }
}

.input-image__icon {
  width: v-bind(width);
  height: v-bind(height);
  display: grid;
  place-content: center;
  transition: opacity 200ms ease-in-out;
  background-color: rgb(var(--background));
}
</style>
