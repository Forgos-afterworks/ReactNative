import axios from "../config/axios";

const login = (login, password) => {
    return axios.post("/login_check", {username: login, password: password})
        .then((r) => r.data)
}

export default { login }