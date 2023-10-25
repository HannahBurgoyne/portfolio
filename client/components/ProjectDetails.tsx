import { Project } from '../../types/Project'
import Button from './UI/Button'

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
    <div className="border-[#333333] text-white bg-slate-900 p-10 border-solid rounded shadow-lg shadow-pink-700/40 border-[1px] relative">
      <div className="absolute top-0 right-0 p-3">
        <span
          onClick={handleClick}
          className="material-symbols-outlined cursor-pointer"
          aria-label="click here to close project details"
        >
          close
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>{project.name}</h2>
        <img
          src={`${project.image}`}
          alt={`Screenshot of ${project.name}`}
          className="my-6 border-2 border-white rounded-md"
        />
        <p>{project.description}</p>
      </div>
      <div className="py-10 flex flex-col justify-center items-center">
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
