import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Projects from './Projects'
import Button from './UI/Button'
import Container from './UI/Container'

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-20">
        <h1 className="text-white text-2xl">Hannah Burgoyne</h1>
        <h3 className="text-white text-xl">Software Developer</h3>
      </div>
      <Menu />

      <Container>
        <About />
      </Container>

      <Container>
        <Projects />
      </Container>

      <Container>
        <Contact />
      </Container>
    </>
  )
}
