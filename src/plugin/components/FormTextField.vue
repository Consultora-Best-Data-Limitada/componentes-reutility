<template>
  <div class="form-text-field__container">
    <div class="form-text-field__label">
      {{ label }}
    </div>
    <CustomTextField
      v-model="model"
      :type="type"
      :dark="dark"
      :readonly="readonly"
      :disabled="disabled"
      :outlined="outlined"
      :clearable="clearable"
      :append-icon="appendIcon"
      :placeholder="placeholder"
      :error-message="errorMessage"
      @blur="onBlur"
      @input="onInput"
      @keyup="onKeyup"
      @focus="onFocus"
      @keydown="onKeydown"
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
    type: String as PropType<CSS.GridTemplateColumnsProperty<string>>,
  },
  type: {
    default: "text",
    type: String as PropType<"email" | "phone" | "text" | "time" | "password">,
  },
  appendIcon: {
    default: "",
    type: String,
  },
});

const emits = defineEmits(["update:model-value", "keydown", "keyup", "input", "focus", "blur"]);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emits("update:model-value", value);
  },
});

const labelColor = computed(() => {
  if (props.disabled) return "rgb(var(--neutro-4))";
  if (props.dark) return "rgb(var(--neutro-1))";
  return "rgb(var(--secundario))";
});

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

<style scoped lang="scss">
.form-text-field__container {
  display: grid;
  column-gap: 0.75rem;
  align-items: center;
  grid-template-columns: v-bind(gridTemplateColumns);

  .form-text-field__label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: v-bind(labelColor);
    font-family: "Metropolis", sans-serif;
  }
}
</style>
