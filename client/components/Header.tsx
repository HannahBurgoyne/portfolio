export default function Header() {
  return (
    <header className="mx-auto max-w-screen-xl">
      <ul className="text-white list-none flex justify-between items-center mx-20 ">
        <li>
          <a href="https://github.com/HannahBurgoyne">
            <img
              src="assets/github-mark-white.png"
              alt="Github"
              className="w-12"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hannah-burgoyne-1311b5160/">
            <img
              src="assets/In-White-128.png"
              alt="LinkedIn"
              className="w-10  hover:shadow-pink-700/40 hover:shadow-lg transition duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:hannah.burgoyne@gmail.com"
            aria-label="click here to email me"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 m-2 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  )
}
