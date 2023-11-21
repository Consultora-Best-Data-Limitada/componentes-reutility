<template>
  <TDialog
    v-model="internalOpened"
    persistent
    @closed="onClosed"
  >
    <div class="grid p-4 gap-y-4 rounded-2xl bg-neutro-1 shadow-1 w-[520px]">
      <h2 class="text-h2 text-acento-secundario text-center">
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-secundario text-center text-subtitle-2"
      >
        {{ subtitle }}
      </p>
      <div class="grid grid-cols-2 gap-x-3">
        <button
          class="bg-acento-principal hover:bg-acento-principal-hover active:bg-acento-principal-pressed text-neutro-1 text-subtitle-2 rounded-2xl p-3 leading-5 outline focus-visible:outline-2 focus-visible:outline-acento-principal-pressed focus-visible:bg-acento-principal-hover"
          @click="confirm(true)"
        >
          Sí
        </button>
        <button
          class="bg-error hover:bg-error-hover active:bg-error-pressed text-neutro-1 text-subtitle-2 rounded-2xl p-3 leading-5 outline focus-visible:outline-2 focus-visible:outline-error-pressed focus-visible:bg-error-hover"
          @click="confirm(false)"
        >
          No
        </button>
      </div>
    </div>
  </TDialog>
</template>

<script setup lang="ts">
// Vue
import { ref, watch } from "vue";

// Componentes
import TDialog from "./TDialog.vue";

// Definiciones

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    default: "",
    type: String,
  },
  opened: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["click:no", "click:yes"]);

// Data

const confirmed = ref(false);
const internalOpened = ref(false);

// Methods

function confirm(value: boolean): void {
  confirmed.value = value;
  internalOpened.value = false;
}

function onClosed() {
  if (confirmed.value) {
    emits("click:yes");
  } else {
    emits("click:no");
  }
}

// Watchs

watch(
  () => props.opened,
  (value) => {
    internalOpened.value = value;
  },
);
</script>
