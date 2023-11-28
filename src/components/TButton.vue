<template>
  <button
    :disabled="disabled"
    :data-loading="loading"
    :class="`group text-subtitle-2 inline-flex gap-x-2 items-center ${colorClasses} disabled:text-neutro-4 disabled:fill-neutro-4 data-[loading=true]:pointer-events-none`"
  >
    <slot name="preppend" />
    <IconThreeBounce
      v-if="loading"
      class="w-[22px] h-[22px]"
    />
    <slot v-else />
    <slot name="append" />
  </button>
</template>

<script setup lang="ts">
// Vue
import { computed, type PropType } from "vue";

// Components
import IconThreeBounce from "@/components/icons/IconThreeBounce.vue";

// Definitions

const props = defineProps({
  color: {
    default: null,
    type: String as PropType<"acento-principal" | "acento-secundario" | "error" | null>,
  },
  outlined: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  text: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
});

// Data

const classes = {
  filled: {
    error:
      "bg-error hover:bg-error-hover active:bg-error-pressed outline-error-pressed focus-visible:bg-error-hover",
    "acento-principal":
      "bg-acento-principal hover:bg-acento-principal-hover active:bg-acento-principal-pressed outline-acento-principal-pressed focus-visible:bg-acento-principal-hover",
    "acento-secundario":
      "bg-acento-secundario hover:bg-acento-secundario-hover active:bg-acento-secundario-pressed outline-acento-secundario-pressed focus-visible:bg-acento-secundario-hover",
  },
  text: {
    error:
      "text-error hover:text-error-hover active:text-error-pressed fill-error hover:fill-error-hover active:fill-error-pressed",
    "acento-principal":
      "text-acento-principal hover:text-acento-principal-hover active:text-acento-principal-pressed fill-acento-principal hover:fill-acento-principal-hover active:fill-acento-principal-pressed",
    "acento-secundario":
      "text-acento-secundario hover:text-acento-secundario-hover active:text-acento-secundario-pressed fill-acento-secundario hover:fill-acento-secundario-hover active:fill-acento-secundario-pressed",
  },
  textFocused: {
    error: "focus-visible:text-error-hover focus-visible:fill-error-hover",
    "acento-principal":
      "focus-visible:text-acento-principal-hover focus-visible:fill-acento-principal-hover",
    "acento-secundario":
      "focus-visible:text-acento-secundario-hover focus-visible:fill-acento-secundario-hover",
  },
  outlined: {
    error:
      "border-error hover:border-error-hover active:border-error-pressed focus-visible:border-error-hover",
    "acento-principal":
      "border-acento-principal hover:border-acento-principal-hover active:border-acento-principal-pressed focus-visible:border-acento-principal-hover",
    "acento-secundario":
      "border-acento-secundario hover:border-acento-secundario-hover active:border-acento-secundario-pressed focus-visible:border-acento-secundario-hover",
  },
};

// Computed

const colorClasses = computed(() => {
  if (!props.color) return "";
  if (props.text) {
    const defaultClasses = "px-2 py-1 outline-none focus-visible:bg-neutro-2 rounded";
    return `${classes.text[props.color]} ${classes.textFocused[props.color]} ${defaultClasses}`;
  }
  if (props.outlined) {
    const defaultClasses =
      "outline-none border-2 border-solid disabled:border-neutro-4 p-3 rounded-2xl";
    return `${classes.text[props.color]} ${classes.outlined[props.color]} ${defaultClasses}`;
  }
  const defaultClasses =
    "text-neutro-1 disabled:bg-neutro-3 focus-visible:outline focus-visible:outline-2 p-3 rounded-2xl fill-neutro-1";
  return `${classes.filled[props.color]} ${defaultClasses}`;
});
</script>
