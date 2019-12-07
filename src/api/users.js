import { post } from './http'

const login = p => post('/api/login', p)
const register = p => post('/api/register', p)

export { login,register }