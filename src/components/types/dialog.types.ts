export interface DialogProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  classNames?: {
    main?: string;
    content?: string;
    title?: string;
    subtitle?: string;
    overlayer?: string;
    header?: string;
  };
}

export interface createDialogFormProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleted: () => void;
}

export interface EditDialogFormProps<T> {
  data: T;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}
