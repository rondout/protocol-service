import axios from "axios"
axios.defaults.timeout = 15000
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = "//192.168.16.151"
}
else {
    axios.defaults.baseURL = window.location.host
}
export default (() => {
    axios.interceptors.request.use(function (config) {
        if (localStorage.token) {
            config.headers.Authorization = `Bearer ${localStorage.token}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        if (response.status === 200) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response);
        }
    }, function (error) {
        return Promise.reject(error);
    });
})()