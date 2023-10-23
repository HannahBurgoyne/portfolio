interface Props {
  children: React.ReactNode
}

export default function ImgContainer(props: Props) {
  return (
    <section className="border-solid rounded-md border-[#333333] bg-black flex flex-col border-[1px] m-4 p-4 flex items-center justify-center hover:border-pink-700/40 hover:shadow-pink-700/40 hover:shadow-lg transition duration-300">
      {props.children}
    </section>
  )
}
