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
import type { PropType } from "vue";
import type { Property } from "csstype";

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
    default: "initial",
    type: String as PropType<Property.ObjectPosition>,
  },
  width: {
    default: "initial",
    type: String as PropType<Property.Width>,
  },
  height: {
    default: "initial",
    type: String as PropType<Property.Height>,
  },
  objectFit: {
    default: "initial",
    type: String as PropType<Property.ObjectFit>,
  },
  aspectRatio: {
    default: "initial",
    type: String as PropType<Property.AspectRatio>,
  },
  clickable: {
    type: Boolean,
  },
  borderRadius: {
    default: "initial",
    type: String as PropType<Property.BorderRadius>,
  },
});

const emits = defineEmits(["click"]);

// Computed

const realSrc = computed(() => {
  return new URL(props.src, import.meta.url).href;
});

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
  border-radius: v-bind(borderRadius);
  object-position: v-bind(objectPosition);

  &--clickable {
    cursor: pointer;
  }
}
</style>
