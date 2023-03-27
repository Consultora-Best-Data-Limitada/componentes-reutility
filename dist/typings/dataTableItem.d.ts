import type CSS from "csstype";
import type {DefineComponent, VNode} from "vue";

declare const DataTableItem: DefineComponent<{
  disabled?: boolean;
  selected?: boolean;
  textTransform?: CSS.TextTransformProperty;
  textAlign?: CSS.TextAlignProperty;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
