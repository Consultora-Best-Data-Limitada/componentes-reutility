<template>
  <div :class="containerClass">
    <div class="panel-title__text">
      <slot />
    </div>
    <div
      v-if="closable"
      class="panel-title__close"
      @click="onClickClose"
    >
      <FontAwesomeIcon
        size="1.5rem"
        color="error"
        name="fas-xmark-circle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";

// Componentes
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  closable: {
    type: Boolean,
  },
});

const emits = defineEmits(["click:close"]);

// Computed

const containerClass = computed(() => ({
  "panel-title__container": true,
  "panel-title__container--close": props.closable,
}));

// Emits

const onClickClose = () => {
  emits("click:close");
};
</script>

<style scoped lang="scss">
.panel-title__container {
  font-weight: 700;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-family: "Metropolis", sans-serif;
  color: rgb(var(--acento-principal));

  &--close {
    display: grid;
    align-items: center;
    grid-template-columns: 1.5rem 1fr 1.5rem;

    & .panel-title__text {
      grid-column: 2;
    }
  }
}

.panel-title__close {
  cursor: pointer;

  &:hover :deep(*) {
    color: rgb(var(--error-hover));
  }

  &:active :deep(*) {
    color: rgb(var(--error-pressed));
  }
}
</style>
