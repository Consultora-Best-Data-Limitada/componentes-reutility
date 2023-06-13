import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FormColorPickerProps {
  label: string;
  dark?: boolean;
  modelValue: string;
  disabled?: boolean;
  readonly?: boolean;
  pickableColors?: string[];
  gridTemplateColumns: Property.GridTemplateColumns;
  background?: Property.BackgroundColor | CustomColor;
}

export declare const IFormColorPicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormColorPickerProps;
};
