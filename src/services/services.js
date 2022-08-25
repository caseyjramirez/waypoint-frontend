import axios from "axios";

async function createResource(url, body) {
    const response = await axios({
        method: 'post',
        url,
        data: body
    })
    return response
}

async function getResource(url) {
    const data = await axios({
        method: 'get',
        url,
    })
    return data
}
export {createResource, getResource}