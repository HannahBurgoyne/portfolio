import { useQuery } from '@tanstack/react-query'
import ImgContainer from './UI/ImgContainer'
import { fetchProjects } from '../apiClient'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'

export default function Projects() {
  const { data } = useQuery(['projects'], fetchProjects)
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <section className="p-10">
        <h2 className="text-white text-center p-4">Projects</h2>
        <p className="text-white">
          This is a selection of projects I've worked on recently. Please click
          on a project to see further details and links.
        </p>
        {data &&
          data.projects?.map((project) =>
            isClicked ? (
              <ProjectDetails project={project} />
            ) : (
              <div key={project.id} className="grid gap-1 grid-cols-2">
                <ImgContainer>
                  <div onClick={handleClick}>
                    <h2 className="text-white">{project.name}</h2>
                    <img
                      className="w-6"
                      src={project.image}
                      alt={`Image for ${project.name}`}
                    />
                  </div>
                </ImgContainer>
              </div>
            )
          )}
      </section>
    </>
  )
}
