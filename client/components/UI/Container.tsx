import React from 'react'

interface Props {
  children: React.ReactNode
}

// Credit for the animated border gradient: https://ui.ibelick.com/card-animated-border-gradient

export default function Container(props: Props) {
  return (
    <section
      className={`relative m-10 overflow-hidden rounded-md border border-slate-800 p-[1px] backdrop-blur-3xl`}
    >
      <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fce7f3_0%,#be185d_50%,#fce7f3_100%)]" />
      <div className="inline-flex h-full w-full items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-white backdrop-blur-3xl">
        {props.children}
      </div>
    </section>
  )
}
