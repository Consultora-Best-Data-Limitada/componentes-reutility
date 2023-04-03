import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";
import {VNode} from "vue";

export declare interface CustomMenuProps {
  default?: boolean;
  disabled?: boolean;
}

export declare const ICustomMenu: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomMenuProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
    activator?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
