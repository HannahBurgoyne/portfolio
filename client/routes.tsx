import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />)
)

export default routes
