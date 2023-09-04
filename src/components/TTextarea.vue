<template>
  <textarea
    v-model="model"
    :name="name"
    :rows="rows"
    :data-dark="dark"
    :readonly="readonly"
    :disabled="disabled"
    :data-filled="!!model"
    :maxlength="maxLength"
    :data-outlined="outlined"
    :placeholder="placeholder"
    class="w-full resize-none rounded-xl p-3 outline-none"
  />
  <span
    v-if="showCounter"
    class="block text-right text-[#5E798F] text-sm leading-5 font-medium col-start-2"
  >
    {{ model.length }}<template v-if="maxLength">/{{ maxLength }}</template>
  </span>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Definiciones

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  maxLength: {
    default: null,
    type: [Number, String],
  },
  showCounter: {
    type: Boolean,
  },
  placeholder: {
    default: "",
    type: String,
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
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});
</script>

<style scoped lang="scss">
textarea {
  &:read-only:not(:disabled) {
    border: none;
    font-weight: 600;
    background: transparent;
  }

  &::placeholder {
    color: rgb(var(--neutro-4));
  }

  &[data-dark="true"],
  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-4));
  }
}

[data-dark="true"] {
  background: transparent;
  color: rgb(var(--neutro-1));

  &:not(:read-only):focus {
    border: 2px solid rgb(var(--neutro-1));
  }

  &:disabled {
    border: none;
    background: rgb(var(--neutro-4));

    &,
    &::placeholder {
      color: rgb(var(--neutro-3));
    }
  }
}

[data-dark="false"] {
  color: rgb(var(--secundario));
  background: rgb(var(--neutro-1));

  &:not(:read-only):focus {
    border: 2px solid rgb(var(--acento-principal));
  }

  &:disabled {
    border: none;
    background: rgb(var(--neutro-2));

    &,
    &::placeholder {
      color: rgb(var(--neutro-4));
    }
  }
}
</style>
