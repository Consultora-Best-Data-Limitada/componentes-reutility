<template>
  <div class="form-select__container">
    <div class="form-select__label">
      {{ label }}
    </div>
    <CustomSelect
      v-model="model"
      :dark="dark"
      :items="items"
      :readonly="readonly"
      :outlined="outlined"
      :disabled="disabled"
      :multiple="multiple"
      :clearable="clearable"
      :item-value="itemValue"
      :item-title="itemTitle"
      :searchable="searchable"
      :placeholder="placeholder"
      :error-message="errorMessage"
      :return-object="returnObject"
      :text-multiple="textMultiple"
      :text-transform="textTransform"
      :search-function="searchFunction"
      :search-placeholder="searchPlaceholder"
      :hide-no-data-message="hideNoDataMessage"
    >
      <template
        v-if="slots['append-item']"
        #append-item="{ close, filteredItems }"
      >
        <slot
          :close="close"
          name="append-item"
          :filtered-items="filteredItems"
        />
      </template>
    </CustomSelect>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, useSlots } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Composables
import CustomSelect from "./CustomSelect.vue";

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
  itemValue: {
    type: String,
    default: "value",
  },
  itemTitle: {
    type: String,
    default: "title",
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
  },
  textMultiple: {
    default: "",
    type: String,
  },
  items: {
    required: true,
    type: Array as PropType<unknown[]>,
  },
  textTransform: {
    default: "initial",
    type: String as PropType<Property.TextTransform>,
  },
  multiple: {
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
    type: [String, Number, Object, Array] as PropType<
      string | number | Record<string, any> | unknown[] | null
    >,
  },
  outlined: {
    type: Boolean,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  searchable: {
    type: Boolean,
  },
  dark: {
    type: Boolean,
  },
  searchFunction: {
    default: null,
    type: Function as PropType<(search: string, item: any) => boolean>,
  },
  searchPlaceholder: {
    default: "",
    type: String,
  },
  hideNoDataMessage: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const slots = useSlots();

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number | Record<string, any> | unknown[] | null) {
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
.form-select__container {
  display: grid;
  row-gap: 0.25rem;
  column-gap: 0.75rem;
  align-items: center;
  grid-template-columns: v-bind(gridTemplateColumns);

  .form-select__label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: v-bind(labelColor);
    font-family: "Metropolis", sans-serif;
  }
}
</style>
