import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from "vue";

export declare interface ExpansionPanelProps {
  outlined?: boolean;
  modelValue?: boolean;
  transitionDuration?: string;
  borderRadius?: Property.BorderRadius;
  backgroundColor?: CustomColor | Property.BackgroundColor;
  transitionTimingFunction?: Property.TransitionTimingFunction;
}

export declare const IExpansionPanel: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ExpansionPanelProps;
  $slots: {
    default?: (({ Component, close }: { Component: VNode }) => VNode[]) | undefined;
    activator?: (({ Component }: { Component: VNode; opened: boolean }) => VNode[]) | undefined;
  };
};
