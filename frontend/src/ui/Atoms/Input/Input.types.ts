import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  invert?: boolean;
  className?: string;
  text?: string;
  type?: string;
  value?: string;
  onChange?: (event: any) => void;
}
