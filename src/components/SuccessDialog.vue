<template>
  <v-dialog
    v-model="model"
    persistent
    scrim="neutro-3"
    :max-width="maxWidth"
    class="success-dialog__dialog"
  >
    <GridColumn
      v-if="model"
      padding="1rem"
      row-gap="1rem"
      border-radius="1rem"
      background-color="-neutro-1"
      box-shadow="3px 3px 17px rgba(151, 168, 194, 0.24)"
    >
      <FlexContainer justify-content="center">
        <FontAwesomeIcon
          v-if="icon.startsWith('fa')"
          size="5rem"
          :name="icon"
          color="-acento-principal"
        />
        <SvgIcon
          v-else
          size="5rem"
          :name="icon"
          color="-acento-principal"
        />
      </FlexContainer>
      <TextContainer
        text-align="center"
        predefined-style="h2"
        color="-acento-secundario"
      >
        {{ text }}
      </TextContainer>
      <TextContainer
        v-if="subtitle"
        color="-secundario"
        text-align="center"
        predefined-style="subtitle-2"
      >
        {{ subtitle }}
      </TextContainer>
    </GridColumn>
  </v-dialog>
</template>

<script setup lang="ts">
// Vue
import { computed, watch } from "vue";

// Componentes
import GridColumn from "@/components/custom/GridColumn.vue";
import FlexContainer from "@/components/custom/FlexContainer.vue";
import TextContainer from "@/components/custom/TextContainer.vue";
import FontAwesomeIcon from "@/components/custom/FontAwesomeIcon.vue";
import SvgIcon from "@/components/custom/SvgIcon.vue";

// Definiciones

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  subtitle: {
    default: "",
    type: String,
  },
  maxWidth: {
    default: 520,
    type: [String, Number],
  },
});

const emits = defineEmits(["close", "update:model-value"]);

// VModel

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

// Watch

watch(model, (value: boolean) => {
  if (value && props.duration > 0) {
    window.setTimeout(() => {
      emits("close");
    }, props.duration);
  }
});

watch(
  () => props.duration,
  (value: number) => {
    if (value > 0) {
      window.setTimeout(() => {
        emits("close");
      }, value);
    }
  },
);
</script>

<style scoped>
.success-dialog__dialog :deep(.v-overlay__scrim) {
  opacity: 1;
  backdrop-filter: blur(5px);
  background-color: rgba(var(--v-theme-neutro-3), 0.5) !important;
}
</style>
