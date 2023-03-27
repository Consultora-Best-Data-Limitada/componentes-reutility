import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FilterDatePickerProps {
  label: string;
  placeholder?: string;
  modelValue?: Date[] | Date | null;
  range?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  "@update:model-value"?: (value: Date | Date[] | null) => void;
}

export declare const IFilterDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FilterDatePickerProps;
};
