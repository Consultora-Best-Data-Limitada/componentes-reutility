<template>
  <div class="filter-select__container">
    <div class="filter-select__label">
      {{ label }}
    </div>
    <CustomSelect
      v-model="model"
      clearable
      :items="items"
      :multiple="multiple"
      :item-title="itemTitle"
      :item-value="itemValue"
      :searchable="searchable"
      :placeholder="placeholder"
      :text-multiple="textMultiple"
      :return-object="returnObject"
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
    default: false,
  },
  modelValue: {
    default: null,
    type: [String, Number, Object, Array] as PropType<
      string | number | Record<string, any> | unknown[] | null
    >,
  },
  searchable: {
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

<style scoped lang="scss">
.filter-select__container {
  display: grid;
  row-gap: 0.25rem;
}

.filter-select__label {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;
}
</style>
