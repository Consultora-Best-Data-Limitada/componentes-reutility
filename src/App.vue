<template>
  <div class="bg-red-950">
    <ExpansionPanel>
      <template #activator>
        <TextContainer>Muy buenos días</TextContainer>
      </template>
      <GridColumn row-gap="0.5rem">
        <TextContainer>Muy buenos días</TextContainer>
        <TextContainer>Muy buenos días</TextContainer>
        <TextContainer>Muy buenos días</TextContainer>
        <TextContainer>Muy buenos días</TextContainer>
        <TextContainer>Muy buenos días</TextContainer>
      </GridColumn>
    </ExpansionPanel>
  </div>
</template>

<script setup lang="ts">
import ImageCropper from "@/components/ImageCropper.vue";
import ImageInput from "@/components/ImageInput.vue";
import { ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import ExpansionPanel from "@/components/ExpansionPanel.vue";
import TextContainer from "@/components/TextContainer.vue";
import GridColumn from "@/components/GridColumn.vue";

const file = ref<File | null>(null);
const cropper = ref<{ crop: () => Promise<Blob> } | null>(null);

async function crop() {
  if (!cropper.value) return;
  const blob = await cropper.value.crop();
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}
</script>
