import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function LandingPage() {
  return (
    <>
      <h1 className="text-white">Hannah Burgoyne</h1>
      <h3 className="text-white">Software Developer</h3>
      <About />
      <Projects />
      <Contact />
    </>
  )
}
