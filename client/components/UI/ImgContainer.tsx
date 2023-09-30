interface Props {
  children: React.ReactNode
}
export default function ImgContainer(props: Props) {
  return (
    <section className="border-solid rounded border-[#333333] bg-[#333333] flex flex-col border-2 m-4 flex items-center justify-center">
      {props.children}
    </section>
  )
}
