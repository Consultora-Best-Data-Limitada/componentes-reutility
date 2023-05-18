import { ref } from "vue";

const overlayContainer = ref<HTMLDivElement | null>(null);

function generateOverlayContainer() {
  const div = document.createElement("div");
  div.classList.add("custom-tooltip--overlay");
  document.body.appendChild(div);
  overlayContainer.value = div;
}

export function useTooltips() {
  return {
    overlayContainer,
    generateOverlayContainer,
  };
}
