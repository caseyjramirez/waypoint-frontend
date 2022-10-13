const baseUrl = 'http://localhost:4200'

const userAPI = `${baseUrl}/api/user`
const taskAPI = `${baseUrl}/api/task`
const tagAPI = `${baseUrl}/api/tag`

const loginAPI = `${userAPI}/login`
const getUserDataAPI = `${userAPI}/data`

const createNewTaskAPI = `${taskAPI}/new`
const createNewTagAPI = `${tagAPI}/new`
const updatingTagAPI = tagId => `${tagAPI}/update/${tagId}`
const deleteTagAPI = tagId => `${tagAPI}/delete/${tagId}`


export {
    userAPI, 
    loginAPI, 
    getUserDataAPI, 
    createNewTaskAPI,
    createNewTagAPI,
    updatingTagAPI,
    deleteTagAPI
}