import type {App} from "vue";

import {CheckBox} from "./typings/checkBox";
import {TextContainer} from "./typings/textContainer";
import {ConfirmationDialog} from "./typings/confirmationDialog";
import {CustomButton} from "./typings/customButton";
import {CustomDatePicker} from "./typings/customDatePicker";
import {CustomDialog} from "./typings/customDialog";
import {CustomSelect} from "./typings/customSelect";
import {CustomTextField} from "./typings/customTextField";
import {DataTable} from "./typings/dataTable";
import {DataTableItem} from "./typings/dataTableItem";
import {FilterDatePicker} from "./typings/filterDatePicker";
import {FilterSelect} from "./typings/filterSelect";
import {FlexContainer} from "./typings/flexContainer";
import {FontAwesomeIcon} from "./typings/fontAwesomeIcon";
import {FormDatePicker} from "./typings/formDatePicker";
import {FormSelect} from "./typings/formSelect";
import {FormTextField} from "./typings/formTextField";
import {GradientButton} from "./typings/gradientButton";
import {GridColumn} from "./typings/gridColumn";
import {GridContainer} from "./typings/gridContainer";
import {GridRow} from "./typings/gridRow";
import {HeaderTabs} from "./typings/headerTabs";
import {IconButton} from "./typings/iconButton";
import {ImageContainer} from "./typings/imageContainer";
import {InformationText} from "./typings/informationText";
import {PageSwitch} from "./typings/pageSwitch";
import {PanelTitle} from "./typings/panelTitle";
import {SearchTextField} from "./typings/searchTextField";
import {SuccessDialog} from "./typings/successDialog";
import {SvgIcon} from "./typings/svgIcon";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CheckBox: typeof CheckBox;
    TextContainer: typeof TextContainer;
    ConfirmationDialog: typeof ConfirmationDialog;
    CustomButton: typeof CustomButton;
    CustomDatePicker: typeof CustomDatePicker;
    CustomDialog: typeof CustomDialog;
    CustomSelect: typeof CustomSelect;
    CustomTextField: typeof CustomTextField;
    DataTable: typeof DataTable;
    DataTableItem: typeof DataTableItem;
    FilterDatePicker: typeof FilterDatePicker;
    FilterSelect: typeof FilterSelect;
    FlexContainer: typeof FlexContainer;
    FontAwesomeIcon: typeof FontAwesomeIcon;
    FormDatePicker: typeof FormDatePicker;
    FormSelect: typeof FormSelect;
    FormTextField: typeof FormTextField;
    GradientButton: typeof GradientButton;
    GridColumn: typeof GridColumn;
    GridContainer: typeof GridContainer;
    GridRow: typeof GridRow;
    HeaderTabs: typeof HeaderTabs;
    IconButton: typeof IconButton;
    ImageContainer: typeof ImageContainer;
    InformationText: typeof InformationText;
    PageSwitch: typeof PageSwitch;
    PanelTitle: typeof PanelTitle;
    SearchTextField: typeof SearchTextField;
    SuccessDialog: typeof SuccessDialog;
    SvgIcon: typeof SvgIcon;
  }
}
