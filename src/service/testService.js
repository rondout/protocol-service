import axios from "axios"

export default {
    getKey() {
        return new Promise((resolve, reject) => {
            axios.get('/api/auth/getKeys')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getLoginParams() {
        return new Promise((resolve, reject) => {
            axios.get('/api/whiteLabel/loginWhitelabel?key=loginLogoParams')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}