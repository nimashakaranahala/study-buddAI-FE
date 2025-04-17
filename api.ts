import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

function uploadFiles(formData:FormData) {
    return api.post("/files/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
    })
}


export { uploadFiles }