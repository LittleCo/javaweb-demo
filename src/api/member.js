import { get, post } from './http'

const login = p => post('/api/login', p)
const register = p => post('/api/register', p)
const queryOptions = p => post('/bg/members', p)

export { login, register, queryOptions }
