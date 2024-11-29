import React from "react";
import { MyBrandsProvider } from "./_contexts/Brands";

interface LayoutBrandsProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutBrandsProps) => {
  return <MyBrandsProvider>{children}</MyBrandsProvider>;
};

export default layout;
