type SelectItemKey = string | (string | number)[] | ((item: unknown, fallback?: any) => any);
export declare const useSelects: () => {
    getPropertyFromItem: (item: unknown, property: SelectItemKey, fallback?: any) => any;
};
export {};
