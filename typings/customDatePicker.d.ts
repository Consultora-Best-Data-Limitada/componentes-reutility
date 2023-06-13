import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface CustomDatePickerProps {
  dark?: boolean;
  range?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  clearable?: boolean;
  placeholder?: string;
  errorMessage?: string;
  monthPicker?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  modelValue?: Date[] | Date | null | { month: number; year: number };
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const ICustomDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomDatePickerProps;
};
