<template>
  <div class="grid gap-y-1 gap-x-3 items-center form-date-picker__container">
    <div
      :data-dark="dark"
      :data-readonly="readonly"
      :data-disabled="disabled"
      class="text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
    >
      {{ label }}
    </div>
    <CustomDatePicker
      v-model="model"
      :dark="dark"
      :range="range"
      :min-date="minDate"
      :max-date="maxDate"
      :disabled="disabled"
      :outlined="outlined"
      :readonly="readonly"
      :clearable="clearable"
      :placeholder="placeholder"
      :month-picker="monthPicker"
      :error-message="errorMessage"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import CustomDatePicker from "./CustomDatePicker.vue";

// Definiciones

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  errorMessage: {
    default: "",
    type: String,
  },
  placeholder: {
    type: String,
    required: true,
  },
  clearable: {
    type: Boolean,
  },
  range: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  modelValue: {
    default: null,
    type: [Array, Date, Object] as PropType<Date[] | Date | null | DatePickerMonthValue>,
  },
  outlined: {
    type: Boolean,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  maxDate: {
    default: "",
    type: [String, Date],
  },
  minDate: {
    default: "",
    type: [String, Date],
  },
  dark: {
    type: Boolean,
  },
  monthPicker: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: Date[] | Date | null | DatePickerMonthValue) {
    emits("update:model-value", value);
  },
});
</script>

<style scoped>
.form-date-picker__container {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
