import request from 'superagent'
import { Project } from '../types/Project'

export async function fetchProjects() {
  const data = await request.get('/api/v1/projects/')

  return data.body as Project[]
}
