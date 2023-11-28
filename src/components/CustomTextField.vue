<template>
  <div class="grid gap-y-1">
    <div
      :data-dark="dark"
      :data-filled="!!model"
      :data-outlined="outlined"
      :data-error="!!errorMessage"
      :data-padding-right="clearable || checkSlot()"
      class="h-10 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
    >
      <input
        v-if="mask"
        v-model="model"
        v-maska
        :type="type"
        :data-maska="mask"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :data-maska-tokens="maskTokens"
        class="outline-none h-9 px-3 text-secundario text-base placeholder-neutro-4"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
        @keyup="onKeyup"
        @keydown="onKeydown"
      />
      <input
        v-else
        v-model="model"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        class="outline-none h-9 px-3 text-secundario text-base placeholder-neutro-4"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
        @keyup="onKeyup"
        @keydown="onKeydown"
      />
      <div
        v-if="clearable && !disabled && !readonly"
        class="cursor-pointer hover:opacity-60 active:opacity-100"
        @click.stop="clear"
      >
        <FigmaIcon
          v-if="model"
          size="1rem"
          color="neutro-4"
          name="fm-circle-close"
        />
      </div>
      <slot
        v-if="checkSlot()"
        name="append"
      />
    </div>
    <div
      v-if="errorMessage"
      class="font-medium text-sm leading-[0.875rem] text-error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, useSlots } from "vue";

// Maska
import { vMaska } from "maska";

// Tipos
import type { PropType } from "vue";

// Componentes
import FigmaIcon from "./FigmaIcon.vue";

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

const model = computed<string | number>({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    if (props.disabled || props.readonly) return;
    emits("update:model-value", value);
  },
});

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
  emits("focus", ev);
};

const onBlur = (ev: MouseEvent) => {
  if (props.disabled || props.readonly) return;
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
input[type="time"]::-webkit-calendar-picker-indicator {
  background-image: url(data:image/svg+xml;base64,PHN2Zw0KICB2aWV3Qm94PSIwIDAgMTYgMTYiDQogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCj4NCiAgPHBhdGgNCiAgICBkPSJNOCAtMy44MTQ3ZS0wNUMzLjU4MTc2IC0zLjgxNDdlLTA1IDAgMy41ODE1NiAwIDcuOTk5OTZDMCAxMi40MTg0IDMuNTgxNjggMTYgOCAxNkMxMi40MTgyIDE2IDE2IDEyLjQxODQgMTYgNy45OTk5NkMxNiAzLjU4MTU2IDEyLjQxODIgLTMuODE0N2UtMDUgOCAtMy44MTQ3ZS0wNVpNOCAxLjU5OTk2QzExLjUzNDYgMS41OTk5NiAxNC40IDQuNDY1NTYgMTQuNCA3Ljk5OTk2QzE0LjQgMTEuNTM0NCAxMS41MzQ2IDE0LjQgOCAxNC40QzQuNDY1MzYgMTQuNCAxLjYgMTEuNTM0NCAxLjYgNy45OTk5NkMxLjYgNC40NjU1NiA0LjQ2NTM2IDEuNTk5OTYgOCAxLjU5OTk2Wk04IDMuMTk5OTZDNy41NTgxNiAzLjE5OTk2IDcuMiAzLjU1ODM2IDcuMiAzLjk5OTk2VjcuOTk5OTZDNy4yIDguMjExOTYgNy4yNzQ5NiA4LjQyNDc2IDcuNDI0OTYgOC41NzUxNkw5LjgyNDk2IDEwLjk3NTJDMTAuMTM3NCAxMS4yODcyIDEwLjY2MjYgMTEuMjg3MiAxMC45NzUgMTAuOTc1MkMxMS4yODc0IDEwLjY2MjQgMTEuMjg3NCAxMC4xMzc2IDEwLjk3NSA5LjgyNDc3TDguOCA3LjY0OTU3VjMuOTk5OTZDOC44IDMuNTU4MzYgOC40NDE4NCAzLjE5OTk2IDggMy4xOTk5NloiDQogIC8+DQo8L3N2Zz4NCg==);
}

[data-padding-right="true"] {
  padding-right: 0.75rem;

  input {
    padding-right: 0;
  }
}

[data-dark="true"] {
  border: 1px solid rgb(var(--neutro-4));

  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }

  input {
    color: rgb(var(--neutro-1));
  }

  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-1));
  }

  &:has(input:-webkit-autofill),
  &[data-error="false"]:has(input:focus:not(:read-only)) {
    border: 2px solid rgb(var(--neutro-1));
  }

  &:has(input:read-only) {
    border: none;
    background: transparent;

    input {
      font-weight: 600;
    }
  }

  &:has(input:disabled) {
    border: none;
    background-color: rgb(var(--neutro-4));

    input,
    input::placeholder {
      font-weight: initial;
      color: rgb(var(--neutro-3));
    }
  }

  &[data-error="true"] {
    border: 2px solid rgb(var(--error));

    input,
    input::placeholder {
      color: rgb(var(--error));
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(60%) sepia(57%) saturate(7002%) hue-rotate(327deg) brightness(99%)
      contrast(85%);
    }
  }

  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border-radius: 0.75rem;
      -webkit-text-fill-color: rgb(var(--neutro-1));
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0 100vw rgb(var(--secundario)) inset;
    }
  }
}

[data-dark="false"] {
  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(57%) sepia(63%) saturate(507%) hue-rotate(99deg) brightness(90%) contrast(89%);
  }

  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-4));
  }

  &:has(input:-webkit-autofill),
  &[data-error="false"]:has(input:focus:not(:read-only)) {
    border: 2px solid rgb(var(--acento-principal));
  }

  &:has(input:read-only) {
    border: none;
    background: transparent;

    input {
      font-weight: 600;
    }
  }

  &:has(input:disabled) {
    border: none;
    background-color: rgb(var(--neutro-2));

    input,
    input::placeholder {
      font-weight: initial;
      color: rgb(var(--neutro-4));
    }
  }

  &[data-error="true"] {
    border: 2px solid rgb(var(--error));

    input,
    input::placeholder {
      color: rgb(var(--error));
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(60%) sepia(57%) saturate(7002%) hue-rotate(327deg) brightness(99%)
        contrast(85%);
    }
  }

  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border-radius: 0.75rem;
      -webkit-text-fill-color: rgb(var(--secundario));
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0 100vw rgb(var(--neutro-1)) inset;
    }
  }
}
</style>
