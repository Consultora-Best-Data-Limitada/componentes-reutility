import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CustomDatePickerProps {
  modelValue?: Date[] | Date | null,
  range?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  maxDate?: string | Date;
  minDate?: string | Date;
  errorMessage?: string;
  outlined?: boolean;
  dark?: boolean;
  "@update:model-value"?: (value: Date | Date[] | null) => void;
}

export declare const ICustomDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomDatePickerProps;
};
