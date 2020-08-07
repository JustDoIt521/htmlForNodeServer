import axios from 'axios'

const baseAPI = {
    def: 'http://localhost:8088/'
}

const Axios = axios.create({
    baseURL: baseAPI.def
})

// 请求前拦截器
Axios.interceptors.request.use((request) => {

    console.log('请求前拦截', request);
    return request;
})

// 相应拦截器
Axios.interceptors.response.use((response) => {
    console.log('响应拦截', response);
    return response;
})

export default Axios;


export function sendMesg(api, type, params) {
    return new Promise((resolve, reject) => {
        if (type == 'get') {
            Axios.get(api, {
                params: params
            }).then(res => {
                return resolve(res.data);
            })
            .catch(e => {
                return reject(e);
            })
        } else {
            Axios.post(api, params).then(res => {
                return resolve(res.data);
            })
            .catch(e => {
                return reject(e);
            })
        }
    })
}
