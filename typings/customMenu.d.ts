import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface CustomMenuProps {
  default?: boolean;
  disabled?: boolean;
  nudgeTop?: number;
  nudgeBottom?: number;
  nudgeLeft?: number;
  nudgeRigth?: number;
}

export declare const ICustomMenu: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomMenuProps;
  $slots: {
    default?: (({Component, close}: {
      Component: VNode;
      close: () => void;
    }) => VNode[]) | undefined;
    activator?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
