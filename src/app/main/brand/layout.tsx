import { MyBrandsProvider } from "./_contexts/Brands";

interface LayoutBrandsProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutBrandsProps) => (
  <MyBrandsProvider>{children}</MyBrandsProvider>
);

export default layout;
