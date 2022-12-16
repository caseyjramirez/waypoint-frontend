const baseUrl = 'http://localhost:4200'

const userAPI = `${baseUrl}/api/user`
const taskAPI = `${baseUrl}/api/task`
const tagAPI = `${baseUrl}/api/tag`

const loginAPI = `${userAPI}/login`
const getUserDataAPI = `${userAPI}/data`

const createNewTaskAPI = `${taskAPI}/new`
const addTagToTaskAPI = taskId => `${taskAPI}/add_tag/${taskId}`
const removeTagFromTaskAPI = taskId => `${taskAPI}/remove_tag/${taskId}`
const changeTaskStatusAPI = taskId => `${taskAPI}/change_status/${taskId}`
const changeTaskFavoriteAPI = taskId => `${taskAPI}/change_favorite/${taskId}`
const deleteTaskAPI = taskId => `${taskAPI}/delete/${taskId}`

const createNewTagAPI = `${tagAPI}/new`
const updatingTagAPI = tagId => `${tagAPI}/update/${tagId}`
const updatingTaskAPI = taskId => `${taskAPI}/update/${taskId}`
const deleteTagAPI = tagId => `${tagAPI}/delete/${tagId}`


export {
    userAPI, 
    loginAPI, 
    getUserDataAPI, 
    createNewTaskAPI,
    createNewTagAPI,
    updatingTagAPI,
    deleteTagAPI,
    addTagToTaskAPI,
    removeTagFromTaskAPI,
    changeTaskStatusAPI,
    updatingTaskAPI,
    deleteTaskAPI,
    changeTaskFavoriteAPI
}