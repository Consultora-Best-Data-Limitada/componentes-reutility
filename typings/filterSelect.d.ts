import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FilterSelect = DefineComponent<
  {
    label: {
      type: StringConstructor;
      required: true;
    };
    placeholder: {
      type: StringConstructor;
      required: true;
    };
    itemValue: {
      type: StringConstructor;
      default: "value";
    };
    itemTitle: {
      type: StringConstructor;
      default: "title";
    };
    returnObject: {
      type: BooleanConstructor;
      default: false;
    };
    textMultiple: {
      default: "";
      type: StringConstructor;
    };
    items: {
      required: true;
      type: PropType<unknown[]>;
    };
    textTransform: {
      default: "initial";
      type: PropType<Property.TextTransform>;
    };
    multiple: {
      type: BooleanConstructor;
      default: false;
    };
    modelValue: {
      default: null;
      type: PropType<string | number | Record<string, any> | unknown[] | null>;
    };
    searchable: {
      type: BooleanConstructor;
    };
    searchFunction: {
      default: null;
      type: PropType<(search: string, item: any) => boolean>;
    };
    searchPlaceholder: {
      default: "";
      type: StringConstructor;
    };
    hideNoDataMessage: {
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
    "update:model-value": void;
  }
>;
