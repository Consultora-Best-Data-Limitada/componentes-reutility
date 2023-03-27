import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface SvgIconProps {
  color?: CSS.ColorProperty | CustomColor;
  src: string;
  size?: CSS.WidthProperty<string | number>;
}

export declare const ISvgIcon: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SvgIconProps;
};
