export interface Project {
  id: number
  name: string
  image: string
  description: string
  tech: string[]
  deployedLink?: string | null
  repoLink: string
}

export interface ProjectData {
  projects: Project[]
}
