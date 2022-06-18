import axios from "axios"
import config from "../config/config"

const list = async() =>{
    console.log("sudah sampai di apiClient");
    try {
        const result = await axios.get(`${config.domain}/client`)
        return result.data
    } catch (error) {
        return error
        
    }
}

const findClient = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/client/${id}`);
        return result.data;
    } catch (error) {
        return await error
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list,
    findClient
}