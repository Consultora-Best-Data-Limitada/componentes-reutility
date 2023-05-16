import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface CustomDatePickerProps {
  modelValue?: Date[] | Date | null | { month: number; year: number };
  range?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxDate?: string | Date;
  minDate?: string | Date;
  errorMessage?: string;
  clearable?: boolean;
  monthPicker?: boolean;
  outlined?: boolean;
  dark?: boolean;
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const ICustomDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomDatePickerProps;
};
