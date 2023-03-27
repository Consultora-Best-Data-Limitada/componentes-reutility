import type { DefineComponent, VNode } from "vue";

declare const PanelTitle: DefineComponent<{
  closable?: boolean;
  "@click:close": () => void;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
