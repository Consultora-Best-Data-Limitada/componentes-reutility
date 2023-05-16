import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface CustomTooltipProps {
  disabled?: boolean;
}

export declare const ICustomTooltip: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomTooltipProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
    activator?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
