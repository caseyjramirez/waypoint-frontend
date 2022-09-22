const baseUrl = 'http://localhost:4200'

const userAPI = `${baseUrl}/api/user`
const taskAPI = `${baseUrl}/api/task`

const loginAPI = `${userAPI}/login`
const getUserDataAPI = `${userAPI}/data`

const createNewTaskAPI = `${taskAPI}/new`


export {userAPI, loginAPI, getUserDataAPI, createNewTaskAPI}