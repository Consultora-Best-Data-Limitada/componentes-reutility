<template>
  <div style="height: 50vh">
    <DataTable
      height="100%"
      :items="items"
      :headers="headers"
      background-color="#fff"
    />
  </div>
  <button @click="agregar">Agregar</button>
  <button @click="eliminar">Eliminar</button>
  <button @click="abrir">Abrir</button>
  <CustomDialog v-model="dialogo" margin="0.5rem">
    <GridColumn
      width="calc(100vw - 1rem)"
      height="calc(100vh - 1rem)"
      background-color="neutro-1"
      box-shadow="3px 3px 17px 0px rgba(151, 168, 194, 0.24)"
      border-radius="1rem"
    >

    </GridColumn>
  </CustomDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DataTable from "@/components/DataTable.vue";
import CustomDialog from "@/components/CustomDialog.vue";
import GridColumn from "@/components/GridColumn.vue";

const dialogo = ref(false);
const items = ref([{ id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }, { id: 1, a: "a" }]);

function agregar() {
  items.value = [...items.value, { id: items.value.length + 1, a: "a" }];
}

function eliminar() {
  const copia = [...items.value];
  copia.splice(items.value.length - 1, 1);
  items.value = copia;
}

function abrir() {
  dialogo.value = true;
}

/*const items = [...Array(60).keys()].map((i) => {
  if (i > 20) {
    return {
      id: i,
      a: `AAAAA - ${i}`,
      b: `BBBBB - ${i}`,
      c: `CCCCC - ${i}`,
      // d: `DDDDD - ${i}`,
      // e: `EEEEE - ${i}`,
      // f: `FFFFF - ${i}`,
      // g: `GGGGG - ${i}`,
      // h: `HHHHH - ${i}`,
      // i: `IIIII - ${i}`,
      // j: `JJJJJ - ${i}`,
      // k: `KKKKK - ${i}`,
      // l: `LLLLL - ${i}`,
      // m: `MMMMM - ${i}`,
      // n: `NNNNN - ${i}`,
      // o: `OOOOO - ${i}`,
      // p: `PPPPP - ${i}`,
      // q: `QQQQQ - ${i}`,
      // r: `RRRRR - ${i}`,
      // s: `SSSSS - ${i}`,
      // t: `TTTTT - ${i}`,
      // u: `UUUUU - ${i}`,
      // v: `VVVVV - ${i}`,
      // w: `WWWWW - ${i}`,
      // x: `XXXXX - ${i}`,
      // y: `YYYYY - ${i}`,
      // z: `ZZZZZ - ${i}`,
    };
  } else {
    return {
      id: i,
      a: `AAAAA AAAAA AAAAA AAAAA - ${i}`,
      b: `BBBBB BBBBB BBBBB BBBBB - ${i}`,
      c: `CCCCC CCCCC CCCCC CCCCC - ${i}`,
      // d: `DDDDD DDDDD DDDDD DDDDD - ${i}`,
      // e: `EEEEE EEEEE EEEEE EEEEE - ${i}`,
      // f: `FFFFF FFFFF FFFFF FFFFF - ${i}`,
      // g: `GGGGG GGGGG GGGGG GGGGG - ${i}`,
      // h: `HHHHH HHHHH HHHHH HHHHH - ${i}`,
      // i: `IIIII IIIII IIIII IIIII - ${i}`,
      // j: `JJJJJ JJJJJ JJJJJ JJJJJ - ${i}`,
      // k: `KKKKK KKKKK KKKKK KKKKK - ${i}`,
      // l: `LLLLL LLLLL LLLLL LLLLL - ${i}`,
      // m: `MMMMM MMMMM MMMMM MMMMM - ${i}`,
      // n: `NNNNN NNNNN NNNNN NNNNN - ${i}`,
      // o: `OOOOO OOOOO OOOOO OOOOO - ${i}`,
      // p: `PPPPP PPPPP PPPPP PPPPP - ${i}`,
      // q: `QQQQQ QQQQQ QQQQQ QQQQQ - ${i}`,
      // r: `RRRRR RRRRR RRRRR RRRRR - ${i}`,
      // s: `SSSSS SSSSS SSSSS SSSSS - ${i}`,
      // t: `TTTTT TTTTT TTTTT TTTTT - ${i}`,
      // u: `UUUUU UUUUU UUUUU UUUUU - ${i}`,
      // v: `VVVVV VVVVV VVVVV VVVVV - ${i}`,
      // w: `WWWWW WWWWW WWWWW WWWWW - ${i}`,
      // x: `XXXXX XXXXX XXXXX XXXXX - ${i}`,
      // y: `YYYYY YYYYY YYYYY YYYYY - ${i}`,
      // z: `ZZZZZ ZZZZZ ZZZZZ ZZZZZ - ${i}`,
    };
  }
});*/

const headers = [
  { value: "a", text: "A" },
  { value: "b", text: "B" },
  { value: "c", text: "C" },
  // { value: "d", text: "D" },
  // { value: "e", text: "E" },
  // { value: "f", text: "F" },
  // { value: "g", text: "G" },
  // { value: "h", text: "H" },
  // { value: "i", text: "I" },
  // { value: "j", text: "J" },
  // { value: "k", text: "K" },
  // { value: "l", text: "L" },
  // { value: "m", text: "M" },
  // { value: "n", text: "N" },
  // { value: "o", text: "O" },
  // { value: "p", text: "P" },
  // { value: "q", text: "Q" },
  // { value: "r", text: "R" },
  // { value: "s", text: "S" },
  // { value: "t", text: "T" },
  // { value: "u", text: "U" },
  // { value: "v", text: "V" },
  // { value: "w", text: "W" },
  // { value: "x", text: "X" },
  // { value: "y", text: "Y" },
  // { value: "z", text: "Z" },
];
</script>
