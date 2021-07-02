import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  invert?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
