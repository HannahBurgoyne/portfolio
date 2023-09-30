interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center px-24 py-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#be185d_100%)]">
      {props.children}
    </div>
  )
}

export default Background
