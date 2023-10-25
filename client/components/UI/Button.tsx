interface Props {
  children: React.ReactNode
  targetSectionId: string
}

export default function Button(props: Props) {
  const { children, targetSectionId } = props
  function handleClick() {
    console.log('click', targetSectionId)
    const targetSection = document.getElementById(targetSectionId)

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Thank you to Julien for the shooting star effect: https://www.julienthibeaut.xyz/blog/create-shooting-star-border-tailwind-css
  return (
    <button
      onClick={handleClick}
      className="m-2 group relative grid overflow-hidden rounded px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded [mask:linear-gradient(#666,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#666_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[1.5px] rounded bg-slate-950 transition-colors duration-200 group-hover:bg-pink-700/50" />
      <span className="text z-10 text-white">{children}</span>
    </button>
  )
}
