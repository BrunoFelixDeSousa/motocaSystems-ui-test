import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
=======

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> 9a4d415fd68233259f879f91e12de5dbd43a8871
)
