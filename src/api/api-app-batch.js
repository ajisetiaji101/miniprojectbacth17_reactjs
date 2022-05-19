import axios from "axios";
import config from "../config/config";

const batchList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/batch/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const updateBatchStatus = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/batch/status/${data.batch_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/batch/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const updateBatch = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/batch/${data.batch_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const batch = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/batch/${id}`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const instructorList = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/instructor`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const talentList = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/talent`)
        return result.data;
    } catch (error) {
        return await error
    }
}

export default {
    batchList,
    updateBatchStatus,
    deleteRow,
    updateBatch,
    batch,
    instructorList,
    talentList
}