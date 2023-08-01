<template>
  <CustomDialog
    persistent
    :model-value="model"
  >
    <GridColumn
      :width="width"
      padding="1rem"
      row-gap="1rem"
      border-radius="1rem"
      background-color="neutro-1"
      box-shadow="3px 3px 17px rgba(151, 168, 194, 0.24)"
    >
      <FlexContainer justify-content="center">
        <FigmaIcon
          v-if="icon.startsWith('fm')"
          size="5rem"
          :name="icon"
          :color="iconColor"
        />
        <SvgIcon
          v-else
          size="5rem"
          :src="icon"
          :color="iconColor"
        />
      </FlexContainer>
      <TextContainer
        text-align="center"
        predefined-style="h2"
        color="acento-secundario"
      >
        {{ text }}
      </TextContainer>
      <TextContainer
        v-if="subtitle"
        color="secundario"
        text-align="center"
        predefined-style="subtitle-2"
      >
        {{ subtitle }}
      </TextContainer>
    </GridColumn>
  </CustomDialog>
</template>

<script setup lang="ts">
// Vue
import { computed, watch } from "vue";

// Tipos
import type { PropType } from "vue";
import type { Property } from "csstype";

// Componentes
import SvgIcon from "./SvgIcon.vue";
import FigmaIcon from "./FigmaIcon.vue";
import GridColumn from "./GridColumn.vue";
import CustomDialog from "./CustomDialog.vue";
import FlexContainer from "./FlexContainer.vue";
import TextContainer from "./TextContainer.vue";

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
  width: {
    default: "520px",
    type: String as PropType<Property.Width>,
  },
  iconColor: {
    default: "acento-principal",
    type: String as PropType<Property.Color | CustomColor>,
  },
});

const emits = defineEmits(["close", "update:model-value"]);

// VModel

const model = computed<boolean>({
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

<style scoped lang="scss">
.success-dialog__dialog {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(var(--neutro-3), 0.5);

  :deep(> div) {
    width: v-bind(width);
  }
}

.fade-enter-active {
  animation: fade 300ms ease;
}

.fade-leave-active {
  animation: fade 300ms reverse ease;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
