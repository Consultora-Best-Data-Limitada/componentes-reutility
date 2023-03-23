<template>
  <CustomTextField
    v-model="model"
    clearable
    :placeholder="placeholder"
  >
    <template #append>
      <FontAwesomeIcon
        size="1rem"
        color="-acento-principal"
        name="fas-magnifying-glass"
      />
    </template>
  </CustomTextField>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Componentes
import CustomTextField from "@/components/custom/CustomTextField.vue";
import FontAwesomeIcon from "@/components/custom/FontAwesomeIcon.vue";

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
