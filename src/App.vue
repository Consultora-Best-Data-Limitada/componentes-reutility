<template>
  <div class="container">
    <div
      class="row"
    >
      <DataTable
        :headers="headers"
        :items="items"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "@/plugin/components/DataTable.vue";

const headers: DataTableHeader[] = [
  {
    text: "id",
    value: "id",
  },
];

const items = [...Array(30).keys()].map((index) => {
  return {
    id: index,
  };
});
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
}
</style>
