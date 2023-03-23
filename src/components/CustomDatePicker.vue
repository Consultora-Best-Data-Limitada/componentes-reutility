<template>
  <div class="custom-date-picker__container">
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
      :enable-time-picker="false"
      class="custom-date-picker__picker"
      @open="onOpen"
      @closed="onClosed"
    >
      <template #dp-input="{ value, onClear, onInput, onEnter }">
        <div :class="inputContainerClass">
          <input
            readonly
            type="text"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
            class="custom-date-picker__input"
            @click.stop
            @input="onInput"
            @focus.stop="onFocus"
            @keydown.enter="onEnter"
          />
          <div
            class="custom-date-picker__clear"
            @click.stop="onClear"
          >
            <FontAwesomeIcon
              v-if="value && !readonly && !disabled"
              size="1rem"
              color="-neutro-4"
              name="fas-circle-xmark"
            />
          </div>
          <div class="custom-date-picker__icon">
            <FontAwesomeIcon
              v-if="!disabled"
              size="1rem"
              :color="iconColor"
              name="far-calendar-days"
            />
          </div>
        </div>
      </template>
      <template #arrow-right>
        <FontAwesomeIcon
          size="1.5rem"
          color="-acento-principal"
          name="fas-circle-chevron-right"
        />
      </template>
      <template #arrow-left>
        <FontAwesomeIcon
          size="1.5rem"
          color="-acento-principal"
          name="fas-circle-chevron-left"
        />
      </template>
    </VueDatePicker>
    <div
      v-if="errorMessage"
      class="custom-date-picker__error"
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
import VueDatePicker from "@vuepic/vue-datepicker";
import FontAwesomeIcon from "@/components/custom/FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  modelValue: {
    default: null,
    type: [Array, Date] as PropType<Date[] | Date | null>,
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
  set(value: Date | Date[] | null) {
    emits("update:model-value", value);
  },
});

const format = computed(() => (props.range ? "dd/MM/yy" : "dd/MM/yyyy"));

const hasValue = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.length > 0;
  }
  return !!model.value;
});

const inputContainerClass = computed(() => ({
  "custom-date-picker__input-container": true,
  "custom-date-picker__input-container--dark": props.dark,
  "custom-date-picker__input-container--disabled": props.disabled,
  "custom-date-picker__input-container--outlined": props.outlined,
  "custom-date-picker__input-container--error": !!props.errorMessage,
  "custom-date-picker__input-container--opened": opened.value || hasValue.value,
}));

const iconColor = computed<CustomColor>(() => {
  if (props.dark) {
    if (props.disabled) return "-neutro-3";
    return "-neutro-1";
  }
  if (props.disabled) return "-neutro-4";
  return "-acento-principal";
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
.custom-date-picker__container {
  display: grid;
  row-gap: 0.25rem;
}

.custom-date-picker__input-container {
  display: grid;
  height: 2.5rem;
  column-gap: 0.25rem;
  align-items: center;
  padding-right: 0.75rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  grid-template-columns: 1fr 1rem 1rem;
  background-color: rgb(var(--v-theme-neutro-1));

  &--dark {
    background-color: transparent;
    border: 1px solid rgb(var(--v-theme-neutro-4));

    .custom-date-picker__input {
      color: rgb(var(--v-theme-neutro-1));
    }
  }

  &--outlined {
    border: 1px solid rgb(var(--v-theme-neutro-4));
  }

  &--opened:not(&--error) {
    border: 2px solid rgb(var(--v-theme-acento-principal));

    &.custom-date-picker__input-container--dark {
      border: 2px solid rgb(var(--v-theme-neutro-1));
    }
  }

  &--error {
    border: 2px solid rgb(var(--v-theme-error));

    .custom-date-picker__input,
    .custom-date-picker__input::placeholder {
      color: rgb(var(--v-theme-error));
    }
  }

  &--disabled {
    border: none;
    cursor: default;
    background-color: rgb(var(--v-theme-neutro-2));

    &.custom-date-picker__input-container--dark {
      background-color: rgb(var(--v-theme-neutro-4));

      .custom-date-picker__input::placeholder {
        color: rgb(var(--v-theme-neutro-3));
      }
    }
  }
}

.custom-date-picker__input {
  width: 100%;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem;
  overflow: hidden;
  line-height: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Metropolis", sans-serif;

  &::placeholder {
    color: rgb(var(--v-theme-neutro-4));
  }
}

.custom-date-picker__clear {
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
}

.custom-date-picker__icon {
  cursor: pointer;
}

.custom-date-picker__picker {
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
    color: rgb(var(--v-theme-neutro-4));
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
        background-color: rgba(var(--v-theme-neutro-2), 0.3);
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
    color: rgb(var(--v-theme-secundario));
    font-family: "Metropolis", sans-serif;

    &.dp__cell_offset,
    &.dp__cell_disabled {
      color: rgb(var(--v-theme-neutro-4));
    }

    &:not(.dp__cell_disabled):hover {
      background-color: rgb(var(--v-theme-neutro-2));
    }

    &.dp__range_between {
      background-color: rgba(var(--v-theme-acento-principal), 0.3);
    }

    &.dp__today {
      border: 1px solid rgb(var(--v-theme-acento-principal));
    }

    &.dp__range_end,
    &.dp__active_date,
    &.dp__range_start,
    &:not(.dp__cell_disabled):active {
      color: rgb(var(--v-theme-neutro-1));
      background-color: rgb(var(--v-theme-acento-principal));
    }
  }
}

.custom-date-picker__error {
  font-weight: 500;
  text-align: left;
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: rgb(var(--v-theme-error));
  font-family: "Metropolis", sans-serif;
}
</style>
