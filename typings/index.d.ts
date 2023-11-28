import type { App } from "vue";

import type { AbsoluteContainer } from "./absoluteContainer";
import type { CheckBox } from "./checkBox";
import type { ColorPicker } from "./colorPicker";
import type { ConfirmationDialog } from "./confirmationDialog";
import type { CustomButton } from "./customButton";
import type { CustomDatePicker } from "./customDatePicker";
import type { CustomDialog } from "./customDialog";
import type { CustomMenu } from "./customMenu";
import type { CustomSelect } from "./customSelect";
import type { CustomTextField } from "./customTextField";
import type { CustomTooltip } from "./customTooltip";
import type { DataTable } from "./dataTable";
import type { DataTableItem } from "./dataTableItem";
import type { ExpandableDataTableItem } from "./expandableDataTableItem";
import type { ExpansionPanel } from "./expansionPanel";
import type { FigmaIcon } from "./figmaIcon";
import type { FilterDatePicker } from "./filterDatePicker";
import type { FilterSelect } from "./filterSelect";
import type { FlexContainer } from "./flexContainer";
import type { FormColorPicker } from "./formColorPicker";
import type { FormDatePicker } from "./formDatePicker";
import type { FormSelect } from "./formSelect";
import type { FormTextField } from "./formTextField";
import type { GridColumn } from "./gridColumn";
import type { GridContainer } from "./gridContainer";
import type { GridRow } from "./gridRow";
import type { HeaderTabs } from "./headerTabs";
import type { IconButton } from "./iconButton";
import type { ImageContainer } from "./imageContainer";
import type { ImageInput } from "./imageInput";
import type { InformationText } from "./informationText";
import type { PageSwitch } from "./pageSwitch";
import type { PanelTitle } from "./panelTitle";
import type { RelativeContainer } from "./relativeContainer";
import type { SearchTextField } from "./searchTextField";
import type { SuccessDialog } from "./successDialog";
import type { SvgIcon } from "./svgIcon";
import type { TextContainer } from "./textContainer";
import type { CustomChip } from "./customChip";
import type { InputRange } from "./inputRange";
import type { ImageCropper } from "./imageCropper";
import type { TPagination } from "./tPagination";
import type { TTextarea } from "./tTextarea";
import type { TFormTextarea } from "./tFormTextarea";
import type { TForm } from "./tForm";
import type { TMenu } from "./tMenu";
import type { TTooltip } from "./tTooltip";
import type { TDialog } from "./tDialog";
import type { TMessageDialog } from "./tMessageDialog";
import type { TConfirmationDialog } from "./tConfirmationDialog";
import type { TButton } from "./TButton";

export declare interface ComponentesReutility {
  install(app: App): void;
}

export declare function componentesReutility(): ComponentesReutility;

export type ImageCropperRef = {
  crop: () => Promise<Blob>;
};

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
    CustomChip: CustomChip;
    InputRange: InputRange;
    ImageCropper: ImageCropper;
    TPagination: TPagination;
    TTextarea: TTextarea;
    TFormTextarea: TFormTextarea;
    TForm: TForm;
    TMenu: TMenu;
    TTooltip: TTooltip;
    TDialog: TDialog;
    TMessageDialog: TMessageDialog;
    TConfirmationDialog: TConfirmationDialog;
    TButton: TButton;
  }
}
