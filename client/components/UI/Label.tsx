interface Props {
  children: React.ReactNode
}

export default function Button(props: Props) {
  const { children } = props

  return (
    <li className="rounded-2xl border flex items-center justify-center border-[#333333] p-2 w-auto mx-2 bg-slate-950 min-width-fit">
      {children}
    </li>
  )
}
