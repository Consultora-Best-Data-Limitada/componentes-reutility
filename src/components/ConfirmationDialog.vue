<template>
  <CustomDialog
    v-model="model"
    persistent
  >
    <GridColumn
      padding="1rem"
      row-gap="1rem"
      :width="width"
      border-radius="1rem"
      background-color="neutro-1"
      class="confirmation-dialog__column"
      box-shadow="3px 3px 17px rgba(151, 168, 194, 0.24)"
    >
      <TextContainer
        text-align="center"
        predefined-style="h2"
        color="acento-secundario"
      >
        {{ title }}
      </TextContainer>
      <TextContainer
        v-if="subtitle"
        color="secundario"
        text-align="center"
        predefined-style="subtitle-2"
      >
        {{ subtitle }}
      </TextContainer>
      <GridRow column-gap="0.75rem">
        <CustomButton
          color="acento-principal"
          height="2.75rem"
          @click="onClickYes"
        >
          Sí
        </CustomButton>
        <CustomButton
          color="error"
          height="2.75rem"
          @click="onClickNo"
        >
          No
        </CustomButton>
      </GridRow>
    </GridColumn>
  </CustomDialog>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import GridRow from "./GridRow.vue";
import GridColumn from "./GridColumn.vue";
import CustomButton from "./CustomButton.vue";
import CustomDialog from "./CustomDialog.vue";
import TextContainer from "./TextContainer.vue";

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
  width: {
    default: "520px",
    type: String as PropType<Property.Width>,
  },
});

const emits = defineEmits(["click:no", "click:yes", "update:model-value"]);

// VModel

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:model-value", value);
  },
});

// Emits

function onClickYes(): void {
  emits("click:yes");
}

function onClickNo(): void {
  emits("click:no");
}
</script>
