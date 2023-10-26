import { Project } from '../../types/Project'
import Button from './UI/Button'
import Label from './UI/Label'

interface Props {
  projectClicked: boolean
  setProjectClicked: React.Dispatch<React.SetStateAction<boolean>>
  project: Project
}

export default function ProjectDetails(props: Props) {
  const { projectClicked, setProjectClicked, project } = props

  function handleClick() {
    setProjectClicked(false)
  }

  return (
    <div className="border-[#333333] mx-auto max-w-screen-sm text-white bg-slate-900 border-solid rounded shadow-lg shadow-pink-700/40 border-[1px] relative">
      <div className="absolute top-0 right-0 p-3">
        <span
          onClick={handleClick}
          className="material-symbols-outlined cursor-pointer"
          aria-label="click here to close project details"
        >
          close
        </span>
      </div>
      <div className="flex flex-col items-center pt-8 justify-center mx-6">
        <h2>{project.name}</h2>
        <img
          src={`${project.image}`}
          alt={`Screenshot of ${project.name}`}
          className="my-6 border-2 w-[90%] sm:w-42 h-auto border-white rounded-md"
        />
        <p>{project.description}</p>
      </div>
      <div className="p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-4 gap-4">
        {project.tech.map((item) => (
          <ul className="overflow-wrap">
            <Label>{item}</Label>
          </ul>
        ))}
      </div>
      <div className="py-4 sm:py-10 flex flex-col justify-center items-center">
        {project.deployedLink && (
          <Button targetSectionId={''}>
            <a
              className="hover:text-white hover:no-underline"
              href={`${project.deployedLink}`}
            >
              Try out demo
            </a>
          </Button>
        )}
        <Button targetSectionId={''}>
          <a
            className="hover:text-white hover:no-underline"
            href={`${project.repoLink}`}
          >
            View code
          </a>
        </Button>
      </div>
    </div>
  )
}
