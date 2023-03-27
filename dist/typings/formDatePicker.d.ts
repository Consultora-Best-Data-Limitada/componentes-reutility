import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FormDatePickerProps {
  label: string;
  errorMessage?: string;
  placeholder: string;
  clearable?: boolean;
  range?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: Date[] | Date | null
  outlined?: boolean;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  maxDate?: string | Date;
  minDate?: string | Date;
  dark?: boolean;
  "@update:model-value"?: (value: Date | Date[] | null) => void;
}

export declare const IFormDatePicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormDatePickerProps;
};
