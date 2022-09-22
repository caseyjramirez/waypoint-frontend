import axios from "axios";
import { loginAPI, getUserDataAPI, createNewTaskAPI } from './url'

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

export {
    createResource, 
    getResource, 
    loginService, 
    getUserData, 
    createNewTask
}