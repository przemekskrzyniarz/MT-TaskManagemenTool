import * as React from 'react'

import {SCROLL_DIRECTION, useScroll} from '../../hooks'
import {isClient} from '../../ui/helpers'

import {PageHeader} from '../../ui/Organisms'

const maxScrolledPosition = () => {
  let result = 0

  if (isClient) {
    if (
      window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
    ) {
      result = 160
    } else if (
      window.matchMedia('(min-width: 1024px) and (max-width: 1199px)').matches
    ) {
      result = 300
    } else if (window.matchMedia('(min-width: 1200px)').matches) {
      result = 200
    } else {
      result = 200
    }
  }

  return result
}

const Layout: React.FunctionComponent = () => {
  const {scrollFromTop, scrollDirection} = useScroll()

  return (
    <PageHeader
      hidden={
        isClient &&
        scrollDirection === SCROLL_DIRECTION.BOTTOM &&
        scrollFromTop >= maxScrolledPosition()
      }
      scrolled={scrollFromTop > maxScrolledPosition()}
    />
  )
}

export {Layout}
