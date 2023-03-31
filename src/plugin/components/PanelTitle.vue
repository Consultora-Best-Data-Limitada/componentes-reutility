<template>
  <div :class="containerClass">
    <div class="panel-title__text">
      <slot/>
    </div>
    <div
      v-if="closable"
      class="panel-title__close"
      @click="onClickClose"
    >
      <FontAwesomeIcon
        color="error"
        :size="iconSize"
        name="fas-xmark-circle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {computed} from "vue";

// Componentes
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

// Definiciones

const props = defineProps({
  closable: {
    type: Boolean,
  },
  dialog: {
    type: Boolean,
  },
});

const emits = defineEmits(["click:close"]);

// Computed

const containerClass = computed(() => ({
  "panel-title__container": true,
  "panel-title__container--dialog": props.dialog,
  "panel-title__container--close": props.closable,
}));

const iconSize = computed(() => props.dialog ? "2.75rem" : "1.5rem");

// Emits

const onClickClose = () => {
  emits("click:close");
};
</script>

<style scoped lang="scss">
.panel-title__container {

  .panel-title__text {
    font-weight: 700;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-family: "Metropolis", sans-serif;
    color: rgb(var(--acento-principal));
  }

  &--dialog .panel-title__text {
    font-weight: 800;
    font-size: 2.375rem;
    line-height: 2.375rem;
    color: rgb(var(--neutro-1));
  }

  &--close {
    display: grid;
    align-items: center;
    grid-template-columns: 1.5rem 1fr 1.5rem;

    &.panel-title__container--dialog {
      grid-template-columns: 2.75rem 1fr 2.75rem;
    }

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
