import type {App} from "vue";

import {ITexContainer} from "./typings/textContainer";
import {ICheckBox} from "./typings/checkBox";
import {IConfirmationDialog} from "./typings/confirmationDialog";
import {ICustomButton} from "./typings/customButton";
import {ICustomDatePicker} from "./typings/customDatePicker";
import {ICustomDialog} from "./typings/customDialog";
import {ICustomSelect} from "./typings/customSelect";
import {ICustomTextField} from "./typings/customTextField";
import {IDataTable} from "./typings/dataTable";
import {IDataTableItem} from "./typings/dataTableItem";
import {IFilterDatePicker} from "./typings/filterDatePicker";
import {IFilterSelect} from "./typings/filterSelect";
import {IFlexContainer} from "./typings/flexContainer";
import {IFontAwesomeIcon} from "./typings/fontAwesomeIcon";
import {IFormDatePicker} from "./typings/formDatePicker";
import {IFormSelect} from "./typings/formSelect";
import {IFormTextField} from "./typings/formTextField";
import {IGradientButton} from "./typings/gradientButton";
import {IGridColumn} from "./typings/gridColumn";
import {IGridContainer} from "./typings/gridContainer";
import {IGridRow} from "./typings/gridRow";
import {IHeaderTabs} from "./typings/headerTabs";
import {IIconButton} from "./typings/iconButton";
import {IImageContainer} from "./typings/imageContainer";
import {IInformationText} from "./typings/informationText";
import {IPageSwitch} from "./typings/pageSwitch";
import {IPanelTitle} from "./typings/panelTitle";
import {ISearchTextField} from "./typings/searchTextField";
import {ISuccessDialog} from "./typings/successDialog";
import {ISvgIcon} from "./typings/svgIcon";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextContainer: typeof ITexContainer;
    CheckBox: typeof ICheckBox;
    ConfirmationDialog: typeof IConfirmationDialog;
    CustomButton: typeof ICustomButton;
    CustomDatePicker: typeof ICustomDatePicker;
    CustomDialog: typeof ICustomDialog;
    CustomSelect: typeof ICustomSelect;
    CustomTextField: typeof ICustomTextField;
    DataTable: typeof IDataTable;
    DataTableItem: typeof IDataTableItem;
    FilterDatePicker: typeof IFilterDatePicker;
    FilterSelect: typeof IFilterSelect;
    FlexContainer: typeof IFlexContainer;
    FontAwesomeIcon: typeof IFontAwesomeIcon;
    FormDatePicker: typeof IFormDatePicker;
    FormSelect: typeof IFormSelect;
    FormTextField: typeof IFormTextField;
    GradientButton: typeof IGradientButton;
    GridColumn: typeof IGridColumn;
    GridContainer: typeof IGridContainer;
    GridRow: typeof IGridRow;
    HeaderTabs: typeof IHeaderTabs;
    IconButton: typeof IIconButton;
    ImageContainer: typeof IImageContainer;
    InformationText: typeof IInformationText;
    PageSwitch: typeof IPageSwitch;
    PanelTitle: typeof IPanelTitle;
    SearchTextField: typeof ISearchTextField;
    SuccessDialog: typeof ISuccessDialog;
    SvgIcon: typeof ISvgIcon;
  }
}
