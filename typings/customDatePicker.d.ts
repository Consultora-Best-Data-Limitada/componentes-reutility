import type { PropType, DefineComponent } from "vue";

export type CustomDatePicker = DefineComponent<
  {
    modelValue: {
      default: null;
      type: PropType<Date[] | Date | null | DatePickerMonthValue>;
    };
    monthPicker: {
      type: BooleanConstructor;
    };
    range: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    placeholder: {
      default: "";
      type: StringConstructor;
    };
    maxDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    minDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    errorMessage: {
      default: "";
      type: StringConstructor;
    };
    outlined: {
      type: BooleanConstructor;
    };
    dark: {
      type: BooleanConstructor;
    };
    clearable: {
      type: BooleanConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "update:model-value": void;
  }
>;
