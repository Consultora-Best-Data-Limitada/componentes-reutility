import {AllowedComponentProps, App, ComponentCustomProps, VNode, VNodeProps} from "vue";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

export declare interface TextContainerProps {
  name?: string;
  textAlign?: string;
}

// export declare const TextContainer: new () => {
//   $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & TextContainerProps;
//   $slots: {
//     default?: (({Component, route}: {
//       Component: VNode;
//       route: RouteLocationNormalizedLoaded;
//     }) => VNode[]) | undefined;
//   };
// };

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextContainer: import('../src/plugin/components')['TextContainer']
  }
}
