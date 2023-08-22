<template>
  <div class="image-editor__wrapper grid gap-y-8">
    <div
      class="relative cursor-move image-editor__canvas"
      @mousedown="startMoving"
    >
      <canvas
        ref="canvas"
        :width="width"
        :height="height"
      />
      <div class="absolute w-full top-0 left-0 h-full image-editor__area" />
      <div
        v-if="showingTooltip"
        class="absolute grid grid-cols-[auto_1fr] gap-x-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] image-cropper__tooltip rounded-2xl p-2"
      >
        <FigmaIcon
          size="1.25rem"
          name="fm-move"
          color="neutro-1"
        />
        <p class="text-white text-base leading-5">{{ tooltip }}</p>
      </div>
    </div>
    <div class="grid grid-cols-[auto_50%_auto] justify-center gap-x-3 items-center">
      <IconButton
        size="1.5rem"
        :color="buttonColor"
        icon="fm-minus-circle"
        :disabled="range === 0"
        @click="changeZoom(-1)"
      />
      <InputRange
        v-model="range"
        :thumb-color="thumbColor"
        :track-color="trackColor"
        :progress-color="progressColor"
        @update:model-value="applyZoom"
      />
      <IconButton
        size="1.5rem"
        :color="buttonColor"
        icon="fm-plus-circle"
        :disabled="range === 100"
        @click="changeZoom(1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, watch, nextTick, computed, onMounted } from "vue";

// Types
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import InputRange from "@/components/InputRange.vue";
import IconButton from "@/components/IconButton.vue";
import FigmaIcon from "@/components/FigmaIcon.vue";

// Definiciones

const props = defineProps({
  file: {
    required: true,
    type: Object as PropType<File>,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  buttonColor: {
    default: "neutro-1",
    type: String as PropType<CustomColor | Property.Color>,
  },
  thumbColor: {
    default: "neutro-1",
    type: String as PropType<CustomColor | Property.Color>,
  },
  trackColor: {
    default: "neutro-1",
    type: String as PropType<CustomColor | Property.Color>,
  },
  progressColor: {
    default: "acento-principal",
    type: String as PropType<CustomColor | Property.Color>,
  },
  tooltip: {
    type: String,
    default: "Arrastre para recortar",
  },
});

// Data

const zoom = ref(1);
const lastX = ref(0);
const lastY = ref(0);
const range = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);
const showingTooltip = ref(true);
const image = ref<HTMLImageElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

// Mounted

onMounted(async () => {
  if (!canvas.value) return;
  ctx.value = canvas.value.getContext("2d");
  image.value = await createImage();
  draw();
});

// Computed

const widthPX = computed(() => {
  return `${props.width}px`;
});

const centerX = computed(() => {
  return props.width / 2;
});

const centerY = computed(() => {
  return props.height / 2;
});

const radius = computed(() => {
  return `${centerY.value}px`;
});

const realWidth = computed(() => {
  return (image.value?.width ?? 0) * zoom.value;
});

const realHeight = computed(() => {
  return (image.value?.height ?? 0) * zoom.value;
});

const distanceX = computed(() => {
  return realWidth.value / 2 - centerY.value;
});

const distanceY = computed(() => {
  return realHeight.value / 2 - centerY.value;
});

// Methods

function draw() {
  if (!ctx.value || !image.value) return;
  ctx.value.clearRect(0, 0, props.width, props.height);
  ctx.value.save();
  ctx.value.translate(centerX.value + offsetX.value, centerY.value + offsetY.value);
  ctx.value.scale(zoom.value, zoom.value);
  const imageCenterX = image.value.width / 2;
  const imageCenterY = image.value.height / 2;
  ctx.value.drawImage(
    image.value,
    -imageCenterX,
    -imageCenterY,
    image.value.width,
    image.value.height,
  );
  ctx.value.restore();
}

function createImage() {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      img.width = Math.max(props.height, props.height * aspectRatio);
      img.height = Math.max(props.height, props.height / aspectRatio);
      resolve(img);
    };
    img.src = URL.createObjectURL(props.file);
  });
}

async function adjustOffsets() {
  await nextTick();
  offsetY.value = Math.max(-distanceY.value, Math.min(distanceY.value, offsetY.value));
  offsetX.value = Math.max(-distanceX.value, Math.min(distanceX.value, offsetX.value));
}

async function applyZoom() {
  zoom.value = 1 + (range.value / 100) * 2;
  await adjustOffsets();
  draw();
}

function startMoving({ clientX, clientY }: MouseEvent) {
  if (showingTooltip.value) showingTooltip.value = false;
  lastX.value = clientX;
  lastY.value = clientY;
  document.body.style.userSelect = "none";
  document.addEventListener("mouseup", endMoving);
  document.addEventListener("mousemove", movePicture);
}

function movePicture({ clientX, clientY }: MouseEvent) {
  const deltaX = offsetY.value + clientY - lastY.value;
  const deltaY = offsetX.value + clientX - lastX.value;
  offsetY.value = Math.max(-distanceY.value, Math.min(distanceY.value, deltaX));
  offsetX.value = Math.max(-distanceX.value, Math.min(distanceX.value, deltaY));
  draw();
  lastX.value = clientX;
  lastY.value = clientY;
}

function endMoving() {
  document.body.style.userSelect = "initial";
  document.removeEventListener("mouseup", endMoving);
  document.removeEventListener("mousemove", movePicture);
}

async function canvasToBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob((blob) => resolve(blob));
  });
}

async function crop() {
  if (!canvas.value) return;
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  if (!tempCtx) return;
  const size = props.height;
  tempCanvas.width = size;
  tempCanvas.height = size;
  const cropX = props.width / 2 - centerY.value;
  const cropY = props.height / 2 - centerY.value;
  tempCtx.drawImage(canvas.value, cropX, cropY, size, size, 0, 0, size, size);
  return await canvasToBlob(tempCanvas);
}

async function changeZoom(value: number) {
  range.value = Math.max(0, Math.min(100, value * 10 + range.value));
  await applyZoom();
}

// Exposes

defineExpose({ crop });

// Watchs

watch(
  () => props.file,
  async () => {
    image.value = await createImage();
    await adjustOffsets();
    draw();
  },
);
</script>

<style scoped>
.image-editor__wrapper,
.image-editor__canvas {
  width: v-bind(widthPX);
}

.image-editor__area {
  background: radial-gradient(
    circle at center,
    transparent v-bind(radius),
    rgba(40, 69, 95, 0.3) calc(v-bind(radius) + 1px)
  );
}

.image-cropper__tooltip {
  font-family: "Metropolis", sans-serif;
  background: rgba(40, 69, 95, 0.7);
}
</style>
