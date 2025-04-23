import { useState } from 'react'
// import Logo from './components/Header/Logo/Logo'
// import Nav from'./components/Header/Nav/Nav'
// import {nav} from './db/db'
import './App.css'
import Header from './components/Header/Header'

import './App.css'
import Section from './components/Section/Section/Section'
import { products } from './db/db'

function App() {

  return (
    <>
     <Header/>
     <Section products = {products}/>
    </>
  )
}

export default App