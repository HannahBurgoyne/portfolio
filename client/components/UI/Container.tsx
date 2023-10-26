import React from 'react'

interface Props {
  children: React.ReactNode
}

// Credit for the animated border gradient: https://ui.ibelick.com/card-animated-border-gradient

export default function Container(props: Props) {
  return (
    <section className="relative m-10 overflow-hidden rounded-md border border-transparent p-[1px] backdrop-blur-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fce7f3_0%,#be185d_50%,#fce7f3_100%)]" />
      <div className=" mx-auto m-[0.8px] items-center justify-center rounded-md bg-slate-900 md:px-6 sm:py-1 text-white backdrop-blur-3xl whitespace-normal">
        {props.children}
      </div>
    </section>
  )
}
