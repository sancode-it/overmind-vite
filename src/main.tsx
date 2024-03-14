import "./index.css"

import { App } from "./App"
import { Provider } from "overmind-react"
import React from "react"
import { config } from './overmind'
import { createOvermind } from 'overmind'
import { createRoot } from "react-dom/client"

const overmind = createOvermind(config, {
  devtools: true, // defaults to 'localhost:3031'
  strict: true,
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>
)
