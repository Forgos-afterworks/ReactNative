import axios from "../config/axios";

const getAllCommands = () => {
    return axios.get("/commandes")
        .then((r) => r.data)
}

const getCommandDeclinaisonByCommandId = (idCommand) => {
    return axios.get("/commandedeclinaisons/" + idCommand)
        .then((r) => r.data)
}

const updateCommand = (idCommand, data) => {
    return axios.put("/commandes/" + idCommand, data)
        .then((r) => r.data)
}

const getStatutByIdCommand = (idCommand) => {
    return axios.get("/commandes/" + idCommand)
        .then((r) => r.data[0].idStatut)
}

export default { getAllCommands, getCommandDeclinaisonByCommandId, updateCommand, getStatutByIdCommand }