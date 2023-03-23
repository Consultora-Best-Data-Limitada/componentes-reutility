<template>
  <v-dialog
    v-model="model"
    persistent
    scrim="neutro-3"
    :max-width="maxWidth"
    class="confirmation-dialog__dialog"
  >
    <GridColumn
      v-if="model"
      padding="1rem"
      row-gap="1rem"
      border-radius="1rem"
      background-color="-neutro-1"
      box-shadow="3px 3px 17px rgba(151, 168, 194, 0.24)"
    >
      <TextContainer
        text-align="center"
        predefined-style="h2"
        color="-acento-secundario"
      >
        {{ title }}
      </TextContainer>
      <TextContainer
        v-if="subtitle"
        color="-secundario"
        text-align="center"
        predefined-style="subtitle-2"
      >
        {{ subtitle }}
      </TextContainer>
      <GridRow column-gap="0.75rem">
        <CustomButton
          color="-acento-principal"
          height="2.75rem"
          @click="onClickYes"
        >
          {{ text("boton-si") }}
        </CustomButton>
        <CustomButton
          color="-error"
          height="2.75rem"
          @click="onClickNo"
        >
          {{ text("boton-no") }}
        </CustomButton>
      </GridRow>
    </GridColumn>
  </v-dialog>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Composables
import { useI18n } from "vue-i18n";

// Componentes
import GridRow from "@/components/custom/GridRow.vue";
import GridColumn from "@/components/custom/GridColumn.vue";
import CustomButton from "@/components/custom/CustomButton.vue";
import TextContainer from "@/components/custom/TextContainer.vue";

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
  modelValue: {
    type: Boolean,
    required: true,
  },
  maxWidth: {
    default: 520,
    type: [String, Number],
  },
});

const emits = defineEmits(["click:no", "click:yes", "update:model-value"]);

// Composables

const { t } = useI18n();

// VModel

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

// Methods

const text = (key: string) => t(`dialogo-confirmacion.${key}`);

// Emits

const onClickYes = (): void => {
  emits("click:yes");
};

const onClickNo = (): void => {
  emits("click:no");
};
</script>

<style scoped>
.confirmation-dialog__dialog :deep(.v-overlay__scrim) {
  opacity: 1;
  backdrop-filter: blur(5px);
  background-color: rgba(var(--v-theme-neutro-3), 0.5) !important;
}
</style>
