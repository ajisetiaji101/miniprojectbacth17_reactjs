import axios from "axios";
import config from "../config/config";

const findAll = async(id)=>{
    console.log("sudah sampai di apiBatch");
    try {
        const result = await axios.get(`${config.domain}/batchs`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const createBatch = async(payload)=>{
    console.log("sudah sampai di apiBatch");
    try {
        const result = await axios.post(`${config.domain}/batchs`,payload);
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    findAll,
    createBatch
}