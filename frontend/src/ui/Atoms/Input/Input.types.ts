import {ReactNode} from 'react'

export interface BaseProps {
  children?: ReactNode | undefined
  invert?: boolean | undefined
  className?: string | undefined
  text?: string | undefined
  type?: string | undefined
  value?: string | number | readonly string[] | undefined
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
