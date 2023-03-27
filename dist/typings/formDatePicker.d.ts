import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const FormDatePicker: DefineComponent<{
  label: string;
  errorMessage?: string;
  placeholder: string;
  clearable: boolean;
  range: boolean;
  disabled: boolean;
  readonly: boolean;
  modelValue?: Date[] | Date | null
  outlined?: boolean;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  maxDate?: string | Date;
  minDate?: string | Date;
  dark?: boolean;
  "@update:model-value": (value: Date | Date[] | null) => void;
}>;
