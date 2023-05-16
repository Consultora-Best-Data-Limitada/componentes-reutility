<template>
  <div class="filter-date-picker__container">
    <div class="filter-date-picker__label">
      {{ label }}
    </div>
    <CustomDatePicker
      v-model="model"
      :range="range"
      :max-date="maxDate"
      :min-date="minDate"
      :clearable="clearable"
      :placeholder="placeholder"
      :month-picker="monthPicker"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";

// Componentes
import CustomDatePicker from "./CustomDatePicker.vue";

// Definiciones

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    default: "",
    type: String,
  },
  modelValue: {
    default: null,
    type: [Array, Date, Object] as PropType<Date[] | Date | null | DatePickerMonthValue>,
  },
  range: {
    type: Boolean,
  },
  maxDate: {
    default: "",
    type: [String, Date],
  },
  minDate: {
    default: "",
    type: [String, Date],
  },
  monthPicker: {
    type: Boolean,
  },
  clearable: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: Date | Date[] | null | DatePickerMonthValue) {
    emits("update:model-value", value);
  },
});
</script>

<style scoped lang="scss">
.filter-date-picker__container {
  display: grid;
  row-gap: 0.25rem;
}

.filter-date-picker__label {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;
}
</style>
