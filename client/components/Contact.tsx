import Button from './UI/Button'

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="mb-12">Contact Me</h2>
      <ul className="flex flex-col justify-center items-start pb-10 w-full">
        <li className="flex justify-start items-center border-solid border-[1px] border-[#333333] rounded-md p-4 m-2 w-full ">
          <img className="w-11 m-2" src="/assets/github-mark-white.png" />
          <a href="https://github.com/HannahBurgoyne">
            https://github.com/HannahBurgoyne
          </a>
        </li>
        <li className="flex justify-start items-center border-solid border-[1px] border-[#333333] rounded-md p-4 m-2 w-full">
          <img className="w-10 m-2" src="/assets/In-White-128.png" />
          <a href="https://www.linkedin.com/in/hannah-burgoyne-1311b5160/">
            https://www.linkedin.com/in/hannah-burgoyne-1311b5160/
          </a>
        </li>
        <li className="flex justify-start items-center border-solid border-[1px] border-[#333333] rounded-md p-4 m-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 m-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <a href="mailto: hannah.burgoyne@gmail.com">
            hannah.burgoyne@gmail.com
          </a>
        </li>
      </ul>
    </section>
  )
}
