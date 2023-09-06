import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type DataTable = DefineComponent<
  {
    items: {
      required: true;
      type: PropType<DataTableItem[]>;
    };
    headers: {
      required: true;
      type: PropType<DataTableHeader[]>;
    };
    backgroundColor: {
      default: "initial";
      type: PropType<Property.BackgroundColor>;
    };
    itemsPerPage: {
      default: null;
      type: PropType<number | null>;
    };
    height: {
      default: "initial";
      type: PropType<Property.Height>;
    };
    gridTemplateColumns: {
      default: "initial";
      type: PropType<Property.GridTemplateColumns>;
    };
    noDataText: {
      type: StringConstructor;
      default: "No hay datos registrados";
    };
    selected: {
      default: "";
      type: StringConstructor;
    };
    compareSelectedWith: {
      type: StringConstructor;
      default: "id";
    };
    disabledKey: {
      type: StringConstructor;
      default: "";
    };
    disabledValue: {
      type: StringConstructor;
      default: "";
    };
    hideNoDataIcon: {
      type: BooleanConstructor;
    };
    noDataIcon: {
      type: StringConstructor;
      default: "fm-sad-face";
    };
    stickyFirstColumn: {
      type: BooleanConstructor;
    };
    stickyLastColumn: {
      type: BooleanConstructor;
    };
    stickyHead: {
      type: BooleanConstructor;
    };
    maxHeight: {
      default: "inital";
      type: PropType<Property.MaxHeight>;
    };
    dark: {
      type: BooleanConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "click:row": void;
  }
>;
