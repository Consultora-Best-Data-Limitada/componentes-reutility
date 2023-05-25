<template>
  <div>
    <CustomTextField placeholder="asd" v-model="a"/>
  </div>
</template>

<script setup lang="ts">
import DataTable from "@/plugin/components/DataTable.vue";
import IconButton from "@/plugin/components/IconButton.vue";
import {computed, ref} from "vue";
import GridColumn from "@/plugin/components/GridColumn.vue";
import TextContainer from "@/plugin/components/TextContainer.vue";
import {useTooltips} from "@/plugin/composables/tooltip";
import CustomTextField from "@/plugin/components/CustomTextField.vue";

const {generateOverlayContainer} = useTooltips();

generateOverlayContainer();

const b = ref("");

const a = computed({
  get() {
    return b.value;
  },
  set(value: string) {
    console.log(value);
    b.value = value;
  },
});

setTimeout(() => {
  b.value = "100"
}, 500)

const v = ref<number | null>(null);

const items = [...Array(60).keys()].map((i) => {
  return {
    id: i,
    a: `AAAAA - ${i}`,
    b: `BBBBB - ${i}`,
    c: `CCCCC - ${i}`,
    d: `DDDDD - ${i}`,
    e: `EEEEE - ${i}`,
    f: `FFFFF - ${i}`,
    g: `GGGGG - ${i}`,
    h: `HHHHH - ${i}`,
    i: `IIIII - ${i}`,
    j: `JJJJJ - ${i}`,
    k: `KKKKK - ${i}`,
    l: `LLLLL - ${i}`,
    m: `MMMMM - ${i}`,
    n: `NNNNN - ${i}`,
    o: `OOOOO - ${i}`,
    p: `PPPPP - ${i}`,
    q: `QQQQQ - ${i}`,
    r: `RRRRR - ${i}`,
    s: `SSSSS - ${i}`,
    t: `TTTTT - ${i}`,
    u: `UUUUU - ${i}`,
    v: `VVVVV - ${i}`,
    w: `WWWWW - ${i}`,
    x: `XXXXX - ${i}`,
    y: `YYYYY - ${i}`,
    z: `ZZZZZ - ${i}`,
  };
});

const headers = [
  {value: "a", text: "A"},
  {value: "b", text: "B"},
  {value: "c", text: "C"},
  {value: "d", text: "D"},
  {value: "e", text: "E"},
  {value: "f", text: "F"},
  {value: "g", text: "G"},
  {value: "h", text: "H"},
  {value: "i", text: "I"},
  {value: "j", text: "J"},
  {value: "k", text: "K"},
  {value: "l", text: "L"},
  {value: "m", text: "M"},
  {value: "n", text: "N"},
  {value: "o", text: "O"},
  {value: "p", text: "P"},
  {value: "q", text: "Q"},
  {value: "r", text: "R"},
  {value: "s", text: "S"},
  {value: "t", text: "T"},
  {value: "u", text: "U"},
  {value: "v", text: "V"},
  {value: "w", text: "W"},
  {value: "x", text: "X"},
  {value: "y", text: "Y"},
  {value: "z", text: "Z"},
];

function seleccionarFila(item: (typeof items)[0]) {
  v.value = item.id;
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  height: 100%;
  display: grid;
  overflow: auto;
}
</style>
