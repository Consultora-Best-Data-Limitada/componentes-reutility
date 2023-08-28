<template>
  <div class="grid gap-y-1 gap-x-3 items-center form-text-field__container">
    <div
      :data-dark="dark"
      :data-readonly="readonly"
      :data-disabled="disabled"
      class="text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
    >
      {{ label }}
    </div>
    <CustomTextField
      v-model="model"
      :type="type"
      :dark="dark"
      :mask="mask"
      :readonly="readonly"
      :disabled="disabled"
      :outlined="outlined"
      :clearable="clearable"
      :mask-tokens="maskTokens"
      :placeholder="placeholder"
      :error-message="errorMessage"
      @blur="onBlur"
      @input="onInput"
      @keyup="onKeyup"
      @focus="onFocus"
      @keydown="onKeydown"
    >
      <template
        v-if="checkSlot()"
        #append
      >
        <slot name="append" />
      </template>
    </CustomTextField>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, useSlots } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import CustomTextField from "./CustomTextField.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    default: "",
    type: [String, Number],
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  errorMessage: {
    default: "",
    type: String,
  },
  readonly: {
    type: Boolean,
  },
  dark: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  outlined: {
    type: Boolean,
  },
  clearable: {
    type: Boolean,
  },
  gridTemplateColumns: {
    default: "1fr 3fr",
    type: String as PropType<Property.GridTemplateColumns>,
  },
  type: {
    default: "text",
    type: String as PropType<"email" | "phone" | "text" | "time" | "password">,
  },
  mask: {
    default: "",
    type: String,
  },
  maskTokens: {
    default: "",
    type: String,
  },
});

const emits = defineEmits(["update:model-value", "keydown", "keyup", "input", "focus", "blur"]);

// Composables

const slots = useSlots();

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emits("update:model-value", value);
  },
});

// Methods

const checkSlot = () => {
  return !!slots["append"];
};

// Emits

const onFocus = (ev: MouseEvent) => {
  emits("focus", ev);
};

const onBlur = (ev: MouseEvent) => {
  emits("blur", ev);
};

const onInput = (ev: KeyboardEvent) => {
  emits("input", ev);
};

const onKeyup = (ev: KeyboardEvent) => {
  emits("keyup", ev);
};

const onKeydown = (ev: KeyboardEvent) => {
  emits("keydown", ev);
};
</script>

<style scoped>
.form-text-field__container {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
