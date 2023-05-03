import type {App} from "vue";

import {ITexContainer} from "./textContainer";
import {ICheckBox} from "./checkBox";
import {IConfirmationDialog} from "./confirmationDialog";
import {ICustomButton} from "./customButton";
import {ICustomDatePicker} from "./customDatePicker";
import {ICustomDialog} from "./customDialog";
import {ICustomSelect} from "./customSelect";
import {ICustomTextField} from "./customTextField";
import {IDataTable} from "./dataTable";
import {IDataTableItem} from "./dataTableItem";
import {IFilterDatePicker} from "./filterDatePicker";
import {IFilterSelect} from "./filterSelect";
import {IFlexContainer} from "./flexContainer";
import {IFormDatePicker} from "./formDatePicker";
import {IFormSelect} from "./formSelect";
import {IFormTextField} from "./formTextField";
import {IGradientButton} from "./gradientButton";
import {IGridColumn} from "./gridColumn";
import {IGridContainer} from "./gridContainer";
import {IGridRow} from "./gridRow";
import {IHeaderTabs} from "./headerTabs";
import {IIconButton} from "./iconButton";
import {IImageContainer} from "./imageContainer";
import {IInformationText} from "./informationText";
import {IPageSwitch} from "./pageSwitch";
import {IPanelTitle} from "./panelTitle";
import {ISearchTextField} from "./searchTextField";
import {ISuccessDialog} from "./successDialog";
import {ISvgIcon} from "./svgIcon";
import {IColorPicker} from "./colorPicker";
import {IFormColorPicker} from "./formColorPicker";
import {ICustomMenu} from "./customMenu";
import {IFigmaIcon} from "./figmaIcon";
import {IExpansionPanel} from "./expansionPanel";
import {IAbsoluteContainer} from "./absoluteContainer";
import {IRelativeContainer} from "./relativeContainer";

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
    ColorPicker: typeof IColorPicker;
    FormColorPicker: typeof IFormColorPicker;
    CustomMenu: typeof ICustomMenu;
    FigmaIcon: typeof IFigmaIcon;
    ExpansionPanel: typeof IExpansionPanel;
    AbsoluteContainer: typeof IAbsoluteContainer;
    RelativeContainer: typeof IRelativeContainer;
  }
}
