<template>
  <GridColumn>
    <TTooltip>
      <template #activator>
        <TextContainer
          padding="0.125rem 0"
          :text-transform="textTransform"
          :predefined-style="opened && showActiveStyle ? 'body-2' : 'body-1'"
          :color="opened && showActiveStyle ? 'acento-principal' : 'secundario'"
        >
          {{ title }}
        </TextContainer>
      </template>
      <p
        v-if="checkSlot()"
        class="p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
      >
        <slot />
      </p>
    </TTooltip>
    <template v-if="opened">
      <template
        v-for="(value, key) in items"
        :key="`item-${key.toString()}`"
      >
        <slot
          v-if="checkSlot('value')"
          name="value"
          :value="value"
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
import type { Property } from "csstype";

// Componentes
import TTooltip from "./TTooltip.vue";
import GridColumn from "./GridColumn.vue";
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
  textTransform: {
    default: "capitalize",
    type: String as PropType<Property.TextTransform>,
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
    type: String as PropType<Property.Color | CustomColor>,
  },
});

// Composables

const slots = useSlots();

// Methods

function checkSlot(name = "default") {
  return !!slots[name];
}
</script>
