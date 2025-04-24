import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { products } from './db/db.js'
import { nav } from './db/db.js'

createRoot(document.getElementById('root')).render(
  
    <App products = {products}/>
  
)
