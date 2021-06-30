import * as React from 'react'

import {BaseProps as Props} from './Input.types'

const Input: React.FunctionComponent<Props> = ({
  children,
  type,
  className,
  text,
  value,
  onChange,
}) => (
  <input
    type={type}
    className={['Input', className].join(' ')}
    placeholder={text}
    id={text}
    onChange={onChange}
    value={value}
    required
  >
    {children}
  </input>
)

export {Input}
