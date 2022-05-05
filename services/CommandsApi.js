import axios from "../config/axios";

const getAllCommands = () => {
    return axios.get("/commandes")
        .then((r) => r.data)
}

export default { getAllCommands }