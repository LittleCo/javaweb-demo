import { post } from './http'
const baseUrl = 'http://60.205.186.249'

const login = p => post(`${baseUrl}/api/login`, p)
const register = p => post(`${baseUrl}/api/register`, p)

export { login,register }