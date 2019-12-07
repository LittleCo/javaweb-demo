import { post } from './http'

const profile = p => post('/company/profile', p)
const UNIT = p => post('/company/unit', p)
const NAME = p => post('/company/name', p)

export { profile, UNIT, NAME }
