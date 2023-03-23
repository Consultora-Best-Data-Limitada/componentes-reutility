<template>
  <img
    :alt="alt"
    :src="realSrc"
    :class="imageContainerClass"
    @click="onClick"
  />
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type CSS from "csstype";
import type { PropType } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
  objectPosition: {
    default: "",
    type: String as PropType<CSS.ObjectPositionProperty<string | number>>,
  },
  width: {
    default: "",
    type: String as PropType<CSS.WidthProperty<string | number>>,
  },
  height: {
    default: "",
    type: String as PropType<CSS.HeightProperty<string | number>>,
  },
  objectFit: {
    default: "",
    type: String as PropType<CSS.ObjectFitProperty>,
  },
  aspectRatio: {
    default: "",
    type: String as PropType<CSS.AspectRatioProperty>,
  },
  clickable: {
    type: Boolean,
  },
});

const emits = defineEmits(["click"]);

// Computed

const realSrc = computed(() => new URL(`/src/assets/${props.src}`, import.meta.url).href);

const imageContainerClass = computed(() => ({
  image__container: true,
  "image__container--clickable": props.clickable,
}));

// Emits

const onClick = (ev: MouseEvent) => {
  emits("click", ev);
};
</script>

<style scoped lang="scss">
.image__container {
  width: v-bind(width);
  height: v-bind(height);
  object-fit: v-bind(objectFit);
  aspect-ratio: v-bind(aspectRatio);
  object-position: v-bind(objectPosition);

  &--clickable {
    cursor: pointer;
  }
}
</style>
