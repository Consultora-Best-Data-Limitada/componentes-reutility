<template>
  <div :class="containerClass">
    <div
      ref="canvas"
      class="color-picker__canvas"
      @mousedown="mousedownCanvas"
    >
      <div class="color-picker__canvas-cursor"></div>
    </div>
    <div
      ref="line"
      class="color-picker__line"
      @mousedown="mousedownLine"
    >
      <div class="color-picker__line-cursor"></div>
    </div>
    <div
      ref="opacityLine"
      class="color-picker__opacity-line"
      @mousedown="mousedownOpacity"
    >
      <div class="color-picker__opacity-line-cursor"></div>
    </div>
    <div class="color-picker__result">
      <div
        class="color-picker__picked-color"
      ></div>
      <div class="color-picker__hexa-input-container">
        #
        <input
          v-model="hexaValue"
          type="text"
          maxlength="7"
          placeholder="FFFFFF"
          class="color-picker__hexa-input"
          @input="setColorFromHexa"
        >
      </div>
      <div class="color-picker__opacity-input-container">
        <input
          v-model="opacityPercent"
          type="text"
          maxlength="3"
          placeholder="100"
          class="color-picker__opacity-input"
          @input="setOpacity"
        >
        %
      </div>
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
import {computed, onMounted, reactive, ref} from "vue";

// Composables
import {useColors} from "@/plugin/composables/colors";

// Tipos
import type CSS from "csstype";
import type {PropType} from "vue";

// Definiciones

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  background: {
    default: "neutro-1",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
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
    ]
  }
});

const emits = defineEmits([
  "update:model-value",
]);

// Composables

const {getRealColor} = useColors();

// Mounted

onMounted(() => {
  colorLazy.hexa = props.modelValue.toUpperCase();
  setColorFromHexa();
});

// Data

const lineLeft = ref(0);
const canvasTop = ref(0);
const lineWidth = ref(0);
const canvasLeft = ref(0);
const opacityLeft = ref(0);
const canvasWidth = ref(0);
const opacityWidth = ref(0);
const canvasHeight = ref(0);
const percentageBlack = ref(0);
const percentageWhite = ref(0);
const percentageOpacity = ref(0);
const draggingLineCursor = ref(false);
const draggingCanvasCursor = ref(false);
const draggingOpacityCursor = ref(false);
const line = ref<HTMLDivElement | null>(null);
const dragStartColor = ref<string | null>(null);
const canvas = ref<HTMLDivElement | null>(null);
const opacityLine = ref<HTMLDivElement | null>(null);
const lineCursor = ref("translate(0, 0)");
const canvasCursor = ref("translate(0, 0)");
const opacityCursor = ref("translate(0, 0)");
const colorLazy = reactive({
  r: 255,
  g: 219,
  b: 0,
  a: 1,
  hexa: '#FFFE00FF',
});
const colorData = reactive({
  r: 0,
  g: 0,
  b: 0,
  a: 1,
  hexa: '#000000FF',
});
const lineColorData = reactive({
  r: 0,
  g: 0,
  b: 0,
});

// Computed

const backgroundInner = computed(() => getRealColor(props.background));

const containerClass = computed(() => ({
  'color-picker__container': true,
  'color-picker__container--dark': props.dark,
}));

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});

const opacityPercent = computed({
  get() {
    const percent = Math.ceil(colorLazy.a * 100);
    if (isNaN(percent)) return "0";
    return percent.toString();
  },
  set(value: string) {
    const valueParsed = parseInt(value.replace(/\D/g, "") || "0");
    colorLazy.a = valueParsed > 100 ? 1 : valueParsed / 100;
  },
});

const hexaValue = computed({
  get() {
    return colorLazy.hexa.slice(1, 7);
  },
  set(value: string) {
    colorLazy.hexa = "";
    if (value.startsWith("#")) {
      colorLazy.hexa = value;
    } else {
      colorLazy.hexa = `#${value}`;
    }
  },
});

const color = computed(() => {
  return `rgba(${colorData.r}, ${colorData.g}, ${colorData.b}, ${colorData.a})`;
});

const canvasColor = computed(() => {
  return `rgba(${lineColorData.r}, ${lineColorData.g}, ${lineColorData.b}, 1)`;
});

const opacityLineBackground = computed(() => {
  const opaque = `rgba(${colorData.r}, ${colorData.g}, ${colorData.b}, 0)`;
  const solid = `rgba(${colorData.r}, ${colorData.g}, ${colorData.b}, 1)`;
  return `linear-gradient(to right, ${opaque}, ${solid})`;
});

// Methods

const getPickableColorClass = (pickableColor: string) => {
  return {
    'color-picker__color': true,
    'color-picker__color--selected': colorLazy.hexa.slice(0, 7) === pickableColor,
  };
};

const setSizePoses = () => {
  if (!line.value) return;
  const lineBoundingRect = line.value.getBoundingClientRect();
  lineLeft.value = lineBoundingRect.left;
  lineWidth.value = lineBoundingRect.width;
  if (!canvas.value) return;
  const canvBoundingRect = canvas.value.getBoundingClientRect();
  canvasTop.value = canvBoundingRect.top;
  canvasLeft.value = canvBoundingRect.left;
  canvasWidth.value = canvBoundingRect.width;
  canvasHeight.value = canvBoundingRect.height;
  if (!opacityLine.value) return;
  const opacityBoundingRect = opacityLine.value.getBoundingClientRect();
  opacityLeft.value = opacityBoundingRect.left;
  opacityWidth.value = opacityBoundingRect.width;
};

const componentToHex = (c: number) => {
  const hex = c.toString(16).toUpperCase();
  return hex.length == 1 ? '0' + hex : hex;
};

const setColorData = () => {
  let targetVal = 255 * (1 - percentageBlack.value);
  targetVal = Math.min(255, Math.max(0, Math.round(targetVal)));
  const remainingR = targetVal - lineColorData.r;
  const remainingG = targetVal - lineColorData.g;
  const remainingB = targetVal - lineColorData.b;
  const rDiff = percentageWhite.value * remainingR;
  const gDiff = percentageWhite.value * remainingG;
  const bDiff = percentageWhite.value * remainingB;
  const r = lineColorData.r + rDiff;
  const g = lineColorData.g + gDiff;
  const b = lineColorData.b + bDiff;
  colorData.r = Math.min(targetVal, Math.max(0, Math.round(r)));
  colorData.g = Math.min(targetVal, Math.max(0, Math.round(g)));
  colorData.b = Math.min(targetVal, Math.max(0, Math.round(b)));
  colorData.a = Math.min(1, Math.max(0, Number(percentageOpacity.value.toFixed(2))));
  colorLazy.r = colorData.r;
  colorLazy.g = colorData.g;
  colorLazy.b = colorData.b;
  colorLazy.a = colorData.a;
  colorData.hexa =
    "#" +
    componentToHex(colorData.r) +
    componentToHex(colorData.g) +
    componentToHex(colorData.b) +
    componentToHex(Math.round(colorData.a * 255));
  colorLazy.hexa = colorData.hexa;
  model.value = colorData.hexa;
};

const calculateLineColor = (linePos: number) => {
  const perc = linePos / lineWidth.value;
  const value = parseFloat((perc % (1 / 6)).toFixed(5));
  const colorPerc = parseFloat((value / (1 / 6)).toFixed(5));
  let percRed = 1;
  let percGreen = 1;
  let percBlue = 1;
  if (perc < 1 / 6) {
    percGreen = colorPerc;
    percBlue = 0;
  } else if (perc < 2 / 6) {
    percRed = 1 - colorPerc;
    percBlue = 0;
  } else if (perc < 3 / 6) {
    percRed = 0;
    percBlue = colorPerc;
  } else if (perc < 4 / 6) {
    percRed = 0;
    percGreen = 1 - colorPerc;
  } else if (perc < 5 / 6) {
    percRed = colorPerc;
    percGreen = 0;
  } else if (perc < 1) {
    percGreen = 0;
    percBlue = 1 - colorPerc;
  } else {
    percBlue = 0;
    percGreen = 0;
  }
  lineColorData.r = Math.min(255, Math.max(0, Math.round(percRed * 255)));
  lineColorData.g = Math.min(255, Math.max(0, Math.round(percGreen * 255)));
  lineColorData.b = Math.min(255, Math.max(0, Math.round(percBlue * 255)));
};

const mousedownCanvas = (e: MouseEvent) => {
  registerListeners();
  dragStartColor.value = color.value;
  draggingCanvasCursor.value = true;
  setSizePoses();
  canvasCursor.value = `translate(${e.offsetX}px, ${e.offsetY}px)`;
  percentageBlack.value = e.offsetY / canvasHeight.value;
  percentageWhite.value = 1 - e.offsetX / canvasWidth.value;
  setColorData();
  e.stopPropagation();
  e.preventDefault();
};

const mousedownLine = (e: MouseEvent) => {
  registerListeners();
  dragStartColor.value = color.value;
  draggingLineCursor.value = true;
  setSizePoses();
  lineCursor.value = `translate(${e.offsetX}px, 0px)`;
  calculateLineColor(e.offsetX);
  setColorData();
  e.stopPropagation();
  e.preventDefault();
};

const mousedownOpacity = (e: MouseEvent) => {
  registerListeners();
  dragStartColor.value = color.value;
  draggingOpacityCursor.value = true;
  setSizePoses();
  opacityCursor.value = `translate(${e.offsetX}px, 0px)`;
  percentageOpacity.value = e.offsetX / opacityWidth.value;
  setColorData();
  e.stopPropagation();
  e.preventDefault();
};

const mouseup = () => {
  if (draggingLineCursor.value || draggingCanvasCursor.value || draggingOpacityCursor.value) {
    if (dragStartColor.value !== color.value) {
      model.value = colorData.hexa;
    }
  }
  draggingLineCursor.value = false;
  draggingCanvasCursor.value = false;
  draggingOpacityCursor.value = false;
  unregisterListeners();
};

const mousemove = (e: MouseEvent) => {
  if (draggingLineCursor.value) {
    let pos = e.pageX - lineLeft.value;
    pos = Math.min(lineWidth.value, Math.max(0, pos));
    lineCursor.value = `translate(${pos}px, 0px)`;
    calculateLineColor(pos);
  } else if (draggingCanvasCursor.value) {
    let posX = e.pageX - canvasLeft.value;
    let posY = e.pageY - canvasTop.value;
    posX = Math.min(canvasWidth.value, Math.max(0, posX));
    posY = Math.min(canvasHeight.value, Math.max(0, posY));
    canvasCursor.value = `translate(${posX}px, ${posY}px)`;
    percentageBlack.value = posY / canvasHeight.value;
    percentageWhite.value = 1 - posX / canvasWidth.value;
  } else if (draggingOpacityCursor.value) {
    let pos = e.pageX - opacityLeft.value;
    pos = Math.min(opacityWidth.value, Math.max(0, pos));
    opacityCursor.value = `translate(${pos}px, 0px)`;
    percentageOpacity.value = pos / opacityWidth.value;
  }
  setColorData();
};

const validateHexChar = (c: string) => {
  if ((c.length < 0 || c.length > 1)) return '0';
  if (isNaN(parseInt(c, 16))) {
    const validChars = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (validChars.includes(c.toUpperCase())) {
      return c.toUpperCase();
    } else {
      return '0';
    }
  } else {
    return c;
  }
};

const cleanHexa = (hexa: string) => {
  if (!hexa || hexa.length < 3) return '#000000FF';
  let _cleaned = hexa.toUpperCase();
  if (_cleaned.startsWith('#')) _cleaned = _cleaned.slice(1);
  if (_cleaned.length < 3) return '#000000FF';
  let r, g, b, a;
  r = g = b = '00';
  a = 'FF';
  if (_cleaned.length === 3) {
    let rgb = _cleaned
    .split('')
    .map((r) => `0${r}`)
    .map((r) => validateHexChar(r));
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
  } else if (_cleaned.length >= 6) {
    const rgb = _cleaned.split('').map((r) => validateHexChar(r));
    r = rgb[0] + rgb[1];
    g = rgb[2] + rgb[3];
    b = rgb[4] + rgb[5];
    if (rgb.length === 8) {
      a = rgb[6] + rgb[7];
    }
  }
  return `#${r}${g}${b}${a}`;
};

const parseHexa = (hexa: string) => {
  const hexaArr = cleanHexa(hexa).slice(1).split('');
  const h = hexaArr[0] + hexaArr[1];
  const e = hexaArr[2] + hexaArr[3];
  const x = hexaArr[4] + hexaArr[5];
  const ha = hexaArr[6] + hexaArr[7];
  const r = parseInt(h, 16);
  const g = parseInt(e, 16);
  const b = parseInt(x, 16);
  const a = parseInt(ha, 16) / 255;
  return {
    hexa: '#' + h + e + x + ha,
    r,
    g,
    b,
    a,
  };
};

const validateHexa = () => {
  const parsedColor = parseHexa(colorLazy.hexa);
  colorData.hexa = parsedColor.hexa;
  colorData.a = parsedColor.a;
  colorData.r = parsedColor.r;
  colorData.g = parsedColor.g;
  colorData.b = parsedColor.b;
  colorLazy.r = colorData.r;
  colorLazy.g = colorData.g;
  colorLazy.b = colorData.b;
  colorLazy.a = colorData.a;
};

const normalizeColorData = () => {
  const normalized: {
    r: null | number;
    g: null | number;
    b: null | number;
    variable: null | string;
  } = {
    r: null,
    g: null,
    b: null,
    variable: null,
  };
  const {r, g, b} = colorData;
  if (b > g && b > r) {
    normalized.b = 1;
  } else if (g > r && g > b) {
    normalized.g = 1;
  } else if (r > g && r > b) {
    normalized.r = 1;
  }
  if (r < g && r < b) {
    normalized.r = 0;
  } else if (g < r && g < b) {
    normalized.g = 0;
  } else if (b < r && b < b) {
    normalized.b = 0;
  }
  const letters: ("r" | "g" | "b")[] = ["r", "g", "b"];
  letters.forEach((col: "r" | "g" | "b") => {
    if (normalized[col] === null) {
      normalized.variable = col;
      normalized[col] = colorData[col] / 255;
    }
  });
  return normalized;
};

const setUICursors = () => {
  setSizePoses();
  percentageOpacity.value = colorData.a;
  const opacityX = percentageOpacity.value * opacityWidth.value;
  opacityCursor.value = `translate(${opacityX}px, 0px)`;
  const normalized = normalizeColorData();
  let sector = 0;
  let variablePerc = 0;
  if (normalized.variable === 'r') {
    if (normalized.g === 1) {
      sector = 1;
      variablePerc = 1 - colorData.r / 255;
    } else if (normalized.b === 1) {
      sector = 4;
      variablePerc = colorData.r / 255;
    }
  } else if (normalized.variable === 'b') {
    if (normalized.r === 1) {
      sector = 5;
      variablePerc = 1 - colorData.b / 255;
    } else if (normalized.g === 1) {
      sector = 2;
      variablePerc = colorData.b / 255;
    }
  } else {
    if (normalized.r === 1) {
      sector = 0;
      variablePerc = colorData.g / 255;
    } else if (normalized.b === 1) {
      sector = 3;
      variablePerc = 1 - colorData.g / 255;
    }
  }
  const sectorLength = lineWidth.value / 6;
  const variableSectorLeft = variablePerc * sectorLength;
  const lineCursorLeft = sectorLength * sector + variableSectorLeft;
  lineCursor.value = `translate(${lineCursorLeft}px, 0px)`;
  lineColorData.r = Math.min(255, Math.max(0, Math.round((normalized.r ?? 0) * 255)));
  lineColorData.g = Math.min(255, Math.max(0, Math.round((normalized.g ?? 0) * 255)));
  lineColorData.b = Math.min(255, Math.max(0, Math.round((normalized.b ?? 0) * 255)));
  const letters: ("r" | "g" | "b")[] = ["r", "g", "b"];
  letters.forEach((col) => {
    if (lineColorData[col] === 0) {
      percentageWhite.value = colorData[col] / 255;
    } else if (lineColorData[col] === 255) {
      percentageBlack.value = 1 - colorData[col] / 255;
    }
  });
  const canvCursorX = canvasWidth.value * (1 - percentageWhite.value);
  const canvCursorY = canvasHeight.value * percentageBlack.value;
  canvasCursor.value = `translate(${canvCursorX}px, ${canvCursorY}px)`;
};

const setColorFromHexa = () => {
  validateHexa();
  setUICursors();
};

const selectPickableColor = (pickableColor: string) => {
  colorLazy.hexa = pickableColor;
  setColorFromHexa();
  model.value = pickableColor;
};

const setOpacity = () => {
  colorData.a = colorLazy.a;
  setUICursors();
  setColorData();
};

const registerListeners = () => {
  document.addEventListener('mouseup', mouseup);
  document.addEventListener('mousemove', mousemove);
};

const unregisterListeners = () => {
  document.removeEventListener('mouseup', mouseup);
  document.removeEventListener('mousemove', mousemove);
};
</script>

<style scoped lang="scss">
.color-picker__container {
  padding: 1rem;
  display: grid;
  row-gap: 1rem;
  align-content: flex-start;
  background-color: v-bind(backgroundInner);

  &--dark {
    .color-picker__hexa-input,
    .color-picker__opacity-input,
    .color-picker__hexa-input-container,
    .color-picker__opacity-input-container {
      color: rgb(var(--neutro-1));
    }

    .color-picker__color--selected {
      border: 2px solid rgb(var(--neutro-1));
    }
  }
}

.color-picker__canvas {
  width: 100%;
  height: 9.5rem;
  position: relative;
  border-radius: 0.25rem;
  background-color: v-bind(canvasColor);
  background-image: linear-gradient(0deg, #000, rgba(204, 154, 129, 0)), linear-gradient(90deg, #fff, rgba(204, 154, 129, 0));
}

.color-picker__canvas-cursor {
  width: 1rem;
  height: 1rem;
  top: -0.5rem;
  left: -0.5rem;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  background-color: #ffffff;
  transform: v-bind(canvasCursor);
  box-shadow: 3px 3px 17px rgba(151, 168, 194, 0.24);
}

.color-picker__line,
.color-picker__opacity-line {
  width: 100%;
  height: 0.5rem;
  position: relative;
  border-radius: 1rem;
}

.color-picker__line-cursor,
.color-picker__opacity-line-cursor {
  width: 0.5rem;
  top: -0.125rem;
  left: -0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: absolute;
  box-sizing: initial;
  pointer-events: none;
  background-color: v-bind(color);
  border: 2px solid rgb(var(--neutro-1));
}

.color-picker__line-cursor {
  transform: v-bind(lineCursor);
}

.color-picker__opacity-line-cursor {
  transform: v-bind(opacityCursor);
}

.color-picker__line {
  background-image: linear-gradient(90deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
}

.color-picker__opacity-line {
  background: v-bind(opacityLineBackground), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC') repeat;
}

.color-picker__result {
  display: grid;
  column-gap: 0.75rem;
  grid-template-columns: 2.25rem 1fr 0.75fr;
}

.color-picker__picked-color {
  width: 2.25rem;
  height: 2.25rem;
  position: relative;
  border-radius: 1rem;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC') repeat;

  &::before {
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1rem;
    background: v-bind(color);
  }
}

.color-picker__hexa-input-container,
.color-picker__opacity-input-container {
  display: grid;
  height: 2.25rem;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid rgb(var(--neutro-3));
  // Text style
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;
}

.color-picker__hexa-input-container {
  padding-left: 0.75rem;
  grid-template-columns: auto 1fr;
}

.color-picker__opacity-input-container {
  padding-right: 0.75rem;
  grid-template-columns: 1fr auto;
}

.color-picker__hexa-input,
.color-picker__opacity-input {
  width: 100%;
  outline: none;
  // Text style
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;

  &::placeholder {
    color: rgb(var(--neutro-4));
  }
}

.color-picker__hexa-input {
  padding: 0.5rem 0.75rem 0.5rem 0;
}

.color-picker__opacity-input {
  padding: 0.5rem 0 0.5rem 0.5rem;
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
</style>
