import type {DefineComponent} from "vue";

declare const CustomDatePicker: DefineComponent<{
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
  "@update:model-value": (value: Date | Date[] | null) => void;
}>;
