import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface ColorPickerProps {
  modelValue: string;
  background?: CSS.BackgroundColorProperty | CustomColor;
  dark?: boolean;
  pickableColors?: string[];
}

export declare const IColorPicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ColorPickerProps;
};
