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
      <template
        v-for="(value, key) in items"
        :key="`item-${key.toString()}`"
      >
        <slot
          v-if="checkSlot('item')"
          name="item"
          :item="value"
        />
        <TextContainer
          v-else
          :color="itemColor"
          padding="0.125rem 0"
          predefined-style="caption"
        >
          {{ value }}
        </TextContainer>
      </template>
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
    required: true,
    type: [String, Number],
  },
  opened: {
    type: Boolean,
  },
  items: {
    required: true,
    type: [Array, Object] as PropType<string[] | Record<string, string | number>>,
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

function checkSlot(name = "default") {
  return !!slots[name];
}
</script>
