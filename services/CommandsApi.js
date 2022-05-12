import axios from "../config/axios";

const getAllCommands = () => {
    return axios.get("/commandes")
        .then((r) => r.data)
}

const getCommandDeclinaisonByCommandId = (idCommand) => {
    return axios.get("/commandedeclinaisons/" + idCommand)
        .then((r) => r.data)
}

const getAllStatut = () => {
    return axios.get("/statut")
        .then((r) => r.data)
}

export default { getAllCommands, getCommandDeclinaisonByCommandId, getAllStatut }