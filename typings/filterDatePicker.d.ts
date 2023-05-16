import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FilterDatePickerProps {
  label: string;
  placeholder?: string;
  modelValue?: Date[] | Date | null | { month: number; year: number };
  range?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  clearable?: boolean;
  monthPicker?: boolean;
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const IFilterDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FilterDatePickerProps;
};
