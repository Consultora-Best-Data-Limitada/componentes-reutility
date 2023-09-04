import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type TForm = DefineComponent<
  {
    name: {
      type: StringConstructor;
      default: null;
    };
    gridTemplateColumns: {
      default: "initial";
      type: PropType<Property.GridTemplateColumns>;
    };
    gridTemplateRows: {
      default: "initial";
      type: PropType<Property.GridTemplateRows>;
    };
    gridAutoFlow: {
      default: "initial";
      type: PropType<Property.GridAutoFlow>;
    };
    gridAutoColumns: {
      default: "initial";
      type: PropType<Property.GridAutoColumns>;
    };
    gridAutoRows: {
      default: "initial";
      type: PropType<Property.GridAutoRows>;
    };
    alignItems: {
      default: "initial";
      type: PropType<Property.AlignItems>;
    };
    alignContent: {
      default: "initial";
      type: PropType<Property.AlignContent>;
    };
    justifyItems: {
      default: "initial";
      type: PropType<Property.JustifyItems>;
    };
    justifyContent: {
      default: "initial";
      type: PropType<Property.JustifyContent>;
    };
    rowGap: {
      default: "initial";
      type: PropType<Property.RowGap>;
    };
    columnGap: {
      default: "initial";
      type: PropType<Property.ColumnGap>;
    };
    backgroundColor: {
      default: "initial";
      type: PropType<CustomColor | Property.BackgroundColor>;
    };
    padding: {
      default: "initial";
      type: PropType<Property.Padding>;
    };
    borderRadius: {
      default: "initial";
      type: PropType<Property.BorderRadius>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "submit": void;
  }
>;
