import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './context'
const rootElement = document.getElementById('root')

if (rootElement != null) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </React.StrictMode>
  )
}
