import axios from "axios";

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
    const data = await axios({
        method: 'get',
        url,
    })
    return data
}
export {createResource, getResource}