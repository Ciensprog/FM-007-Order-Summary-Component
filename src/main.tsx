import '@/index.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { IconPatternBG } from '@/assets/icons/pattern-bg'

import { App } from '@/App'

/*
|-------------------------------------------------------------------------------
| Main
|-------------------------------------------------------------------------------
*/

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <div className="absolute h-full left-0 top-0 w-full">
      <IconPatternBG />
    </div>
    <App />
  </StrictMode>
)
