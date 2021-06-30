import * as React from 'react'

import {BaseProps as Props} from './Label.types'

const Label: React.FunctionComponent<Props> = ({text, className}) => (
  <label htmlFor={text} className={['Label', className].join(' ')}>
    {text}
  </label>
)

export {Label}
