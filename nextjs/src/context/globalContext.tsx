import { createContext, useContext } from 'react'

interface GlobalContextInterface {}

const globalContext = createContext({} as GlobalContextInterface)

export const GlobalProvider = (props: { [key: string]: any }) => {
  const value = {}

  return <globalContext.Provider value={value} {...props} />
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
