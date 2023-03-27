import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const HeaderTabs: DefineComponent<{
  items: string[];
  modelValue: number;
  columnGap?: CSS.ColumnGapProperty<string>;
  color?: CSS.BackgroundColorProperty | CustomColor;
  "@update:model-value": (value: number) => void;
}>;
