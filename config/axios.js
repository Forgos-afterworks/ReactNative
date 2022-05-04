import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: "http://localhost:8000/api"
});

//Définir un intercepteur qui vas inclure le token dans chaque appel à l'API
instance.interceptors.request.use(async (request) => {
    //Récupérer le token dans le AsyncStorage
    const token = await AsyncStorage.getItem("token")
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
})

export default instance;