import axios from "axios";
import config from "../config/config";

const addProcessBootcamp = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/processbootcamp/`, payload);
    return result.data;
  } catch (error) {
    return error;
  }
};

const updateProcessBootcamp = async (payload) => {
  const tale_user_id = parseInt(payload.get("tale_user_id"));
  try {
    const result = await axios.put(`${config.domain}/processbootcamp/${tale_user_id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateProcessBootcampNoFile = async (payload) => {
  const tale_user_id = payload.tale_user_id;
  try {
    const result = await axios.put(`${config.domain}/processbootcamp/data/${tale_user_id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  addProcessBootcamp,
  updateProcessBootcamp,
  updateProcessBootcampNoFile,
};
