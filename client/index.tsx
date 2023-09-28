import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './components/routes.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
      cacheLocation="localstorage"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
  )
})

export { routes }