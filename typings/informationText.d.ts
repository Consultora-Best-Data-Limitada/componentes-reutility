import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface InformationTextProps {
  label: string;
  padding?: Property.Padding;
  textTransform?: Property.TextTransform;
  gridTemplateColumns?: Property.GridTemplateColumns;
}

export declare const IInformationText: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & InformationTextProps;
};
