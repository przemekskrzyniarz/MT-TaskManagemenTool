import React from 'react'
import {VALIDATION_MESSAGES} from './validationMessages'

export const passwordValidate = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  if (event.target.value.length < 7) {
    event.target.setCustomValidity(VALIDATION_MESSAGES.passwordLength)
  } else {
    event.target.setCustomValidity('')
  }
}
