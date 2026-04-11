import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Front  from './front.jsx'
import Ui from './Ui.jsx'
import Frontui from './Frontui.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Frontui/>
  </StrictMode>,
)
