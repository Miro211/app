import { useState } from 'react'
import './App.css'
import Section from './components/Section/Section/Section'
import Header from './components/Header/Header'
import { products } from './db/db'

function App() {

  return (
    <div>
      <Header/>
     <Section products = {products}/>
    </div>
  )
}

export default App