import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './Greeting.jsx'
import NewComponent from './NewComponent.jsx'
import AnimalList from './AnimalList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
    <NewComponent />
    <App />
  </StrictMode>,
)