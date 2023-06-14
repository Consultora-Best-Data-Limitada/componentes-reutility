import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type GridContainer = DefineComponent<{
  height: {
    default: "initial";
    type: PropType<Property.Height>;
  };
  alignItems: {
    default: "initial";
    type: PropType<Property.AlignItems>;
  };
  alignContent: {
    default: "initial";
    type: PropType<Property.AlignContent>;
  };
  justifyContent: {
    default: "initial";
    type: PropType<Property.JustifyContent>;
  };
  justifyItems: {
    default: "initial";
    type: PropType<Property.JustifyItems>;
  };
  gridTemplateRows: {
    default: "initial";
    type: PropType<Property.GridTemplateRows>;
  };
  rowGap: {
    default: "initial";
    type: PropType<Property.RowGap>;
  };
  margin: {
    default: "initial";
    type: PropType<Property.Margin>;
  };
  padding: {
    default: "initial";
    type: PropType<Property.Padding>;
  };
  gridTemplateColumns: {
    default: "initial";
    type: PropType<Property.GridTemplateColumns>;
  };
  columnGap: {
    default: "initial";
    type: PropType<Property.ColumnGap>;
  };
  gridAutoFlow: {
    default: "initial";
    type: PropType<Property.GridAutoFlow>;
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
}>;
