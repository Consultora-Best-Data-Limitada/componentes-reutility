import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FormDatePicker = DefineComponent<
  {
    label: {
      type: StringConstructor;
      required: true;
    };
    errorMessage: {
      default: "";
      type: StringConstructor;
    };
    placeholder: {
      type: StringConstructor;
      required: true;
    };
    clearable: {
      type: BooleanConstructor;
    };
    range: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    modelValue: {
      default: null;
      type: PropType<Date[] | Date | null | DatePickerMonthValue>;
    };
    outlined: {
      type: BooleanConstructor;
    };
    gridTemplateColumns: {
      default: "1fr 3fr";
      type: PropType<Property.GridTemplateColumns>;
    };
    maxDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    minDate: {
      default: "";
      type: [StringConstructor, DateConstructor];
    };
    dark: {
      type: BooleanConstructor;
    };
    monthPicker: {
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
