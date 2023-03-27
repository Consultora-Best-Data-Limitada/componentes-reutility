import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const InformationText: DefineComponent<{
  label: string;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  padding?: CSS.PaddingProperty<string>;
  textTransform?: CSS.TextTransformProperty;
}>;
