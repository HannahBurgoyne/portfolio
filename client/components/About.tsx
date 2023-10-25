import Button from './UI/Button'
import ImgContainer from './UI/ImgContainer'

export default function About() {
  return (
    <section id="about" className="p-10">
      <h2 className="text-white text-center p-4">About me</h2>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/profile_headshot.jpg"
          alt="a person in their late 20s smiling at the camera"
          className="w-64 rounded-md mb-8"
        />
        <Button targetSectionId={''}>
          <a
            href="/images/Hannah_Burgoyne_CV_2023.pdf"
            className="hover:text-white hover:no-underline"
            aria-label="link opens as PDF document"
          >
            Download my CV
          </a>
        </Button>

        <div>
          <p className="text-white">
            Kia ora! I recently graduated from Dev Academy Aotearoa, where I
            learnt to build fullstack software applications in an Agile
            environment. I'm currently looking for work as a fullstack software
            developer.
          </p>
          <p className="text-white">
            Before shifting into the tech sector, I worked for six years in the
            creative arts and industries where I learnt to be resourceful and
            creative, and every day presented a new challenge to problem solve.
            I gradually realised that my favourite part of my work was anything
            technical - from teaching myself to program Brightsign audiovisual
            media players, to rebuilding the gallery's website from stratch and
            customising it with HTML and CSS. I began learning JavaScript at
            home in my spare time, and enjoyed it so much that I took the plunge
            into retraining in applied software development.
          </p>
          <p className="text-white">
            I'm super passionate about problem-solving, building awesome tech,
            exploring unfamiliar frameworks and languages, and learning as much
            as I can along the way. I really thrive in Agile, fast-paced team
            environments where I can contribute and seek support.
          </p>
          <p className="text-white">
            Take a look at my projects below, and feel free to get in touch -
            I'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  )
}
