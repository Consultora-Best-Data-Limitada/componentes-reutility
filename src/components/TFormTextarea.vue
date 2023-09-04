<template>
  <label class="grid gap-y-1 gap-x-3 t-form-texarea__container">
    <span
      :data-dark="dark"
      :data-readonly="readonly"
      :data-disabled="disabled"
      class="pt-3 text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
    >
      {{ label }}
    </span>
    <TTextarea
      v-model="model"
      :rows="rows"
      :dark="dark"
      :name="name"
      :readonly="readonly"
      :disabled="disabled"
      :outlined="outlined"
      :max-length="maxLength"
      :placeholder="placeholder"
      :show-counter="showCounter"
    />
  </label>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import TTextarea from "./TTextarea.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    default: "",
    type: String,
  },
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    default: "",
    type: String,
  },
  maxLength: {
    default: null,
    type: [Number, String],
  },
  showCounter: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  dark: {
    type: Boolean,
  },
  outlined: {
    type: Boolean,
  },
  rows: {
    default: null,
    type: [Number, String],
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});
</script>

<style scoped>
.t-form-texarea__container {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
