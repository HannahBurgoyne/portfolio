interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center px-24 py-8 bg-black">
      {props.children}
    </div>
  )
}

export default Background
