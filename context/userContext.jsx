import * as React from 'react'

export const userContext = React.createContext({
  user: undefined,
  initialising: false
})
