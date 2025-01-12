import React from 'react'
import { DataContext } from './context'

const ContextProvider = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    const data = {name :"Sir Hammad"}
  return (
    <DataContext.Provider value={data} >
        {children}
    </DataContext.Provider>
  )
}

export default ContextProvider