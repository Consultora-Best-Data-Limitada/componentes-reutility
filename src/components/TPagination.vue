<script setup lang="ts">
// Vue
import { computed } from "vue";

// Components
import IconButton from "@/components/IconButton.vue";

// Definitions

const props = defineProps({
  modelValue: {
    default: 1,
    type: Number,
  },
  pageCount: {
    default: 1,
    type: Number,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const page = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emits("update:model-value", value);
  },
});

const pages = computed(() => {
  return Array.from({ length: props.pageCount - 2 }, (_, i) => i + 2).filter((_page) => {
    if (props.pageCount <= 7) return true;
    if (page.value <= 4) return _page <= 5;
    if (page.value > props.pageCount - 4) return _page > props.pageCount - 5;
    return _page >= page.value - 1 && _page <= page.value + 1;
  });
});

// Methods

function setPage(value: number) {
  page.value = value;
}

function previousPage() {
  if (page.value === 1) return;
  page.value -= 1;
}

function nextPage() {
  if (page.value === props.pageCount) return;
  page.value += 1;
}
</script>

<template>
  <div class="grid grid-flow-col items-center justify-center gap-x-1 select-none">
    <template v-if="pageCount > 1">
      <div class="pr-1">
        <IconButton
          size="1rem"
          icon="fm-arrow-left"
          color="acento-principal"
          :disabled="page === 1"
          @click="previousPage"
        />
      </div>
      <button
        :data-active="page === 1"
        class="w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed"
        @click="setPage(1)"
      >
        1
      </button>
    </template>
    <span
      v-if="page > 4 && pageCount > 7"
      class="w-9 text-center text-sm font-medium text-acento-secundario leading-5"
    >
      ...
    </span>
    <button
      v-for="_page in pages"
      :key="`page-${_page}`"
      class="w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed"
      :data-active="page === _page"
      @click="setPage(_page)"
    >
      {{ _page }}
    </button>
    <span
      v-if="page < pageCount - 3 && pageCount > 7"
      class="w-9 text-center text-sm font-medium text-acento-secundario leading-5"
    >
      ...
    </span>
    <template v-if="pageCount > 1">
      <button
        :data-active="page === pageCount"
        class="w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed"
        @click="setPage(pageCount)"
      >
        {{ pageCount }}
      </button>
      <div class="pl-1">
        <IconButton
          size="1rem"
          icon="fm-arrow-right"
          color="acento-principal"
          :disabled="page === pageCount"
          @click="nextPage"
        />
      </div>
    </template>
  </div>
</template>
