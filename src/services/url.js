const baseUrl = 'http://localhost:4200'

const userAPI = `${baseUrl}/api/user`
const loginAPI = `${userAPI}/login`
const testUserAPI = `${userAPI}/test`
const getUserDataAPI = `${userAPI}/data`


export {userAPI, loginAPI, testUserAPI, getUserDataAPI}