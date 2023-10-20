import { Project } from '../../types/Project'

interface Props {
  project: Project
}

export default function ProjectDetails(props: Props) {
  const { project } = props

  return (
    <div className="bg-white">
      <h2>{project.name}</h2>
      <img src={`${project.image}`} />
      <p>{project.description}</p>
      <a href={`${project.deployedLink}`}>Try out demo</a>
      <a href={`${project.repoLink}`}>View code</a>
    </div>
  )
}
