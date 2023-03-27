import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface SearchTextFieldProps {
  placeholder: string;
  modelValue?: string;
  "@update:model-value"?: (value: string) => void;
}

export declare const ISearchTextField: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SearchTextFieldProps;
};
