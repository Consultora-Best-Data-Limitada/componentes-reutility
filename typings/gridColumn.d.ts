import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type GridColumn = DefineComponent<{
  alignContent: {
    default: "initial";
    type: PropType<Property.AlignContent>;
  };
  alignItems: {
    default: "initial";
    type: PropType<Property.AlignItems>;
  };
  justifyContent: {
    default: "initial";
    type: PropType<Property.JustifyContent>;
  };
  justifyItems: {
    default: "initial";
    type: PropType<Property.JustifyItems>;
  };
  width: {
    default: "initial";
    type: PropType<Property.Width>;
  };
  height: {
    default: "initial";
    type: PropType<Property.Height>;
  };
  margin: {
    default: "initial";
    type: PropType<Property.Margin>;
  };
  rowGap: {
    default: "initial";
    type: PropType<Property.RowGap>;
  };
  padding: {
    default: "initial";
    type: PropType<Property.Padding>;
  };
  gridRow: {
    default: "initial";
    type: PropType<Property.GridRow>;
  };
  gridColumn: {
    default: "initial";
    type: PropType<Property.GridColumn>;
  };
  gridTemplateRows: {
    default: "initial";
    type: PropType<Property.GridTemplateRows>;
  };
  backgroundColor: {
    default: "initial";
    type: PropType<Property.BackgroundColor | CustomColor>;
  };
  borderRadius: {
    default: "initial";
    type: PropType<Property.BorderRadius>;
  };
  boxShadow: {
    default: "initial";
    type: PropType<Property.BoxShadow>;
  };
  overflow: {
    default: "initial";
    type: PropType<Property.Overflow>;
  };
}>;
