import axios from "axios";
import config from "../config/config";

const currList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/curriculum/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const updateCurrStatus = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/curriculum/status/${data.curr_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/curriculum/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const updateCurr = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/curriculum/${data.curr_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const curriculum = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/curriculum/${id}`)
        return result.data;
    } catch (error) {
        return await error
    }
}


export default {
    currList,
    updateCurrStatus,
    deleteRow,
    updateCurr,
    curriculum
}