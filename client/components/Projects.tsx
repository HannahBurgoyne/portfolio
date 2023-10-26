import ImgContainer from './UI/ImgContainer'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import { Project } from '../../types/Project'
import data from '../../server/data/data.json'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projectClicked, setProjectClicked] = useState(false)

  function handleClick(project: Project) {
    if (selectedProject === project) {
      setSelectedProject(null)
    } else {
      setProjectClicked(true)
      setSelectedProject(project)
    }
  }

  return (
    <section id="projects" className="p-4 sm:p-10 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center inset-40">
        <h2 className="flex items-center justify-center p-4">Projects</h2>
        <p className="mx-5 flex items-center justify-center">
          Below is a selection of projects I've worked on recently. Please click
          on a project to see further details and links.
        </p>
      </div>
      {projectClicked ? (
        <div className="flex flex-col justify-center items-center p-4 sm:p-10 ">
          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              projectClicked={projectClicked}
              setProjectClicked={setProjectClicked}
            />
          )}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 lg:gap-4 sm:grid-cols-1 sm:p-10">
          {data &&
            data.projects?.map((project) => (
              <div key={project.id}>
                <ImgContainer>
                  <div
                    className="cursor-pointer flex flex-col justify-center items-center"
                    onClick={() => handleClick(project)}
                  >
                    <h2 className="text-white">{project.name}</h2>
                    <img
                      className="w-[70%] sm:w-42 h-auto"
                      src={project.image}
                      alt={`Image for ${project.name}`}
                    />
                  </div>
                </ImgContainer>
              </div>
            ))}
        </div>
      )}
    </section>
  )
}
