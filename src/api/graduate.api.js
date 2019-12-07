import { get,post } from './http'

const profile = p => post('/graduate/profile', p)
const resume = p => post('/graduate/resume', p)
const queryJobs = p => get('/graduate/jobs', p)

export { profile, resume, queryJobs }