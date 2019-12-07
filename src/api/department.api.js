import { post } from './http'

const profile = p => post('/company/profile', p)

export { profile }
