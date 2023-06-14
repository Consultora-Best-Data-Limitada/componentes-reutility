import type { PropType, DefineComponent } from "vue";

export type FilterDatePicker = DefineComponent<
  {
    label: {
      type: StringConstructor;
      required: true;
    };
    placeholder: {
      default: "";
      type: StringConstructor;
    };
    modelValue: {
      default: null;
      type: PropType<Date[] | Date | null | DatePickerMonthValue>;
    };
    range: {
      type: BooleanConstructor;
    };
    maxDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    minDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    monthPicker: {
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
