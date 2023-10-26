export default function Contact() {
  return (
    <section id="contact" className="p-4 sm:p-10 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl mb-4">Contact Me</h2>
      <ul className="space-y-4 w-full">
        <li className="border border-[#333333] rounded-md p-3 sm:p-4 text-center">
          <div className="flex items-center justify-center sm:justify-start">
            <a href="https://github.com/HannahBurgoyne">
              <img
                className="w-8 h-8 mr-2"
                src="/images/github-mark-white.png"
                alt="Github"
              />
            </a>
            <a
              href="https://github.com/HannahBurgoyne"
              className="text-white hidden sm:inline"
            >
              https://github.com/HannahBurgoyne
            </a>
          </div>
        </li>
        <li className="border border-[#333333] rounded-md p-3 sm:p-4 text-center">
          <div className="flex items-center justify-center sm:justify-start">
            <a href="https://www.linkedin.com/in/hannah-burgoyne-1311b5160/">
              <img
                className="w-8 h-8 mr-2"
                src="/images/In-White-128.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-burgoyne-1311b5160/"
              className="text-white hidden sm:inline"
            >
              https://www.linkedin.com/in/hannah-burgoyne-1311b5160/
            </a>
          </div>
        </li>
        <li className="border border-[#333333] rounded-md p-3 sm:p-4 text-center">
          <div className="flex items-center justify-center sm:justify-start">
            <a href="mailto: hannah.burgoyne@gmail.com" aria-label="Email me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="mailto: hannah.burgoyne@gmail.com"
              aria-label="Email me"
              className="text-white hidden sm:inline"
            >
              hannah.burgoyne@gmail.com
            </a>
          </div>
        </li>
      </ul>
    </section>
  )
}
