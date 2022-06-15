import axios from "axios"
import config from '../config/config'

const list = async() =>{
    console.log("sudah sampai di apiJob");
    try {
        const result = await axios.get(`${config.domain}/jobs`)
        return result.data
    } catch (error) {
        return error
        
    }
}

const createJob = async(payload)=>{
    console.log("sudah sampai di apiJob");
    try {
        const result = await axios.post(`${config.domain}/jobs`,payload);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/jobs/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list,
    createJob,
    deleteRow,
}