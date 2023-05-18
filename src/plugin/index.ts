// Tipos
import type { App } from "vue";

// Estilos
import "./assets/css/main.css";
import "./assets/icomoon/icomoon.css";
import "./assets/fonts/metropolis/metropolis.css";

// Composables
import { useTooltips } from "@/plugin/composables/tooltip";

// Componentes
import CheckBox from "@/plugin/components/CheckBox.vue";
import ConfirmationDialog from "@/plugin/components/ConfirmationDialog.vue";
import CustomButton from "@/plugin/components/CustomButton.vue";
import CustomDatePicker from "@/plugin/components/CustomDatePicker.vue";
import CustomDialog from "@/plugin/components/CustomDialog.vue";
import CustomSelect from "@/plugin/components/CustomSelect.vue";
import CustomTextField from "@/plugin/components/CustomTextField.vue";
import DataTable from "@/plugin/components/DataTable.vue";
import DataTableItem from "@/plugin/components/DataTableItem.vue";
import FilterDatePicker from "@/plugin/components/FilterDatePicker.vue";
import FilterSelect from "@/plugin/components/FilterSelect.vue";
import FlexContainer from "@/plugin/components/FlexContainer.vue";
import FormDatePicker from "@/plugin/components/FormDatePicker.vue";
import FormSelect from "@/plugin/components/FormSelect.vue";
import FormTextField from "@/plugin/components/FormTextField.vue";
import GridColumn from "@/plugin/components/GridColumn.vue";
import GridRow from "@/plugin/components/GridRow.vue";
import HeaderTabs from "@/plugin/components/HeaderTabs.vue";
import IconButton from "@/plugin/components/IconButton.vue";
import ImageContainer from "@/plugin/components/ImageContainer.vue";
import InformationText from "@/plugin/components/InformationText.vue";
import PageSwitch from "@/plugin/components/PageSwitch.vue";
import PanelTitle from "@/plugin/components/PanelTitle.vue";
import SearchTextField from "@/plugin/components/SearchTextField.vue";
import SuccessDialog from "@/plugin/components/SuccessDialog.vue";
import SvgIcon from "@/plugin/components/SvgIcon.vue";
import TextContainer from "@/plugin/components/TextContainer.vue";
import FormColorPicker from "@/plugin/components/FormColorPicker.vue";
import ColorPicker from "@/plugin/components/ColorPicker.vue";
import CustomMenu from "@/plugin/components/CustomMenu.vue";
import FigmaIcon from "@/plugin/components/FigmaIcon.vue";
import ExpansionPanel from "@/plugin/components/ExpansionPanel.vue";
import GridContainer from "@/plugin/components/GridContainer.vue";
import AbsoluteContainer from "@/plugin/components/AbsoluteContainer.vue";
import RelativeContainer from "@/plugin/components/RelativeContainer.vue";
import CustomTooltip from "@/plugin/components/CustomTooltip.vue";
import ExpandableDataTableItem from "@/plugin/components/ExpandableDataTableItem.vue";

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
};
