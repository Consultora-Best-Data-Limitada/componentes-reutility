import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FontAwesomeIconProps {
  name: FigmaIconChoice;
  color?: CSS.ColorProperty | CustomColor;
  size: CSS.FontSizeProperty<string | number>;
}

export declare const IFigmaIcon: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FontAwesomeIconProps;
};
