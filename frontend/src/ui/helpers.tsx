/* eslint-disable react/display-name */

export const isClient = typeof window !== 'undefined'

export const canSmoothScroll =
  isClient && 'scrollBehavior' in document.documentElement.style
