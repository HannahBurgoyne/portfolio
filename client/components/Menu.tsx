import JumpToSection from './UI/JumpToSection'

export default function Menu() {
  return (
    <>
      <nav>
        <div className="flex flex-row justify-center items-center space-x-5">
          <JumpToSection targetSectionId="about">About</JumpToSection>
          <JumpToSection targetSectionId="projects">Projects</JumpToSection>
          <JumpToSection targetSectionId="contact">Contact</JumpToSection>
        </div>
      </nav>
    </>
  )
}
