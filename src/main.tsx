import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardPage from './presentation/pages/dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardPage />
  </StrictMode>,
)
