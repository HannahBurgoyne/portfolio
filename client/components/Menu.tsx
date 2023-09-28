import Button from './UI/Button'

export default function Menu() {
  return (
    <>
      <nav>
        <div className="flex flex-row justify-around items-center">
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </div>
      </nav>
    </>
  )
}
