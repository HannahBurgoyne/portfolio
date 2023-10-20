import { useQuery } from '@tanstack/react-query'
import ImgContainer from './UI/ImgContainer'
import { fetchProjects } from '../apiClient'

export default function Projects() {
  const { data } = useQuery(['projects'], fetchProjects)

  return (
    <>
      <section className="p-10">
        <h2 className="text-white text-center p-4">Projects</h2>
        <p className="text-white">
          This is a selection of projects I've worked on recently. Please click
          on a project to see further details and links.
        </p>

        <div className="grid gap-1 grid-cols-2">
          {data &&
            data.projects?.map((project) => (
              <ImgContainer>
                <div key={project.id}>
                  <h2 className="text-white" key={project.id}>
                    {project.name}
                  </h2>
                  <img
                    key={project.id}
                    className="w-4"
                    src={`${project.image}`}
                  />
                </div>
              </ImgContainer>
            ))}
        </div>
      </section>
    </>
  )
}
