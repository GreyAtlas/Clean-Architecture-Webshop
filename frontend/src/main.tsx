import { StrictMode } from 'react'
import { SnackbarProvider } from 'notistack'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './shared/services/queryClientProvider.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider autoHideDuration={3000}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SnackbarProvider>
  </StrictMode>,
)