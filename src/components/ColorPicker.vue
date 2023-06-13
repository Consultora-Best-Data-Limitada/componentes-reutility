<template>
  <div :class="colorPickerClass">
    <div
      ref="canvasRef"
      class="color-picker__canvas"
      @mousedown.stop.prevent="mouseDownCanvas"
    >
      <div class="color-picker__canvas-thumb"></div>
    </div>
    <div
      ref="hueRef"
      class="color-picker__hue"
      @mousedown.stop.prevent="mouseDownHue"
    >
      <div class="color-picker__hue-thumb"></div>
    </div>
    <div class="color-picker__hex-input-container">
      <span class="color-picker__hex-hash"> # </span>
      <input
        v-model="hex"
        type="text"
        maxlength="7"
        class="color-picker__hex-input"
        @keydown="keyDownInput"
      />
    </div>
    <div class="color-picker__colors">
      <div
        v-for="(pickableColor, index) in pickableColors"
        :key="`pickable-color-${index}`"
        :style="`--color: ${pickableColor}`"
        :class="getPickableColorClass(pickableColor)"
        @click="selectPickableColor(pickableColor)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted, reactive, ref } from "vue";

// Models
import Color from "@/models/color";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definiciones

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  background: {
    default: "neutro-1",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  dark: {
    type: Boolean,
  },
  pickableColors: {
    type: Array as PropType<string[]>,
    default: () => [
      "#EF4444",
      "#F97316",
      "#FACC15",
      "#4ADE80",
      "#2DD4BF",
      "#3B82F6",
      "#6366F1",
      "#EC4899",
      "#F43F5E",
      "#D946EF",
      "#0EA5E9",
      "#10B981",
      "#28A22F",
      "#84CC16",
    ],
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const { getRealColor } = useColors();

// Data

const hueActive = ref(false);
const canvasActive = ref(false);
const hueThumbTransform = ref("translateX(0)");
const hueRef = ref<HTMLDivElement | null>(null);
const canvasThumbTransform = ref("translate(0, 0");
const canvasRef = ref<HTMLDivElement | null>(null);
const color = reactive(Color.fromHex(props.modelValue));
const hueBounds = reactive({
  left: 0,
  width: 0,
});
const canvasBounds = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

// Mounted

onMounted(() => {
  moveThumbs();
});

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});

const colorPickerClass = computed(() => ({
  "color-picker__container": true,
  "color-picker__container--dark": props.dark,
}));

const realBackground = computed(() => getRealColor(props.background));

const background = computed(() => `rgb(${color.rgb.join(",")})`);

const backgroundHsl = computed(() => `hsl(${color.hue}, 100%, 50%)`);

const hex = computed({
  get() {
    return color.hex.slice(1);
  },
  set(value: string) {
    color.setFromHex(value);
    moveThumbs();
  },
});

// Methods

function moveThumbs() {
  if (!canvasRef.value || !hueRef.value) return;
  const hueRect = hueRef.value.getBoundingClientRect();
  const hueLeft = (color.hue / 360) * hueRect.width;
  hueThumbTransform.value = `translateX(${hueLeft}px)`;
  const canvasRect = canvasRef.value.getBoundingClientRect();
  const canvasLeft = color.saturation * canvasRect.width;
  const canvasTop = (1 - color.value) * canvasRect.height;
  canvasThumbTransform.value = `translate(${canvasLeft}px, ${canvasTop}px)`;
  model.value = color.hex;
}

function moveHueSliderThumb(ev: MouseEvent) {
  const left = Math.min(hueBounds.width, Math.max(0, ev.clientX - hueBounds.left));
  color.hue = (left / hueBounds.width) * 360;
  hueThumbTransform.value = `translateX(${left}px)`;
  model.value = color.hex;
}

function moveCanvasSliderThumb(ev: MouseEvent) {
  if (!canvasRef.value) return;
  const rect = canvasRef.value.getBoundingClientRect();
  const left = Math.min(rect.width, Math.max(0, ev.clientX - rect.left));
  const top = Math.min(rect.height, Math.max(0, ev.clientY - rect.top));
  color.saturation = left / rect.width;
  color.value = 1 - top / rect.height;
  canvasThumbTransform.value = `translate(${left}px, ${top}px)`;
  model.value = color.hex;
}

function mouseDownCanvas(ev: MouseEvent) {
  if (!canvasRef.value) return;
  const rect = canvasRef.value.getBoundingClientRect();
  canvasBounds.top = rect.top;
  canvasBounds.left = rect.left;
  canvasBounds.width = rect.width;
  canvasBounds.height = rect.height;
  canvasActive.value = true;
  moveCanvasSliderThumb(ev);
  registerListeners();
}

function mouseDownHue(ev: MouseEvent) {
  if (!hueRef.value) return;
  const rect = hueRef.value.getBoundingClientRect();
  hueBounds.left = rect.left;
  hueBounds.width = rect.width;
  hueActive.value = true;
  moveHueSliderThumb(ev);
  registerListeners();
}

function mouseMoveHandler(ev: MouseEvent) {
  if (hueActive.value) {
    moveHueSliderThumb(ev);
  } else if (canvasActive.value) {
    moveCanvasSliderThumb(ev);
  }
}

function mouseUpHandler() {
  hueActive.value = false;
  unregisterListeners();
}

function registerListeners() {
  document.addEventListener("mouseup", mouseUpHandler);
  document.addEventListener("mousemove", mouseMoveHandler);
}

function unregisterListeners() {
  document.removeEventListener("mouseup", mouseUpHandler);
  document.removeEventListener("mousemove", mouseMoveHandler);
}

function keyDownInput(ev: KeyboardEvent) {
  const validKeys = ["v", "c"];
  if (!(ev.ctrlKey && validKeys.includes(ev.key))) {
    ev.preventDefault();
  }
}

function getPickableColorClass(pickableColor: string) {
  return {
    "color-picker__color": true,
    "color-picker__color--selected": model.value === pickableColor,
  };
}

function selectPickableColor(pickableColor: string) {
  hex.value = pickableColor;
  model.value = pickableColor;
}
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.color-picker__container {
  width: 100%;
  padding: 1rem;
  row-gap: 1rem;
  display: grid;
  background: v-bind(realBackground);
}

.color-picker__canvas {
  width: 100%;
  height: 10rem;
  cursor: pointer;
  position: relative;
  border-radius: 0.5rem;
  background-color: v-bind(backgroundHsl);
  background-image: linear-gradient(transparent, #000), linear-gradient(to right, #fff, transparent);
}

.color-picker__hue {
  width: 100%;
  height: 0.5rem;
  cursor: pointer;
  position: relative;
  border-radius: 0.5rem;
  background: linear-gradient(
    90deg,
    hsl(0, 100%, 50%),
    hsl(30, 100%, 50%),
    hsl(60, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(150, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(210, 100%, 50%),
    hsl(240, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(300, 100%, 50%),
    hsl(330, 100%, 50%),
    hsl(360, 100%, 50%)
  );
}

.color-picker__hue-thumb,
.color-picker__canvas-thumb {
  width: 0.75rem;
  top: -0.125rem;
  height: 0.75rem;
  left: -0.375rem;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  border: 1px solid #fff;
}

.color-picker__canvas-thumb {
  top: -0.375rem;
  background: v-bind(background);
  transform: v-bind(canvasThumbTransform);
}

.color-picker__hue-thumb {
  background: v-bind(backgroundHsl);
  transform: v-bind(hueThumbTransform);
}

.color-picker__hex-input-container {
  display: grid;
  padding: 0 0.5rem;
  column-gap: 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  grid-template-columns: auto 1fr;
  border: 1px solid rgb(var(--secundario));
}

.color-picker__hex-hash,
.color-picker__hex-input {
  @include text-body-1;
  color: rgb(var(--secundario));
}

.color-picker__container--dark {
  .color-picker__hex-input-container {
    border: 1px solid rgb(var(--neutro-1));
  }

  .color-picker__hex-hash,
  .color-picker__hex-input {
    color: rgb(var(--neutro-1));
  }
}

.color-picker__hex-input {
  border: none;
  outline: none;
  padding: 0.5rem 0;
  background: transparent;
}

.color-picker__colors {
  gap: 0.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 1.5rem);
}

.color-picker__color {
  --color: #000000;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: var(--color);

  &--selected {
    border: 2px solid rgb(var(--secundario));
  }
}

.color-picker__container--dark .color-picker__color {
  border-color: rgb(var(--neutro-1));
}
</style>
