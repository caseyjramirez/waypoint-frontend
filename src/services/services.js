import axios from "axios";
import { 
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
    deleteTaskAPI
} from './url'

async function createResource(url, body) {
    try {
        return await axios({
            method: 'post',
            url,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function getResource(url) {
    try {
        return await axios({
            method: 'get',
            url,
        })
    } catch (e) {
        return e
    }
}

async function loginService(body) {
    try {
        return await axios({
            url: loginAPI,
            method: "post",
            data: body,
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function getUserData() {
    try {
        return await axios({
            url: getUserDataAPI,
            method: "get",
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function createNewTask(task) {
    try {
        return await axios({
            url: createNewTaskAPI,
            method: "post",
            data: task,
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function createNewTag(tag) {
    try {
        return await axios({
            url: createNewTagAPI,
            method: "post",
            data: tag,
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function updateTag(tagId, tag) {
    try {
        return await axios({
            url: updatingTagAPI(tagId),
            method: "patch",
            data: tag,
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function updateTask(taskId, task) {
    try {
        return await axios({
            url: updatingTaskAPI(taskId),
            method: "patch",
            data: task,
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function deleteTag(tagId) {
    try {
        return await axios({
            url: deleteTagAPI(tagId),
            method: "delete",
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function addTagToTask(taskId, tagId) {
    try {
        return await axios({
            url: addTagToTaskAPI(taskId),
            method: "patch",
            data: {"tagId": tagId},
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function removeTagFromTask(taskId, tagId) {
    try {
        return await axios({
            url: removeTagFromTaskAPI(taskId),
            method: "patch",
            data: {"tagId": tagId},
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function changeTaskStatus(taskId, status) {
    try {
        return await axios({
            url: changeTaskStatusAPI(taskId),
            method: "patch",
            data: { status },
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

async function deleteTask(taskId) {
    try {
        return await axios({
            url: deleteTaskAPI(taskId),
            method: "delete",
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

export {
    createResource, 
    getResource, 
    loginService, 
    getUserData, 
    createNewTask,
    createNewTag,
    updateTag,
    deleteTag,
    addTagToTask,
    removeTagFromTask,
    changeTaskStatus,
    updateTask,
    deleteTask
}