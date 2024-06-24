import { useEffect, useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { ProductContext, initialState, reducer } from './components/context'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className='row'>
      <ProductContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <Basket />
      </ProductContext.Provider>
      </div>
    </>
  )
}

export default App
