import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        required: true;
        type: PropType<DataTableItem[]>;
    };
    headers: {
        required: true;
        type: PropType<DataTableHeader[]>;
    };
    itemsPerPage: {
        default: number;
        type: NumberConstructor;
    };
    height: {
        default: string;
        type: PropType<string>;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    selected: {
        default: string;
        type: StringConstructor;
    };
    compareSelectedWith: {
        type: StringConstructor;
        default: string;
    };
    disabledKey: {
        type: StringConstructor;
        default: string;
    };
    disabledValue: {
        type: StringConstructor;
        default: string;
    };
    hideNoDataIcon: {
        type: BooleanConstructor;
    };
    noDataIcon: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        required: true;
        type: PropType<DataTableItem[]>;
    };
    headers: {
        required: true;
        type: PropType<DataTableHeader[]>;
    };
    itemsPerPage: {
        default: number;
        type: NumberConstructor;
    };
    height: {
        default: string;
        type: PropType<string>;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    selected: {
        default: string;
        type: StringConstructor;
    };
    compareSelectedWith: {
        type: StringConstructor;
        default: string;
    };
    disabledKey: {
        type: StringConstructor;
        default: string;
    };
    disabledValue: {
        type: StringConstructor;
        default: string;
    };
    hideNoDataIcon: {
        type: BooleanConstructor;
    };
    noDataIcon: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    height: string;
    gridTemplateColumns: string;
    itemsPerPage: number;
    noDataText: string;
    selected: string;
    compareSelectedWith: string;
    disabledKey: string;
    disabledValue: string;
    hideNoDataIcon: boolean;
    noDataIcon: string;
}>;
export default _sfc_main;
