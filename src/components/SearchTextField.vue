<template>
  <CustomTextField
    v-model="model"
    clearable
    :placeholder="placeholder"
  >
    <template #append>
      <FigmaIcon
        size="1rem"
        name="fm-magnify-glass"
        color="acento-principal"
      />
    </template>
  </CustomTextField>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Componentes
import FigmaIcon from "./FigmaIcon.vue";
import CustomTextField from "./CustomTextField.vue";

// Definiciones

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    default: "",
    type: String,
  },
});

const emits = defineEmits(["update:model-value"]);

// Computed

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:model-value", value);
  },
});
</script>
