import {App} from "vue";
import TextContainer from "./src/plugin/components/TextContainer.vue";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextContainer: TextContainer
  }
}
