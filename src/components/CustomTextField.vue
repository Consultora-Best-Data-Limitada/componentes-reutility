<template>
  <div class="custom-text-field__container">
    <div :class="inputContainerClass">
      <input
        v-model="model"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        class="custom-text-field__input"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
        @keyup="onKeyup"
        @keydown="onKeydown"
      />
      <div
        v-if="clearable && !disabled && !readonly"
        class="custom-text-field__button"
        @click="clear"
      >
        <FontAwesomeIcon
          v-if="model"
          size="1rem"
          color="neutro-4"
          name="fas-circle-xmark"
        />
      </div>
      <slot
        v-if="checkSlot()"
        name="append"
      />
    </div>
    <div
      v-if="errorMessage"
      class="custom-text-field__error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, ref, useSlots } from "vue";

// Tipos
import type { PropType } from "vue";

// Componentes
import FontAwesomeIcon from "@/components/FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    default: "",
    type: [String, Number],
  },
  clearable: {
    type: Boolean,
  },
  errorMessage: {
    default: "",
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  outlined: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  type: {
    default: "text",
    type: String as PropType<"email" | "phone" | "text" | "time" | "password">,
  },
  dark: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value", "keydown", "keyup", "input", "focus", "blur"]);

// Composables

const slots = useSlots();

// Data

const focused = ref(false);

// Computed

const model = computed<string | number>({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    if (props.disabled || props.readonly) return;
    emits("update:model-value", value);
  },
});

const gridTemplateColumns = computed(() => {
  let result = "1fr";
  if (props.clearable) result += " 1rem";
  if (checkSlot()) result += " 1rem";
  return result;
});

const paddingRight = computed(() => {
  if (props.clearable || checkSlot()) return "0.75rem";
  return 0;
});

const inputContainerClass = computed(() => ({
  "custom-text-field__input-container": true,
  "custom-text-field__input-container--dark": props.dark,
  "custom-text-field__input-container--outlined": props.outlined,
  "custom-text-field__input-container--disabled": props.disabled,
  "custom-text-field__input-container--error": !!props.errorMessage,
  "custom-text-field__input-container--focused": focused.value || !!model.value,
}));

// Methods

const checkSlot = () => {
  return !!slots["append"];
};

const clear = () => {
  if (!model.value) return;
  model.value = "";
};

// Emits

const onFocus = (ev: MouseEvent) => {
  if (props.disabled || props.readonly) return;
  focused.value = true;
  emits("focus", ev);
};

const onBlur = (ev: MouseEvent) => {
  if (props.disabled || props.readonly) return;
  focused.value = false;
  emits("blur", ev);
};

const onInput = (ev: KeyboardEvent) => {
  if (props.disabled || props.readonly) return;
  emits("input", ev);
};

const onKeyup = (ev: KeyboardEvent) => {
  if (props.disabled || props.readonly) return;
  emits("keyup", ev);
};

const onKeydown = (ev: KeyboardEvent) => {
  if (props.disabled || props.readonly) return;
  emits("keydown", ev);
};
</script>

<style scoped lang="scss">
.custom-text-field__container {
  display: grid;
  row-gap: 0.25rem;
}

.custom-text-field__input-container {
  display: grid;
  height: 2.5rem;
  align-items: center;
  column-gap: 0.25rem;
  border-radius: 0.75rem;
  padding-right: v-bind(paddingRight);
  background: rgb(var(--neutro-1));
  grid-template-columns: v-bind(gridTemplateColumns);

  &--dark {
    background-color: transparent;
    border: 1px solid rgb(var(--neutro-4));

    .custom-text-field__input {
      color: rgb(var(--neutro-1));
    }
  }

  &--outlined {
    border: 1px solid rgb(var(--neutro-4));
  }

  &--focused {
    border: 2px solid rgb(var(--acento-principal));

    &.custom-text-field__input-container--dark {
      border: 2px solid rgb(var(--neutro-1));
    }
  }

  &--error {
    border: 2px solid rgb(var(--error));

    .custom-text-field__input,
    .custom-text-field__input::placeholder {
      color: rgb(var(--error));
    }
  }

  &--disabled {
    border: none;
    cursor: default;
    background-color: rgb(var(--neutro-2));

    &.custom-text-field__input-container--dark {
      background-color: rgb(var(--neutro-4));

      .custom-text-field__input::placeholder {
        color: rgb(var(--neutro-3));
      }
    }
  }
}

.custom-text-field__input {
  width: 100%;
  outline: none;
  height: 2.25rem;
  font-size: 1rem;
  padding: 0.75rem;
  line-height: 1rem;
  color: rgb(var(--secundario));
  font-family: "Metropolis", sans-serif;

  &::placeholder {
    color: rgb(var(--neutro-4));
  }
}

.custom-text-field__button {
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
}

.custom-text-field__error {
  font-weight: 500;
  text-align: left;
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: rgb(var(--error));
  font-family: "Metropolis", sans-serif;
}
</style>
