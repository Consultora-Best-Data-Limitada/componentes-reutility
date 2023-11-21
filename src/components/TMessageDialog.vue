<template>
  <TDialog
    v-model="internalOpened"
    persistent
    @closed="emits('closed')"
  >
    <div class="grid p-4 gap-y-4 rounded-2xl bg-neutro-1 shadow-1 w-[520px]">
      <i
        v-if="icon"
        :class="`icon-${icon} block text-[5rem] justify-self-center ${iconClass}`"
      />
      <h2 class="text-center text-acento-secundario text-h2">
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-secundario text-center text-subtitle-2"
      >
        {{ subtitle }}
      </p>
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
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  opened: {
    type: Boolean,
    required: true,
  },
  subtitle: {
    default: "",
    type: String,
  },
  iconClass: {
    type: String,
    default: "text-acento-principal",
  },
});

const emits = defineEmits(["closed"]);

// Data

const internalOpened = ref(false);

// Watchs

watch(
  () => props.opened,
  (value: boolean) => {
    internalOpened.value = value;
    if (value && props.duration > 0) {
      window.setTimeout(() => {
        internalOpened.value = false;
      }, props.duration);
    }
  },
);

watch(
  () => props.duration,
  (value: number) => {
    if (value > 0) {
      window.setTimeout(() => {
        internalOpened.value = false;
      }, value);
    }
  },
);
</script>
