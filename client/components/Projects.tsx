import { useQuery } from '@tanstack/react-query'
import ImgContainer from './UI/ImgContainer'
import { fetchProjects } from '../apiClient'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import { Project } from '../../types/Project'
import data from '../../server/data/data.json'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  function handleClick(project: Project) {
    if (selectedProject === project) {
      setSelectedProject(null)
    } else {
      setSelectedProject(project)
    }
  }

  return (
    <section className="p-10">
      <h2 className="text-white text-center p-4">Projects</h2>
      <p className="text-white">
        Below is a selection of projects I've worked on recently. Please click
        on a project to see further details and links.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {data &&
          data.projects?.map((project) => (
            <div key={project.id}>
              <ImgContainer>
                <div onClick={() => handleClick(project)}>
                  <h2 className="text-white">{project.name}</h2>
                  <img
                    className="w-18 h-auto"
                    src={project.image}
                    alt={`Image for ${project.name}`}
                  />
                </div>
              </ImgContainer>
            </div>
          ))}
      </div>

      {selectedProject && <ProjectDetails project={selectedProject} />}
    </section>
  )
}
