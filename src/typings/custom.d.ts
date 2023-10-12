interface ISuccessDialog {
  icon: string;
  text: string;
  model: boolean;
  subtitle?: string;
  duration?: number;
}

interface IConfirmationDialog {
  title: string;
  model: boolean;
  subtitle?: string;
  no?: () => void | null;
  yes: () => void | null;
}

interface DatePickerMonthValue {
  year: number;
  month: number;
}

declare interface HTMLElement {
  showPopover(): void;
  hidePopover(): void;
}
