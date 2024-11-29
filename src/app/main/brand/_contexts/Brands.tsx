"use client";

import { createContext, useContext } from "react";
import { useMyBrands } from "../_hooks/useMyBrands";

interface MyBrandsContextValue {
  brands: any[];
  isLoading: boolean;
  refreshBrands: () => void;
}

const MyBrandsContext = createContext<MyBrandsContextValue | undefined>(
  undefined,
);

export const MyBrandsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const myBrands = useMyBrands();

  return (
    <MyBrandsContext.Provider value={myBrands}>
      {children}
    </MyBrandsContext.Provider>
  );
};

export const useMyBrandsContext = () => {
  const context = useContext(MyBrandsContext);
  if (!context) {
    throw new Error(
      "useMyBrandsContext must be used within a MyBrandsProvider",
    );
  }
  return context;
};
