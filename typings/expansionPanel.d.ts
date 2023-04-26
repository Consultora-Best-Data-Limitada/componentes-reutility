import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode} from "vue";

export declare interface ExpansionPanelProps {
  transitionTimingFunction?: CSS.TransitionTimingFunctionProperty;
  transitionDuration?: string;
  modelValue?: boolean;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  backgroundColor?: CustomColor | CSS.BackgroundColorProperty;
  outlined?: boolean;
}

export declare const IExpansionPanel: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpansionPanelProps;
  $slots: {
    default?: (({Component, close}: {
      Component: VNode;
    }) => VNode[]) | undefined;
    activator?: (({Component}: {
      Component: VNode;
      opened: boolean;
    }) => VNode[]) | undefined;
  };
};
