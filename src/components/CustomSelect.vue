<template>
  <div
    ref="container"
    class="custom-select__container"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      :class="textContainerClass"
      @mousedown.stop="toggleMenu"
    >
      <input
        ref="input"
        readonly
        :value="text"
        :placeholder="placeholder"
        class="custom-select__text"
        @focus="openMenu"
        @blur="closeMenuBlur"
        @keydown.tab="closeMenuTab"
      />
      <div
        class="custom-select__clear"
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
      <div class="custom-select__icon">
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
        class="custom-select__menu"
      >
        <div
          v-if="searchable && items.length > 5"
          class="custom-select__search-container"
        >
          <input
            v-model="search"
            type="text"
            class="custom-select__search"
            :placeholder="searchPlaceholder || 'Buscar'"
            @click.stop
          />
          <FigmaIcon
            v-if="!search"
            size="1rem"
            color="acento-principal"
            name="fm-magnify-glass"
          />
          <button
            v-else
            class="custom-select__search--clear"
            @click.stop="search = ''"
          >
            <FigmaIcon
              size="1rem"
              color="neutro-4"
              name="fm-circle-close"
            />
          </button>
        </div>
        <div
          v-for="(item, index) in filteredItems"
          :key="`item-${index}`"
          :class="getItemClass(item)"
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
          class="custom-select__no-data"
        >
          Sin datos disponibles
        </div>
        <slot
          name="append-item"
          :close="closeMenu"
        />
      </div>
    </transition>
    <div
      v-if="errorMessage"
      class="custom-select__error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, nextTick, ref } from "vue";

// Composables
import { useSelects } from "@/composables/selects";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Composables
import CheckBox from "./CheckBox.vue";
import FigmaIcon from "./FigmaIcon.vue";

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
    type: Function as PropType<(search: string, item: unknown) => boolean>,
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
    if (props.searchFunction) props.searchFunction(search.value, _item);
    return searchItem(_item);
  });
});

const hasValue = computed(() => {
  if (Array.isArray(model.value)) return model.value.length > 0;
  return !!model.value;
});

const textContainerClass = computed(() => ({
  "custom-select__text-container": true,
  "custom-select__text-container--dark": props.dark,
  "custom-select__text-container--opened": menu.value,
  "custom-select__text-container--active": hasValue.value,
  "custom-select__text-container--disabled": props.disabled,
  "custom-select__text-container--outlined": props.outlined,
  "custom-select__text-container--error": !!props.errorMessage,
}));

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

function getItemClass(item: unknown) {
  return {
    "custom-select__menu-item": true,
    "custom-select__menu-item--selected": isSelected(item),
  };
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
@import "../scss/mixins";

.custom-select__container {
  display: grid;
  row-gap: 0.25rem;
}

.custom-select__text-container {
  display: grid;
  height: 2.5rem;
  cursor: pointer;
  padding: 0 0.75rem;
  position: relative;
  column-gap: 0.25rem;
  align-items: center;
  border-radius: 0.75rem;
  grid-template-columns: 1fr auto auto;
  background: rgb(var(--neutro-1));

  .custom-select__text {
    @include text-body-1;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(var(--secundario));

    &::placeholder {
      color: rgb(var(--neutro-4));
    }
  }

  .custom-select__clear {
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  .custom-select__icon {
    transition: all 200ms ease-out;
  }

  &--dark {
    background-color: transparent;
    border: 1px solid rgb(var(--neutro-4));

    .custom-select__text {
      color: rgb(var(--neutro-1));
    }
  }

  &--outlined {
    border: 1px solid rgb(var(--neutro-4));
  }

  &--opened:not(&--error),
  &--active:not(&--error) {
    border: 2px solid rgb(var(--acento-principal));

    &.custom-select__text-container--dark {
      border: 2px solid rgb(var(--neutro-1));
    }
  }

  &--opened .custom-select__icon {
    transform: rotate(180deg);
  }

  &--active .custom-select__text {
    text-transform: v-bind(textTransform);
  }

  &--error {
    border: 2px solid rgb(var(--error));

    .custom-select__text,
    .custom-select__text::placeholder {
      color: rgb(var(--error));
    }
  }

  &--disabled {
    border: none;
    cursor: default;
    background-color: rgb(var(--neutro-2));

    .custom-select__text {
      color: rgb(var(--neutro-4));
    }

    &.custom-select__text-container--dark {
      background-color: rgb(var(--neutro-4));

      .custom-select__text::placeholder {
        color: rgb(var(--neutro-3));
      }
    }
  }
}

.custom-select__menu {
  z-index: 1008;
  display: grid;
  padding: 1rem;
  position: fixed;
  row-gap: 0.5rem;
  top: v-bind(top);
  overflow-y: auto;
  max-height: 19rem;
  left: v-bind(left);
  background: #ffffff;
  border-radius: 1rem;
  width: v-bind(width);
  box-shadow: 3px 3px 17px rgba(151, 168, 194, 0.24);

  .custom-select__menu-item {
    display: flex;
    cursor: pointer;
    column-gap: 0.5rem;
    @include text-body-1;
    justify-content: flex-start;
    color: rgb(var(--secundario));
    transition: background-color 100ms;
    text-transform: v-bind(textTransform);

    &:not(&--selected):hover {
      color: rgb(var(--neutro-3));

      :deep(*) {
        fill: rgb(var(--acento-principal-hover)) !important;
        color: rgb(var(--acento-principal-hover)) !important;
      }
    }

    &:not(&--selected):active {
      color: rgb(var(--neutro-4));

      :deep(*) {
        fill: rgb(var(--acento-principal-pressed)) !important;
        color: rgb(var(--acento-principal-pressed)) !important;
      }
    }

    &--selected {
      font-weight: 600;
    }
  }
}

.custom-select__search-container {
  display: grid;
  column-gap: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
  padding-right: 0.75rem;
  grid-template-columns: 1fr 1rem;
  border: 1px solid rgb(var(--neutro-4));
}

.custom-select__search {
  @include text-body-1;
  width: 100%;
  outline: none;
  padding: 0.75rem;

  &::placeholder {
    color: rgb(var(--neutro-4));
  }
}

.custom-select__search--clear {
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
}

.custom-select__error {
  @include text-caption;
  text-align: left;
  color: rgb(var(--error));
}

.custom-select__no-data {
  @include text-body-1;
  text-align: center;
  color: rgb(var(--secundario));
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
