import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface ColorPickerProps {
  dark?: boolean;
  modelValue: string;
  pickableColors?: string[];
  background?: Property.BackgroundColor | CustomColor;
  "@update:model-value": (value: string) => void;
}

export declare const IColorPicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ColorPickerProps;
};
