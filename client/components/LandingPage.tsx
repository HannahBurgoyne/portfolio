import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Projects from './Projects'
import Button from './UI/Button'
import Container from './UI/Container'

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-screen-xl p-4 sm:p-2">
      <section className="flex flex-col justify-center items-center m-4 sm:m-20">
        <h1>Hannah Burgoyne</h1>
        <h3>Software Developer</h3>
      </section>
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
    </div>
  )
}
