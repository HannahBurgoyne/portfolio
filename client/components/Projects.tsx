import { useQuery } from '@tanstack/react-query'
import ImgContainer from './UI/ImgContainer'
import { fetchProjects } from '../apiClient'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import { Project } from '../../types/Project'

export default function Projects() {
  const { data } = useQuery(['projects'], fetchProjects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Define the handleClick function
  function handleClick(project: Project) {
    if (selectedProject === project) {
      setSelectedProject(null) // If the same project is clicked again, hide the details
    } else {
      setSelectedProject(project) // Show the details for the clicked project
    }
  }

  return (
    <section className="p-10">
      <h2 className="text-white text-center p-4">Projects</h2>
      <p className="text-white">
        This is a selection of projects I've worked on recently. Please click on
        a project to see further details and links.
      </p>
      {data &&
        data.projects?.map((project) => (
          <div key={project.id} className="grid gap-1 grid-cols-2">
            <ImgContainer>
              <div onClick={() => handleClick(project)}>
                <h2 className="text-white">{project.name}</h2>
                <img
                  className="w-4"
                  src={project.image}
                  alt={`Image for ${project.name}`}
                />
              </div>
            </ImgContainer>
          </div>
        ))}

      {selectedProject && <ProjectDetails project={selectedProject} />}
    </section>
  )
}
