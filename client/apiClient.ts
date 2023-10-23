import request from 'superagent'
import { Project, ProjectData } from '../types/Project'

export async function fetchProjects() {
  const data = await request.get('/api/v1/projects/')
  return data.body as ProjectData
}

export async function sendMessage(messageData) {
  await request.post('/send-email').send(messageData)
}
