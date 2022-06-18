import axios from 'axios';
import config from '../config/config';

const findBootcamp = async()=>{
    try{
        const result = await axios.get(`${config.domain}/bootcamp`);
        return result.data;
    }catch (error){
        return error;
    }
}

const regular = async()=>{
    try{
        const result = await axios.get(`${config.domain}/bootcamp/regular`);
        return result.data;
    }catch (error){
        return error;
    }
}

const berbayar = async()=>{
    try{
        const result = await axios.get(`${config.domain}/bootcamp/berbayar`);
        return result.data;
    }catch (error){
        return error;
    }
}


export default {
    findBootcamp,
    regular,
    berbayar
}