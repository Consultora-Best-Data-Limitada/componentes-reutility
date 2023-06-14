import type { App } from "vue";

import { AbsoluteContainer } from "./absoluteContainer";
import { CheckBox } from "./checkBox";
import { ColorPicker } from "./colorPicker";
import { ConfirmationDialog } from "./confirmationDialog";
import { CustomButton } from "./customButton";
import { CustomDatePicker } from "./customDatePicker";
import { CustomDialog } from "./customDialog";
import { CustomMenu } from "./customMenu";
import { CustomSelect } from "./customSelect";
import { CustomTextField } from "./customTextField";
import { CustomTooltip } from "./customTooltip";
import { DataTable } from "./dataTable";
import { DataTableItem } from "./dataTableItem";
import { ExpandableDataTableItem } from "./expandableDataTableItem";
import { ExpansionPanel } from "./expansionPanel";
import { FigmaIcon } from "./figmaIcon";
import { FilterDatePicker } from "./filterDatePicker";
import { FilterSelect } from "./filterSelect";
import { FlexContainer } from "./flexContainer";
import { FormColorPicker } from "./formColorPicker";
import { FormDatePicker } from "./formDatePicker";
import { FormSelect } from "./formSelect";
import { FormTextField } from "./formTextField";
import { GridColumn } from "./gridColumn";
import { GridContainer } from "./gridContainer";
import { GridRow } from "./gridRow";
import { HeaderTabs } from "./headerTabs";
import { IconButton } from "./iconButton";
import { ImageContainer } from "./imageContainer";
import { ImageInput } from "./imageInput";
import { InformationText } from "./informationText";
import { PageSwitch } from "./pageSwitch";
import { PanelTitle } from "./panelTitle";
import { RelativeContainer } from "./relativeContainer";
import { SearchTextField } from "./searchTextField";
import { SuccessDialog } from "./successDialog";
import { SvgIcon } from "./svgIcon";
import { TextContainer } from "./textContainer";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AbsoluteContainer: AbsoluteContainer;
    CheckBox: CheckBox;
    ColorPicker: ColorPicker;
    ConfirmationDialog: ConfirmationDialog;
    CustomButton: CustomButton;
    CustomDatePicker: CustomDatePicker;
    CustomDialog: CustomDialog;
    CustomMenu: CustomMenu;
    CustomSelect: CustomSelect;
    CustomTextField: CustomTextField;
    CustomTooltip: CustomTooltip;
    DataTable: DataTable;
    DataTableItem: DataTableItem;
    ExpandableDataTableItem: ExpandableDataTableItem;
    ExpansionPanel: ExpansionPanel;
    FigmaIcon: FigmaIcon;
    FilterDatePicker: FilterDatePicker;
    FilterSelect: FilterSelect;
    FlexContainer: FlexContainer;
    FormColorPicker: FormColorPicker;
    FormDatePicker: FormDatePicker;
    FormSelect: FormSelect;
    FormTextField: FormTextField;
    GridColumn: GridColumn;
    GridContainer: GridContainer;
    GridRow: GridRow;
    HeaderTabs: HeaderTabs;
    IconButton: IconButton;
    ImageContainer: ImageContainer;
    ImageInput: ImageInput;
    InformationText: InformationText;
    PageSwitch: PageSwitch;
    PanelTitle: PanelTitle;
    RelativeContainer: RelativeContainer;
    SearchTextField: SearchTextField;
    SuccessDialog: SuccessDialog;
    SvgIcon: SvgIcon;
    TextContainer: TextContainer;
  }
}
