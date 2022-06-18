import axios from "axios";
import config from "../config/config";

const findCurr = async()=>{
    try{
        const result = await axios.get(`${config.domain}/curriculum_reviews`);
        return result.data;
    }catch (error){
        return error;
    }
}

export default {
    findCurr
}