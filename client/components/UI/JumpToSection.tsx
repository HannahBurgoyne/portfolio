import Button from './Button'

interface Props {
  children: React.ReactNode
  targetSectionId: string
}

export default function JumpToSection(props: Props) {
  const { children, targetSectionId } = props
  function handleClick() {
    const targetSection = document.getElementById(targetSectionId)

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return <Button onClick={handleClick}>{children}</Button>
}
