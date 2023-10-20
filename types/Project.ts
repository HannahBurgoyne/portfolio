export interface Project {
  id: number
  name: string
  image: string
  description: string
  tech: string[]
  deployedLink: string
  repoLink: string
}

export interface ProjectData {
  projects: Project[]
}
