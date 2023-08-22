<template>
  <div
    ref="barRef"
    role="slider"
    class="h-2 w-full bg-amber-950 rounded relative input-range__track"
    @mousedown="startMoving"
  >
    <div
      role="progressbar"
      class="absolute h-2 w-2 rounded input-range__progress"
    />
    <div
      role="button"
      class="h-5 w-5 rounded-full absolute pointer-events-none -top-1.5 -left-2.5 input-range__thump"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, watch, computed, onMounted } from "vue";

// Types
import type { PropType } from "vue";
import type { Property } from "csstype";

// Composables
import { useColors } from "@/composables/colors";

// Definiciones

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
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
});

const emits = defineEmits(["update:model-value"]);

// Composables

const { getRealColor } = useColors();

// Data

const positionX = ref("");
const barRef = ref<HTMLDivElement | null>(null);

// Mounted

onMounted(updateUI);

// Computed

const realThumbColor = computed(() => {
  return getRealColor(props.thumbColor);
});

const realTrackColor = computed(() => {
  return getRealColor(props.trackColor);
});

const realProgressColor = computed(() => {
  return getRealColor(props.progressColor);
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emits("update:model-value", value);
  },
});

// Methods

function startMoving(ev: MouseEvent) {
  calculatePercentage(ev);
  document.body.style.userSelect = "none";
  document.addEventListener("mouseup", endMoving);
  document.addEventListener("mousemove", calculatePercentage);
}

function calculatePercentage({ clientX }: MouseEvent) {
  if (!barRef.value) return;
  const { left, width } = barRef.value.getBoundingClientRect();
  const translate = Math.min(width, Math.max(0, clientX - left));
  model.value = (translate * 100) / width;
  updateUI();
}

function updateUI() {
  if (!barRef.value) return;
  const { width } = barRef.value.getBoundingClientRect();
  positionX.value = `${(model.value / 100) * width}px`;
}

function endMoving() {
  document.body.style.userSelect = "inital";
  document.removeEventListener("mouseup", endMoving);
  document.removeEventListener("mousemove", calculatePercentage);
}

// Watchs

watch(model, updateUI);
</script>

<style scoped>
.input-range__track {
  background-color: v-bind(realTrackColor);
}

.input-range__thump {
  background-color: v-bind(realThumbColor);
  transform: translateX(v-bind(positionX));
}

.input-range__progress {
  width: v-bind(positionX);
  background-color: v-bind(realProgressColor);
}
</style>
