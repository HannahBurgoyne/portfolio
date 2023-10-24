import Button from './UI/Button'

export default function Menu() {
  return (
    <>
      <nav>
        <div className="flex flex-row justify-center items-center space-x-5">
          <Button targetSectionId={'about'}>About</Button>
          <Button targetSectionId={'projects'}>Projects</Button>
          <Button targetSectionId={'contact'}>Contact</Button>
        </div>
      </nav>
    </>
  )
}
