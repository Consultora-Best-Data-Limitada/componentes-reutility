<template>
  <div
    ref="container"
    class="grid gap-y-1"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      :data-dark="dark"
      :data-filled="!!hasValue"
      :data-outlined="outlined"
      :data-readonly="readonly"
      :data-error="!!errorMessage"
      class="h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
      @mousedown.stop="toggleMenu"
    >
      <input
        ref="input"
        readonly
        :value="text"
        :disabled="disabled"
        :placeholder="placeholder"
        class="h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4"
        @focus="openMenu"
        @blur="closeMenuBlur"
        @keydown.tab="closeMenuTab"
      />
      <div
        class="cursor-pointer hover:opacity-60 active:opacity-100"
        @mousedown.stop
        @click.stop="clear"
      >
        <FigmaIcon
          v-if="showClearIcon"
          size="1rem"
          color="neutro-4"
          name="fm-circle-close"
        />
      </div>
      <div
        v-if="!readonly"
        :data-opened="menu"
        class="transition-all duration-200 ease-out data-[opened=true]:rotate-180"
      >
        <FigmaIcon
          size="1rem"
          :color="caretColor"
          name="fm-caret-down"
        />
      </div>
    </div>
    <transition>
      <div
        v-if="menu"
        ref="menuContainer"
        class="z-[1008] grid p-4 fixed gap-y-2 overflow-y-auto max-h-80 bg-neutro-1 rounded-2xl custom-select__menu"
      >
        <CustomTextField
          v-if="searchable && items.length > 5"
          v-model="search"
          outlined
          clearable
          :placeholder="searchPlaceholder || 'Buscar'"
        >
          <template #append>
            <FigmaIcon
              size="1rem"
              color="acento-principal"
              name="fm-magnify-glass"
            />
          </template>
        </CustomTextField>
        <slot
          v-if="slots['preppend-item']"
          :close="closeMenu"
          name="preppend-item"
          :filtered-items="filteredItems"
        />
        <div
          v-for="(item, index) in filteredItems"
          :key="`item-${index}`"
          :data-selected="isSelected(item)"
          class="custom-select__menu-item flex cursor-pointer text-base leading-5 gap-x-2 justify-start text-secundario transition-colors duration-100 data-[selected=true]:font-semibold"
          @click.stop="selectItem(item)"
        >
          <CheckBox
            v-if="multiple"
            :model-value="isSelected(item)"
          />
          {{ getText(item) }}
        </div>
        <div
          v-if="filteredItems.length === 0 && !hideNoDataMessage"
          class="leading-5 text-base text-center text-secundario"
        >
          Sin datos disponibles
        </div>
        <slot
          v-if="slots['append-item']"
          name="append-item"
          :close="closeMenu"
          :filtered-items="filteredItems"
        />
      </div>
    </transition>
    <div
      v-if="errorMessage"
      class="font-medium text-sm leading-[0.875rem] text-error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, nextTick, ref, useSlots } from "vue";

// Composables
import { useSelects } from "@/composables/selects";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Components
import CheckBox from "./CheckBox.vue";
import FigmaIcon from "./FigmaIcon.vue";
import CustomTextField from "./CustomTextField.vue";

// Definiciones

const props = defineProps({
  errorMessage: {
    default: "",
    type: String,
  },
  placeholder: {
    type: String,
    required: true,
  },
  itemValue: {
    type: String,
    default: "value",
  },
  itemTitle: {
    type: String,
    default: "title",
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
  },
  textMultiple: {
    default: "",
    type: String,
  },
  items: {
    required: true,
    type: Array as PropType<unknown[]>,
  },
  textTransform: {
    default: "initial",
    type: String as PropType<Property.TextTransform>,
  },
  multiple: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  modelValue: {
    default: null,
    type: [String, Number, Object, Array] as PropType<
      string | number | Record<string, any> | unknown[] | null
    >,
  },
  outlined: {
    type: Boolean,
  },
  searchable: {
    type: Boolean,
  },
  dark: {
    type: Boolean,
  },
  searchFunction: {
    default: null,
    type: Function as PropType<(search: string, item: any) => boolean>,
  },
  searchPlaceholder: {
    default: "",
    type: String,
  },
  hideNoDataMessage: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:model-value"]);

// Composables

const slots = useSlots();
const { getPropertyFromItem } = useSelects();

// Data

const top = ref("");
const left = ref("");
const width = ref("");
const search = ref("");
const menu = ref(false);
const mouseInside = ref(false);
const listenerExist = ref(false);
const input = ref<HTMLInputElement | null>(null);
const container = ref<HTMLDivElement | null>(null);
const menuContainer = ref<HTMLDivElement | null>(null);

// Computed

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: unknown) {
    emits("update:model-value", value);
  },
});

const showClearIcon = computed(
  () => hasValue.value && props.clearable && !props.readonly && !props.disabled,
);

const caretColor = computed<CustomColor>(() => {
  if (props.errorMessage) return "error";
  if (props.dark) {
    if (props.disabled) return "neutro-3";
    return "neutro-1";
  }
  if (props.disabled) return "neutro-4";
  return "acento-principal";
});

const filteredItems = computed(() => {
  if (!props.searchable || !search.value) return props.items;
  return props.items.filter((_item) => {
    if (props.searchFunction) return props.searchFunction(search.value, _item);
    return searchItem(_item);
  });
});

const hasValue = computed(() => {
  if (Array.isArray(model.value)) return model.value.length > 0;
  return !!model.value;
});

const text = computed(() => {
  if (model.value) {
    if (Array.isArray(model.value)) {
      if (model.value.length > 0) {
        return props.textMultiple;
      }
    } else if (props.returnObject) {
      return getPropertyFromItem(model.value, props.itemTitle, model.value);
    } else {
      const item = props.items?.find((_item) => {
        const value1 = getPropertyFromItem(_item, props.itemValue, _item);
        const value2 = getPropertyFromItem(model.value, props.itemValue, model.value);
        return value1 === value2;
      });
      return getPropertyFromItem(item, props.itemTitle, item);
    }
  }
  return "";
});

// Methods

function searchItem(_item: unknown) {
  const searchText = search.value.trim().toLowerCase();
  if (!searchText) return true;
  const text = getText(_item).toLowerCase();
  return text.includes(searchText);
}

function getText(item: unknown) {
  return getPropertyFromItem(item, props.itemTitle, item);
}

function onMouseEnter() {
  mouseInside.value = true;
}

function onMouseLeave() {
  mouseInside.value = false;
}

async function updatePosition() {
  await nextTick();
  const containerEl = container.value;
  const menuContainerEl = menuContainer.value;
  if (!containerEl || !menuContainerEl) return;
  const rect = containerEl.getBoundingClientRect();
  const menuRect = menuContainerEl.getBoundingClientRect();
  left.value = `${rect.left}px`;
  width.value = `${rect.width}px`;
  const menuEnd = rect.top + rect.height + menuRect.height;
  const windowHeight = window.innerHeight;
  const realTop = rect.top + rect.height - (props.errorMessage ? 18 : 0);
  if (menuEnd > windowHeight) {
    const diferencia = menuEnd - windowHeight;
    top.value = `${realTop - diferencia - 16}px`;
  } else {
    top.value = `${realTop}px`;
  }
}

function openMenu() {
  if (props.disabled || props.readonly || menu.value) return;
  menu.value = true;
  updatePosition();
  listenerExist.value = true;
  document.addEventListener("click", closeMenuHandler);
}

function closeMenu() {
  menu.value = false;
  mouseInside.value = false;
  listenerExist.value = false;
  document.removeEventListener("click", closeMenuHandler);
}

function closeMenuBlur() {
  if (mouseInside.value) return;
  closeMenu();
}

function closeMenuTab() {
  if (!menu.value) return;
  closeMenu();
}

function closeMenuHandler(ev: MouseEvent) {
  if (!container.value || !ev.target) return;
  if (!container.value.contains(ev.target as Node)) {
    closeMenu();
  }
}

function toggleMenu() {
  if (props.disabled || props.readonly) return;
  if (menu.value) {
    closeMenu();
    if (input.value) input.value.focus();
  } else {
    openMenu();
    if (input.value) input.value.blur();
  }
}

function selectItem(item: unknown) {
  const itemValue = getPropertyFromItem(item, props.itemValue, item);
  if (props.multiple && Array.isArray(model.value)) {
    const copy = model.value.slice();
    const index = props.returnObject
      ? copy.findIndex((i) => {
          const iValue = getPropertyFromItem(i, props.itemValue, i);
          return iValue === itemValue;
        })
      : copy.indexOf(itemValue);
    if (index >= 0) {
      copy.splice(index, 1);
    } else {
      copy.push(props.returnObject ? item : itemValue);
    }
    model.value = copy;
  } else {
    model.value = props.returnObject ? item : itemValue;
    closeMenu();
  }
}

function isSelected(item: unknown) {
  if (props.multiple && Array.isArray(model.value)) {
    return model.value.some((_item) => {
      const value1 = getPropertyFromItem(_item, props.itemValue, _item);
      const value2 = getPropertyFromItem(item, props.itemValue, item);
      return value1 === value2;
    });
  }
  const value1 = getPropertyFromItem(model.value, props.itemValue, model.value);
  const value2 = getPropertyFromItem(item, props.itemValue, item);
  return value1 === value2;
}

function clear() {
  if (Array.isArray(model.value)) {
    model.value = [];
  } else {
    model.value = null;
  }
}
</script>

<style scoped lang="scss">
[data-dark="true"] {
  border: 1px solid rgb(var(--neutro-4));

  input {
    color: rgb(var(--neutro-1));
  }

  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-1));
  }

  &[data-error="false"][data-readonly="false"]:has(input:focus) {
    border: 2px solid rgb(var(--neutro-1));
  }

  &[data-readonly="true"] {
    border: none;
    background: transparent;

    input {
      font-weight: 600;
    }
  }

  &:has(input:disabled) {
    border: none;
    background-color: rgb(var(--neutro-4));

    input,
    input::placeholder {
      font-weight: initial;
      color: rgb(var(--neutro-3));
    }
  }

  &[data-error="true"] {
    border: 2px solid rgb(var(--error));

    input,
    input::placeholder {
      color: rgb(var(--error));
    }
  }
}

[data-dark="false"] {
  &[data-filled="true"],
  &[data-outlined="true"] {
    border: 1px solid rgb(var(--neutro-4));
  }

  &[data-error="false"][data-readonly="false"]:has(input:focus) {
    border: 2px solid rgb(var(--acento-principal));
  }

  &[data-readonly="true"] {
    border: none;
    background: transparent;

    input {
      font-weight: 600;
    }
  }

  &:has(input:disabled) {
    border: none;
    background-color: rgb(var(--neutro-2));

    input,
    input::placeholder {
      font-weight: initial;
      color: rgb(var(--neutro-4));
    }
  }

  &[data-error="true"] {
    border: 2px solid rgb(var(--error));

    input,
    input::placeholder {
      color: rgb(var(--error));
    }
  }
}

.custom-select__menu {
  top: v-bind(top);
  left: v-bind(left);
  width: v-bind(width);
  box-shadow: 3px 3px 17px rgba(151, 168, 194, 0.24);

  .custom-select__menu-item {
    text-transform: v-bind(textTransform);

    &[data-selected="false"]:hover {
      color: rgb(var(--neutro-3));

      :deep(*) {
        fill: rgb(var(--acento-principal-hover)) !important;
        color: rgb(var(--acento-principal-hover)) !important;
      }
    }

    &[data-selected="false"]:active {
      color: rgb(var(--neutro-4));

      :deep(*) {
        fill: rgb(var(--acento-principal-pressed)) !important;
        color: rgb(var(--acento-principal-pressed)) !important;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
