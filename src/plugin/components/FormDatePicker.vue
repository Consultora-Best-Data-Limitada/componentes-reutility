<template>
  <div class="form-date-picker__container">
    <div class="form-date-picker__label">
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
import type CSS from "csstype";
import type { PropType } from "vue";

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
    type: [Array, Date] as PropType<Date[] | Date | null>,
  },
  outlined: {
    type: Boolean,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
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
  set(value: Date[] | Date | null) {
    emits("update:model-value", value);
  },
});

const labelColor = computed(() => {
  if (props.disabled) return "rgb(var(--neutro-4))";
  if (props.dark) return "rgb(var(--neutro-1))";
  return "rgb(var(--secundario))";
});
</script>

<style scoped lang="scss">
.form-date-picker__container {
  display: grid;
  row-gap: 0.25rem;
  column-gap: 0.75rem;
  align-items: center;
  grid-template-columns: v-bind(gridTemplateColumns);

  .form-date-picker__label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: v-bind(labelColor);
    font-family: "Metropolis", sans-serif;
  }
}
</style>
