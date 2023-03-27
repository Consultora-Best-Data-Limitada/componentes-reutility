import type {App} from "vue";

import {TextContainer} from "./typings/textContainer";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextContainer: typeof TextContainer;
  }
}
