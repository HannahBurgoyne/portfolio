import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Background from './UI/Background'

export default function App() {
  return (
    <>
      <Background>
        <Header />
        <Outlet />
        <Footer />
      </Background>
    </>
  )
}
