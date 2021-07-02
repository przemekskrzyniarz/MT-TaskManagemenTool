import * as React from 'react'

export function useDidMount() {
  const [didMount, setDidMount] = React.useState(false)

  React.useEffect(() => {
    setDidMount(true)
  }, [])

  return didMount
}
