<template>
  <div class="container">
    <div
      class="row"
    >
      <IconButton
        size="1rem"
        container-size="1rem"
        icon="fm-eye"
      >
        Tooltip super mega hyper largo
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconButton from "@/plugin/components/IconButton.vue";
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.row {
  height: 100%;
  display: grid;
  overflow: auto;
  align-content: flex-start;
  justify-content: flex-end;
}
</style>
