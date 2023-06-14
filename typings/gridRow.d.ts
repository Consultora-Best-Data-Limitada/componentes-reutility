import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type GridRow = DefineComponent<{
  width: {
    default: "initial";
    type: PropType<Property.Width>;
  };
  backgroundColor: {
    default: "initial";
    type: PropType<Property.BackgroundColor | CustomColor>;
  };
  gridColumn: {
    default: "initial";
    type: PropType<Property.GridColumn>;
  };
  gridRow: {
    default: "initial";
    type: PropType<Property.GridRow>;
  };
  padding: {
    default: "initial";
    type: PropType<Property.Padding>;
  };
  columnGap: {
    default: "initial";
    type: PropType<Property.ColumnGap>;
  };
  gridTemplateColumns: {
    default: "initial";
    type: PropType<Property.GridTemplateColumns>;
  };
  gridAutoColumns: {
    default: "initial";
    type: PropType<Property.GridAutoColumns>;
  };
  justifyContent: {
    default: "initial";
    type: PropType<Property.JustifyContent>;
  };
  alignItems: {
    default: "initial";
    type: PropType<Property.AlignItems>;
  };
  height: {
    default: "initial";
    type: PropType<Property.Height>;
  };
}>;
