import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface InformationTextProps {
  label: string;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  padding?: CSS.PaddingProperty<string>;
  textTransform?: CSS.TextTransformProperty;
}

export declare const IInformationText: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & InformationTextProps;
};
