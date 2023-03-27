import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    objectPosition: {
        default: string;
        type: PropType<CSS.ObjectPositionProperty<string | number>>;
    };
    width: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
    height: {
        default: string;
        type: PropType<CSS.HeightProperty<string | number>>;
    };
    objectFit: {
        default: string;
        type: PropType<CSS.ObjectFitProperty>;
    };
    aspectRatio: {
        default: string;
        type: PropType<CSS.AspectRatioProperty>;
    };
    clickable: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    objectPosition: {
        default: string;
        type: PropType<CSS.ObjectPositionProperty<string | number>>;
    };
    width: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
    height: {
        default: string;
        type: PropType<CSS.HeightProperty<string | number>>;
    };
    objectFit: {
        default: string;
        type: PropType<CSS.ObjectFitProperty>;
    };
    aspectRatio: {
        default: string;
        type: PropType<CSS.AspectRatioProperty>;
    };
    clickable: {
        type: BooleanConstructor;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    width: CSS.WidthProperty<string | number>;
    height: CSS.HeightProperty<string | number>;
    alt: string;
    objectPosition: CSS.ObjectPositionProperty<string | number>;
    objectFit: CSS.ObjectFitProperty;
    aspectRatio: CSS.AspectRatioProperty;
    clickable: boolean;
}>;
export default _sfc_main;
