<template>
  <div
    ref="container"
    :class="textContainerClass"
    @click="onClick"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
// Vue
import {computed, onMounted, ref, useSlots, watch} from "vue";

// Composables
import {useColors} from "../composables/colors";

// Tipos
import type CSS from "csstype";

const props = defineProps({
  fontSize: {
    default: "1rem",
    type: [String, Number] as PropType<CSS.FontSizeProperty<string | number>>,
  },
  padding: {
    default: "0",
    type: [String, Number] as PropType<CSS.PaddingProperty<string | number>>,
  },
  lineHeight: {
    default: "1rem",
    type: [String, Number] as PropType<CSS.LineHeightProperty<string | number>>,
  },
  textAlign: {
    default: "",
    type: String as PropType<CSS.TextAlignProperty>,
  },
  textTransform: {
    default: "",
    type: String as PropType<CSS.TextTransformProperty>,
  },
  color: {
    default: "",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  hoverColor: {
    default: "",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  activeColor: {
    default: "#ffffff",
    type: String as PropType<CSS.ColorProperty | CustomColor>,
  },
  hoverBackground: {
    default: "neutro-1",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
  activeBackground: {
    default: "neutro-3",
    type: String as PropType<CSS.BackgroundColorProperty | CustomColor>,
  },
  whiteSpace: {
    default: "",
    type: String as PropType<CSS.WhiteSpaceProperty>,
  },
  fontWeight: {
    default: "",
    type: [String, Number],
  },
  letterSpacing: {
    default: "",
    type: [String, Number] as PropType<CSS.LetterSpacingProperty<string | number>>,
  },
  fontFamily: {
    default: "Metropolis",
    type: String as PropType<CSS.FontFamilyProperty>,
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
    type: String as PropType<CSS.BorderRadiusProperty<string>>,
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

const container = ref<HTMLDivElement | null>(null);

// Computed

const textContainerClass = computed(() => {
  const classes: string[] = ["text__container"];
  if (props.clickable) classes.push("text__container--clickable");
  classes.push(`text__container--${props.predefinedStyle}`);
  return classes;
});

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

const mountSpecialText = (value?: string) => {
  if (!value || !container.value || slots["default"]) return;
  const regex = /\*([^*]+)\*/g;
  container.value.innerHTML = value.replace(regex, (value: string) => {
    const sliced = value.slice(1, value.length - 1);
    return `<b>${sliced}</b>`;
  });
}

// Emits

const onClick = (ev: MouseEvent) => {
  emits("click", ev);
};

// Watchs

watch(() => props.specialText, mountSpecialText);
</script>

<style scoped lang="scss">
.text__container {
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
  font-family: v-bind(fontFamily), sans-serif;
}

.text__container--clickable {
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

.text__container--h1 {
  font-weight: 800;
  font-size: 2.375rem;
  line-height: 2.75rem;
}

.text__container--h2 {
  font-weight: 800;
  line-height: 2rem;
  font-size: 1.5625rem;
}

.text__container--subtitle-1 {
  font-size: 1.125rem;
  line-height: 1.375rem;
}

.text__container--subtitle-2 {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;
}

.text__container--body-1 {
  font-size: 1rem;
  line-height: 1.25rem;
}

.text__container--body-2 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
}

.text__container--caption {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
