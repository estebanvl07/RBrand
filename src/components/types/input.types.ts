import { DragEvent, InputHTMLAttributes, LabelHTMLAttributes } from "react";

type DragAndDropEvents = "onDragOver" | "onDragLeave" | "onDrop";

type LabelHtmlProps = LabelHTMLAttributes<HTMLLabelElement>;

type LabelProps = Required<
  Pick<LabelHtmlProps, DragAndDropEvents> & {
    onClickInZone: LabelHtmlProps["onClick"];
  }
>;

export interface InputFileProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, DragAndDropEvents>,
    LabelProps {
  contentClass?: string;
  labelClass?: string;
}
