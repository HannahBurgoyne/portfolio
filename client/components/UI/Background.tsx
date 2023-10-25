interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center lg:px-24 lg:py-8 sm:px-1 sm:py-2 bg-slate-950">
      {props.children}
    </div>
  )
}

export default Background
