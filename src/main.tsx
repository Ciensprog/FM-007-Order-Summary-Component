import '@/index.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/App'

/*
|-------------------------------------------------------------------------------
| Main
|-------------------------------------------------------------------------------
*/

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
