<template>
  <div class="bg-red-950">
    <ImageInput v-model="file" />
    <ImageCropper
      v-if="file"
      ref="cropper"
      :file="file"
      :height="440"
      :width="880"
    />
    <CustomButton @click="crop"> Crop </CustomButton>
  </div>
</template>

<script setup lang="ts">
import ImageCropper from "@/components/ImageCropper.vue";
import ImageInput from "@/components/ImageInput.vue";
import { ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";

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
