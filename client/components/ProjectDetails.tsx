import { Project } from '../../types/Project'
import Button from './UI/Button'

interface Props {
  project: Project
}

export default function ProjectDetails(props: Props) {
  const { project } = props

  return (
    <div className="border-[#333333] text-white bg-slate-900 p-10 border-solid rounded shadow-lg shadow-pink-700/40 border-[1px] flex flex-col items-center justify-center">
      <h2>{project.name}</h2>
      <img
        src={`${project.image}`}
        className="my-6 border-2 border-white rounded-md"
      />
      <p>{project.description}</p>
      <div className="py-10 flex flex-col justify-center items-center">
        {project.deployedLink && (
          <Button>
            <a
              className="hover:text-white hover:no-underline"
              href={`${project.deployedLink}`}
            >
              Try out demo
            </a>
          </Button>
        )}
        <Button>
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
