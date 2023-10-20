export interface Project {
  id: number
  name: string
  image: string
  description: string
  tech: string[]
  deployedLink: string
  repoLink: string
}

interface ProjectData {
  projects: Project[]
}
