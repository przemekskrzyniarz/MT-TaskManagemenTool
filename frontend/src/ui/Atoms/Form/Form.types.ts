import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  onSubmit?: (event: any) => void;
}
