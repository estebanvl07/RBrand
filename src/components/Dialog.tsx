"use client";

import CustomDrawer from "./CustomDrawer";
import Sheet from "./Sheet";

import { useResize } from "~/hooks/useResize";
import type { DialogProps } from "~/components/types/dialog.types";

const Dialog = (props: DialogProps) => {
  const { isMobile } = useResize();
  return isMobile ? <CustomDrawer {...props} /> : <Sheet {...props} />;
};

export default Dialog;
