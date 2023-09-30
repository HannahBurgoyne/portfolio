interface Props {
  children: React.ReactNode
}

export default function Container(props: Props) {
  return (
    <section className="border-solid rounded border-[#333333] shadow-lg shadow-pink-700/40 border-2 m-8 mx-32 flex items-center justify-center">
      {props.children}
    </section>
  )
}
