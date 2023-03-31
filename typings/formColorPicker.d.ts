import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FormColorPickerProps {
  modelValue: string;
  background?: CSS.BackgroundColorProperty | CustomColor;
  dark?: boolean;
  pickableColors?: string[];
  label: string;
  disabled?: boolean;
  readonly?: boolean;
  gridTemplateColumns: CSS.GridTemplateColumnsProperty<string>;
}

export declare const IFormColorPicker: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FormColorPickerProps;
};
