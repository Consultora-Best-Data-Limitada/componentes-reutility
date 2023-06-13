import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FilterDatePickerProps {
  label: string;
  range?: boolean;
  clearable?: boolean;
  placeholder?: string;
  monthPicker?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  modelValue?: Date[] | Date | null | { month: number; year: number };
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const IFilterDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FilterDatePickerProps;
};
