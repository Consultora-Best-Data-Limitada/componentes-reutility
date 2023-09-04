<template>
  <h1
    v-if="predefinedStyle === 'h1'"
    ref="h1Ref"
    :data-clickable="clickable"
    @click="onClick"
  >
    <slot />
  </h1>
  <h2
    v-else-if="predefinedStyle === 'h2'"
    ref="h2Ref"
    :data-clickable="clickable"
    @click="onClick"
  >
    <slot />
  </h2>
  <h3
    v-else-if="predefinedStyle === 'subtitle-1' || predefinedStyle === 'subtitle-2'"
    ref="h3Ref"
    :data-clickable="clickable"
    :data-style="predefinedStyle"
    @click="onClick"
  >
    <slot />
  </h3>
  <small
    v-else-if="predefinedStyle === 'caption'"
    ref="smallRef"
    :data-clickable="clickable"
    @click="onClick"
  >
    <slot />
  </small>
  <p
    v-else
    ref="pRef"
    :data-clickable="clickable"
    :data-style="predefinedStyle"
    @click="onClick"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted, ref, useSlots, watch } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Types
import type { PropType } from "vue";
import type { Property } from "csstype";

// Definitions

const props = defineProps({
  fontSize: {
    default: "1rem",
    type: [String, Number] as PropType<Property.FontSize>,
  },
  padding: {
    default: "initial",
    type: [String, Number] as PropType<Property.Padding>,
  },
  lineHeight: {
    default: "1rem",
    type: [String, Number] as PropType<Property.LineHeight>,
  },
  textAlign: {
    default: "initial",
    type: String as PropType<Property.TextAlign>,
  },
  textTransform: {
    default: "initial",
    type: String as PropType<Property.TextTransform>,
  },
  color: {
    default: "secundario",
    type: String as PropType<Property.Color | CustomColor>,
  },
  hoverColor: {
    default: "initial",
    type: String as PropType<Property.Color | CustomColor>,
  },
  activeColor: {
    default: "initial",
    type: String as PropType<Property.Color | CustomColor>,
  },
  hoverBackground: {
    default: "initial",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  activeBackground: {
    default: "initial",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  whiteSpace: {
    default: "initial",
    type: String as PropType<Property.WhiteSpace>,
  },
  fontWeight: {
    default: "initial",
    type: [String, Number],
  },
  letterSpacing: {
    default: "initial",
    type: [String, Number] as PropType<Property.LetterSpacing>,
  },
  predefinedStyle: {
    default: "",
    type: String as PropType<PredefinedStyle>,
  },
  clickable: {
    type: Boolean,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<Property.BorderRadius>,
  },
  specialText: {
    default: "",
    type: String,
  },
});

const emits = defineEmits(["click"]);

// Composables

const slots = useSlots();
const colors = useColors();

// Mounted

onMounted(() => {
  mountSpecialText(props.specialText);
});

// Data

const pRef = ref<HTMLElement | null>(null);
const h1Ref = ref<HTMLElement | null>(null);
const h2Ref = ref<HTMLElement | null>(null);
const h3Ref = ref<HTMLElement | null>(null);
const smallRef = ref<HTMLElement | null>(null);

// Computed

const colorInner = computed(() => {
  return colors.getRealColor(props.color);
});

const hoverColorInner = computed(() => {
  return colors.getRealColor(props.hoverColor);
});

const activeColorInner = computed(() => {
  return colors.getRealColor(props.activeColor);
});

const hoverBackgroundInner = computed(() => {
  return colors.getRealColor(props.hoverBackground);
});

const activeBackgroundInner = computed(() => {
  return colors.getRealColor(props.activeBackground);
});

// Methods

function mountSpecialText(value?: string) {
  const el = pRef.value ?? smallRef.value ?? h3Ref.value ?? h2Ref.value ?? h1Ref.value;
  if (!value || !el || slots["default"]) return;
  const regex = /\*([^*]+)\*/g;
  el.innerHTML = value.replace(regex, (value: string) => {
    const sliced = value.slice(1, value.length - 1);
    return `<strong>${sliced}</strong>`;
  });
}

// Emits

function onClick(ev: MouseEvent) {
  if (!props.clickable) return;
  emits("click", ev);
}

// Watchs

watch(() => props.specialText, mountSpecialText);
</script>

<style scoped lang="scss">
@import "../scss/mixins";

p,
h1,
h2,
h3,
small {
  padding: v-bind(padding);
  color: v-bind(colorInner);
  font-size: v-bind(fontSize);
  text-align: v-bind(textAlign);
  line-height: v-bind(lineHeight);
  font-weight: v-bind(fontWeight);
  white-space: v-bind(whiteSpace);
  border-radius: v-bind(borderRadius);
  letter-spacing: v-bind(letterSpacing);
  text-transform: v-bind(textTransform);
}

[data-clickable="true"] {
  cursor: pointer;
  user-select: none;
  transition: all 200ms ease;

  &:hover {
    color: v-bind(hoverColorInner);
    background-color: v-bind(hoverBackgroundInner);
  }

  &:active {
    color: v-bind(activeColorInner);
    background-color: v-bind(activeBackgroundInner);
  }
}

h1 {
  @include text-h1;
}

h2 {
  @include text-h2;
}

h3[data-style="subtitle-1"] {
  @include text-subtitle-1;
}

h3[data-style="subtitle-2"] {
  @include text-subtitle-2;
}

p[data-style="body-1"] {
  @include text-body-1;
}

p[data-style="body-2"] {
  @include text-body-2;
}

small {
  @include text-caption;
}
</style>
