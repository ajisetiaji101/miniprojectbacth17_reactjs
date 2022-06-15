import axios from "axios";
import config from "../config/config";

const findAll = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/curriculums`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const createCurriculum = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/curriculums`,payload);
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    findAll,
    createCurriculum
}