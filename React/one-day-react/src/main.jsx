import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameList from './NewComponent.jsx'
import Job from './Job.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Job title="developer" location="sirutar"></Job>
  </StrictMode>,
)
