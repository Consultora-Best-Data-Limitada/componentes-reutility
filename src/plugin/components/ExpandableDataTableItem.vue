<template>
  <GridColumn>
    <CustomTooltip>
      <template #activator>
        <TextContainer
          padding="0.125rem 0"
          text-transform="capitalize"
          :predefined-style="opened && showActiveStyle ? 'body-2' : 'body-1'"
          :color="opened && showActiveStyle ? 'acento-principal' : 'secundario'"
        >
          {{ title }}
        </TextContainer>
      </template>
      <template
        v-if="checkSlot()"
        #default
      >
        <slot />
      </template>
    </CustomTooltip>
    <template v-if="opened">
      <TextContainer
        v-for="(value, key) in items"
        :key="`item-${key}`"
        :color="itemColor"
        padding="0.125rem 0"
        predefined-style="caption"
      >
        {{ value }}
      </TextContainer>
    </template>
  </GridColumn>
</template>

<script setup lang="ts">
// Vue
import { useSlots } from "vue";

// Tipos
import type { PropType } from "vue";

// Componentes
import GridColumn from "./GridColumn.vue";
import CustomTooltip from "./CustomTooltip.vue";
import TextContainer from "./TextContainer.vue";

// Definiciones

defineProps({
  title: {
    type: String,
    required: true,
  },
  opened: {
    type: Boolean,
  },
  items: {
    required: true,
    type: Array as PropType<string[]>,
  },
  showActiveStyle: {
    type: Boolean,
  },
  itemColor: {
    default: "neutro-4",
    type: String as PropType<CustomColor>,
  },
});

// Composables

const slots = useSlots();

// Methods

function checkSlot() {
  return !!slots["default"];
}
</script>
