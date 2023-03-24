/* eslint-disable @typescript-eslint/no-explicit-any*/

type SelectItemKey = string | (string | number)[] | ((item: unknown, fallback?: any) => any);

const getNestedValue = (obj: any, path: (string | number)[], fallback?: any): any => {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
};

const getObjectValueByPath = (obj: any, path: any, fallback?: any) => {
  if (obj == null || !path || typeof path !== "string") return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)]/g, ".$1"); // convert indexes to properties
  path = path.replace(/^\./, ""); // strip a leading dot
  return getNestedValue(obj, path.split("."), fallback);
};

const getPropertyFromItem = (item: unknown, property: SelectItemKey, fallback?: any): any => {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === "string") return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== "function") return fallback;
  const value = property(item, fallback);
  return typeof value === "undefined" ? fallback : value;
};

export const useSelects = () => {
  return {
    getPropertyFromItem,
  };
};
