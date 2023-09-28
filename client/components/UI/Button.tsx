import { HtmlHTMLAttributes } from 'react'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded text-white border-2 border-white border-solid p-5">
      {children}
    </button>
  )
}
