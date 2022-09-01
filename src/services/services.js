import axios from "axios";
import { loginAPI, testUserAPI } from './url'

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

async function testSessionData() {
    try {
        return await axios({
            url: testUserAPI,
            method: "post",
            withCredentials: true
        })
    } catch (e) {
        return e
    }
}

export {createResource, getResource, loginService, testSessionData}