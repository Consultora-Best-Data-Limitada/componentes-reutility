// Vue
import { ref } from "vue";

// Data

const tooltipWrapper = ref<HTMLDivElement | null>(null);
const overlayContainer = ref<HTMLDivElement | null>(null);
const supportsPopover = typeof document.documentElement.showPopover === "function";

// Methods

function generateOverlayContainer() {
  const div = document.createElement("div");
  div.classList.add("custom-tooltip--overlay");
  document.body.appendChild(div);
  overlayContainer.value = div;
  if (!supportsPopover) {
    const divTooltipWrapper = document.createElement("div");
    divTooltipWrapper.setAttribute("id", "tooltipWrapper");
    document.body.appendChild(divTooltipWrapper);
    tooltipWrapper.value = divTooltipWrapper;
  }
}

export function useTooltips() {
  return {
    // Data
    tooltipWrapper,
    supportsPopover,
    overlayContainer,
    // Methods
    generateOverlayContainer,
  };
}
