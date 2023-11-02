<template>
  <div class="grid gap-y-1 gap-x-3 items-center form-select__container">
    <div
      :data-dark="dark"
      :data-readonly="readonly"
      :data-disabled="disabled"
      class="text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
    >
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
        v-if="slots['preppend-item']"
        #preppend-item="{ close, filteredItems }"
      >
        <slot
          :close="close"
          name="preppend-item"
          :filtered-items="filteredItems"
        />
      </template>
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
</script>

<style scoped>
.form-select__container {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
