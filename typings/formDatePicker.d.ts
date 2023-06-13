import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FormDatePickerProps {
  label: string;
  dark?: boolean;
  range?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  outlined?: boolean;
  placeholder: string;
  clearable?: boolean;
  errorMessage?: string;
  monthPicker?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  gridTemplateColumns?: Property.GridTemplateColumns;
  modelValue?: Date[] | Date | null | { month: number; year: number };
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const IFormDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormDatePickerProps;
};
