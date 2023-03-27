import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FontAwesomeIconProps {
  name: string;
  color?: CSS.ColorProperty | CustomColor;
  size: CSS.FontSizeProperty<string | number>;
}

export declare const IFontAwesomeIcon: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FontAwesomeIconProps;
};
