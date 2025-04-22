import axios from "axios";

// const port = 8080
// const api = axios.create({
//     baseURL: `http://localhost:${port}/api`
// })

function uploadFiles(formData:FormData) {
    return axios.post('http://localhost:8080/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
    })
}

function getResults (attempt_id: any) {
  return axios.get(`http://localhost:8080/api/attempt/${attempt_id}/submit`)
}



export default { uploadFiles, getResults }