import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface HeaderTabsProps {
  items: string[];
  modelValue: number;
  columnGap?: CSS.ColumnGapProperty<string>;
  color?: CSS.BackgroundColorProperty | CustomColor;
  "@update:model-value"?: (value: number) => void;
}

export declare const IHeaderTabs: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & HeaderTabsProps;
};
