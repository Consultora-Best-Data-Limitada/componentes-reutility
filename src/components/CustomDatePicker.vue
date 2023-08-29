<template>
  <div class="grid gap-y-1">
    <VueDatePicker
      ref="datepicker"
      v-model="model"
      auto-apply
      :range="range"
      locale="es-CL"
      hide-input-icon
      :format="format"
      :clearable="false"
      :max-date="maxDate"
      :min-date="minDate"
      :disabled="disabled"
      :readonly="readonly"
      :month-picker="monthPicker"
      :enable-time-picker="false"
      class="custom-date-picker__picker"
      @open="onOpen"
      @closed="onClosed"
    >
      <template #dp-input="{ value, onClear, onInput, onEnter }">
        <div
          :data-dark="dark"
          :data-opened="opened"
          :data-filled="!!hasValue"
          :data-outlined="outlined"
          :data-readonly="readonly"
          :data-error="!!errorMessage"
          class="h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
        >
          <input
            readonly
            type="text"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
            class="h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4"
            @click.stop
            @input="onInput"
            @focus.stop="onFocus"
            @keydown.enter="onEnter"
          />
          <div
            class="cursor-pointer hover:opacity-60 active:opacity-100"
            @click.stop="onClear"
          >
            <FigmaIcon
              v-if="value && !readonly && !disabled && clearable"
              size="1rem"
              color="neutro-4"
              name="fm-circle-close"
            />
          </div>
          <div class="cursor-pointer">
            <FigmaIcon
              v-if="!disabled"
              size="1rem"
              :color="iconColor"
              name="fm-calendar"
            />
          </div>
        </div>
      </template>
      <template #arrow-right>
        <FigmaIcon
          size="1.5rem"
          color="acento-principal"
          name="fm-chevron-right"
        />
      </template>
      <template #arrow-left>
        <FigmaIcon
          size="1.5rem"
          color="acento-principal"
          name="fm-chevron-left"
        />
      </template>
    </VueDatePicker>
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
import { computed, ref } from "vue";

// Estilos
import "@vuepic/vue-datepicker/dist/main.css";

// Tipos
import type { PropType } from "vue";

// Componentes
import FigmaIcon from "./FigmaIcon.vue";
import VueDatePicker from "@vuepic/vue-datepicker";

// Definiciones

const props = defineProps({
  modelValue: {
    default: null,
    type: [Array, Date, Object] as PropType<Date[] | Date | null | DatePickerMonthValue>,
  },
  monthPicker: {
    type: Boolean,
  },
  range: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  placeholder: {
    default: "",
    type: String,
  },
  maxDate: {
    default: "",
    type: [String, Date],
  },
  minDate: {
    default: "",
    type: [String, Date],
  },
  errorMessage: {
    default: "",
    type: String,
  },
  outlined: {
    type: Boolean,
  },
  dark: {
    type: Boolean,
  },
  clearable: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Data

const opened = ref(false);
const datepicker = ref<typeof VueDatePicker | null>(null);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: Date | Date[] | null | DatePickerMonthValue) {
    emits("update:model-value", value);
  },
});

const format = computed(() => {
  if (props.monthPicker) return "MM yyyy";
  return props.range ? "dd/MM/yy" : "dd/MM/yyyy";
});

const hasValue = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.length > 0;
  }
  return !!model.value;
});

const iconColor = computed<CustomColor>(() => {
  if (props.dark) {
    if (props.disabled) return "neutro-3";
    return "neutro-1";
  }
  if (props.disabled) return "neutro-4";
  return "acento-principal";
});

// Methods

const onFocus = () => {
  if (!datepicker.value) return;
  datepicker.value.openMenu();
};

const onOpen = () => {
  opened.value = true;
};

const onClosed = () => {
  opened.value = false;
};
</script>

<style scoped lang="scss">
input {
  font-family: "Metropolis", sans-serif;
}

[data-dark="true"] {
  border: 1px solid rgb(var(--neutro-4));

  input {
    color: rgb(var(--neutro-1));
  }

  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-1));
  }

  &[data-error="false"][data-readonly="false"][data-opened="true"] {
    border: 2px solid rgb(var(--neutro-1));
  }

  &[data-readonly="true"] {
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
  }
}

[data-dark="false"] {
  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-4));
  }

  &[data-error="false"][data-readonly="false"][data-opened="true"] {
    border: 2px solid rgb(var(--acento-principal));
  }

  &[data-readonly="true"] {
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
  }
}

.custom-date-picker__picker {
  :deep(.dp__pointer),
  :deep(.dp__overlay_cell),
  :deep(.dp__overlay_cell_active) {
    font-family: "Metropolis", sans-serif !important;
  }

  :deep(.dp__arrow_top),
  :deep(.dp__arrow_bottom),
  :deep(.dp__calendar_header_separator) {
    display: none;
  }

  :deep(.dp__menu) {
    border: none;
    border-radius: 1rem;
    top: 100% !important;
    box-shadow: 3px 3px 17px rgba(151, 168, 194, 0.24);
  }

  :deep(.dp__calendar_header) {
    width: 100%;
    display: grid;
    column-gap: 0.5rem;
    padding: 0 0 0.25rem;
    grid-template-columns: repeat(7, 2rem);
  }

  :deep(.dp__calendar_wrap) {
    width: 100%;
    padding: 0 0.75rem;
  }

  :deep(.dp__calendar_header_item) {
    padding: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;
    line-height: 1.25rem;
    justify-content: center;
    text-transform: capitalize;
    color: rgb(var(--neutro-4));
    font-family: "Metropolis", sans-serif;
  }

  :deep(.dp__month_year_wrap) {
    column-gap: 0.25rem;

    .dp__month_year_select {
      height: 1.5rem;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.375rem;
      font-family: "Metropolis", sans-serif;

      &:first-child {
        justify-content: flex-end;
        text-transform: capitalize;
      }

      &:last-child {
        justify-content: flex-start;
      }

      &:hover {
        background-color: rgba(var(--neutro-2), 0.3);
      }
    }
  }

  :deep(.dp__month_year_row) {
    height: 3rem;
    display: grid;
    padding: 0.75rem;
    box-sizing: border-box;
    grid-template-columns: 1.5rem 1fr 1.5rem;
  }

  :deep(.dp__calendar_row) {
    display: grid;
    column-gap: 0.5rem;
    margin: 0 0 0.25rem;
    grid-template-columns: repeat(7, 2rem);

    &:last-child {
      margin: 0 0 0.75rem;
    }
  }

  :deep(.dp__cell_inner) {
    padding: 0;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    border-radius: 50%;
    line-height: 1.25rem;
    color: rgb(var(--secundario));
    font-family: "Metropolis", sans-serif;

    &.dp__cell_offset,
    &.dp__cell_disabled {
      color: rgb(var(--neutro-4));
    }

    &:not(.dp__cell_disabled):hover {
      background-color: rgb(var(--neutro-2));
    }

    &.dp__range_between {
      background-color: rgba(var(--acento-principal), 0.3);
    }

    &.dp__today {
      border: 1px solid rgb(var(--acento-principal));
    }

    &.dp__range_end,
    &.dp__active_date,
    &.dp__range_start,
    &:not(.dp__cell_disabled):active {
      color: rgb(var(--neutro-1));
      background-color: rgb(var(--acento-principal));
    }
  }
}
</style>
