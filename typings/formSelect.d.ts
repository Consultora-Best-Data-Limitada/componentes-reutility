import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FormSelect = DefineComponent<
  {
    label: {
      type: StringConstructor;
      required: true;
    };
    errorMessage: {
      default: "";
      type: StringConstructor;
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
    clearable: {
      type: BooleanConstructor;
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
    };
    disabled: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    modelValue: {
      default: null;
      type: PropType<string | number | Record<string, any> | unknown[] | null>;
    };
    outlined: {
      type: BooleanConstructor;
    };
    gridTemplateColumns: {
      default: "1fr 3fr";
      type: PropType<Property.GridTemplateColumns>;
    };
    searchable: {
      type: BooleanConstructor;
    };
    dark: {
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
