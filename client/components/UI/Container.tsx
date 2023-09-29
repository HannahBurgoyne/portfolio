interface Props {
  children: React.ReactNode
}

export default function Container(props: Props) {
  return (
    <section className="border-solid rounded border-white border-2 m-8 mx-32 flex items-center justify-center">
      {props.children}
    </section>
  )
}
