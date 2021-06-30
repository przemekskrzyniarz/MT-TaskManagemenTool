import * as React from 'react'

import {BaseProps as Props} from './Button.types'

const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  disabled = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={['Button', className].join(' ')}
  >
    {children}
  </button>
)

export {Button}
