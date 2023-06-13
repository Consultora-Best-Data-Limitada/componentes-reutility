<template>
  <div
    ref="container"
    :class="textContainerClass"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted, ref, useSlots, watch } from "vue";

// Composables
import { useColors } from "@/composables/colors";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

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
    default: "",
    type: String as PropType<Property.Color | CustomColor>,
  },
  hoverColor: {
    default: "",
    type: String as PropType<Property.Color | CustomColor>,
  },
  activeColor: {
    default: "#ffffff",
    type: String as PropType<Property.Color | CustomColor>,
  },
  hoverBackground: {
    default: "neutro-1",
    type: String as PropType<Property.BackgroundColor | CustomColor>,
  },
  activeBackground: {
    default: "neutro-3",
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
};

// Emits

const onClick = (ev: MouseEvent) => {
  emits("click", ev);
};

// Watchs

watch(() => props.specialText, mountSpecialText);
</script>

<style scoped lang="scss">
@import "../scss/mixins";

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
  @include text-h1;
}

.text__container--h2 {
  @include text-h2;
}

.text__container--subtitle-1 {
  @include text-subtitle-1;
}

.text__container--subtitle-2 {
  @include text-subtitle-2;
}

.text__container--body-1 {
  @include text-body-1;
}

.text__container--body-2 {
  @include text-body-2;
}

.text__container--caption {
  @include text-caption;
}
</style>
