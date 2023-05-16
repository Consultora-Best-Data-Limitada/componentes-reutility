import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FormDatePickerProps {
  label: string;
  errorMessage?: string;
  placeholder: string;
  range?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: Date[] | Date | null | { month: number; year: number };
  outlined?: boolean;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  maxDate?: string | Date;
  minDate?: string | Date;
  clearable?: boolean;
  monthPicker?: boolean;
  dark?: boolean;
  "@update:model-value"?: (value: Date | Date[] | null | { month: number; year: number }) => void;
}

export declare const IFormDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormDatePickerProps;
};
