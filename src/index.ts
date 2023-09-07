// Tipos
import type { App } from "vue";

// Estilos
import "./assets/css/main.css";
import "./assets/fonts/metropolis/metropolis.css";

// Composables
import { useTooltips } from "@/composables/tooltip";

// Componentes
import CheckBox from "@/components/CheckBox.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomDatePicker from "@/components/CustomDatePicker.vue";
import CustomDialog from "@/components/CustomDialog.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import CustomTextField from "@/components/CustomTextField.vue";
import DataTable from "@/components/DataTable.vue";
import DataTableItem from "@/components/DataTableItem.vue";
import FilterDatePicker from "@/components/FilterDatePicker.vue";
import FilterSelect from "@/components/FilterSelect.vue";
import FlexContainer from "@/components/FlexContainer.vue";
import FormDatePicker from "@/components/FormDatePicker.vue";
import FormSelect from "@/components/FormSelect.vue";
import FormTextField from "@/components/FormTextField.vue";
import GridColumn from "@/components/GridColumn.vue";
import GridRow from "@/components/GridRow.vue";
import HeaderTabs from "@/components/HeaderTabs.vue";
import IconButton from "@/components/IconButton.vue";
import ImageContainer from "@/components/ImageContainer.vue";
import InformationText from "@/components/InformationText.vue";
import PageSwitch from "@/components/PageSwitch.vue";
import PanelTitle from "@/components/PanelTitle.vue";
import SearchTextField from "@/components/SearchTextField.vue";
import SuccessDialog from "@/components/SuccessDialog.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import TextContainer from "@/components/TextContainer.vue";
import FormColorPicker from "@/components/FormColorPicker.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import CustomMenu from "@/components/CustomMenu.vue";
import FigmaIcon from "@/components/FigmaIcon.vue";
import ExpansionPanel from "@/components/ExpansionPanel.vue";
import GridContainer from "@/components/GridContainer.vue";
import AbsoluteContainer from "@/components/AbsoluteContainer.vue";
import RelativeContainer from "@/components/RelativeContainer.vue";
import CustomTooltip from "@/components/CustomTooltip.vue";
import ExpandableDataTableItem from "@/components/ExpandableDataTableItem.vue";
import ImageInput from "@/components/ImageInput.vue";
import CustomChip from "@/components/CustomChip.vue";
import InputRange from "@/components/InputRange.vue";
import ImageCropper from "@/components/ImageCropper.vue";
import TPagination from "@/components/TPagination.vue";
import TTextarea from "@/components/TTextarea.vue";
import TFormTextarea from "@/components/TFormTextarea.vue";
import TForm from "@/components/TForm.vue";
import TMenu from "@/components/TMenu.vue";

export const componentesReutility = (app: App) => {
  const tooltips = useTooltips();
  tooltips.generateOverlayContainer();

  app.component("AbsoluteContainer", AbsoluteContainer);
  app.component("RelativeContainer", RelativeContainer);
  app.component("CheckBox", CheckBox);
  app.component("ConfirmationDialog", ConfirmationDialog);
  app.component("CustomButton", CustomButton);
  app.component("CustomDatePicker", CustomDatePicker);
  app.component("CustomDialog", CustomDialog);
  app.component("CustomSelect", CustomSelect);
  app.component("CustomTextField", CustomTextField);
  app.component("DataTable", DataTable);
  app.component("DataTableItem", DataTableItem);
  app.component("FilterDatePicker", FilterDatePicker);
  app.component("FilterSelect", FilterSelect);
  app.component("FlexContainer", FlexContainer);
  app.component("FormDatePicker", FormDatePicker);
  app.component("FormSelect", FormSelect);
  app.component("FormTextField", FormTextField);
  app.component("GridColumn", GridColumn);
  app.component("GridRow", GridRow);
  app.component("HeaderTabs", HeaderTabs);
  app.component("IconButton", IconButton);
  app.component("ImageContainer", ImageContainer);
  app.component("InformationText", InformationText);
  app.component("PageSwitch", PageSwitch);
  app.component("PanelTitle", PanelTitle);
  app.component("SearchTextField", SearchTextField);
  app.component("SuccessDialog", SuccessDialog);
  app.component("SvgIcon", SvgIcon);
  app.component("TextContainer", TextContainer);
  app.component("FormColorPicker", FormColorPicker);
  app.component("ColorPicker", ColorPicker);
  app.component("CustomMenu", CustomMenu);
  app.component("FigmaIcon", FigmaIcon);
  app.component("ExpansionPanel", ExpansionPanel);
  app.component("GridContainer", GridContainer);
  app.component("CustomTooltip", CustomTooltip);
  app.component("ExpandableDataTableItem", ExpandableDataTableItem);
  app.component("ImageInput", ImageInput);
  app.component("CustomChip", CustomChip);
  app.component("InputRange", InputRange);
  app.component("ImageCropper", ImageCropper);
  app.component("TPagination", TPagination);
  app.component("TTextarea", TTextarea);
  app.component("TFormTextarea", TFormTextarea);
  app.component("TForm", TForm);
  app.component("TMenu", TMenu);
};
