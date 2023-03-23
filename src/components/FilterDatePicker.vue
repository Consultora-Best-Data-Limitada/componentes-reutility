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
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";

// Componentes
import CustomDatePicker from "@/components/custom/CustomDatePicker.vue";

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
    type: [Array, Date] as PropType<Date[] | Date | null>,
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
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: Date | Date[] | null) {
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
  font-family: "Metropolis", sans-serif;
  color: rgb(var(--v-theme-secundario));
}
</style>
