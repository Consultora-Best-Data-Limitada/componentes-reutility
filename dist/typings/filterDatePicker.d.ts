import type {DefineComponent} from "vue";

declare const FilterDatePicker: DefineComponent<{
  label: string;
  placeholder?: string;
  modelValue?: Date[] | Date | null;
  range?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  "@update:model-value": (value: Date | Date[] | null) => void;
}>;
