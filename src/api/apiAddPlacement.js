import axios from "axios";
import config from "../config/config";

const daftar = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/placement/new`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const caritalent = async () => {
  try {
    const result = await axios.get(`${config.domain}/placement/new/batch`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const cariclient = async () => {
  try {
    const result = await axios.get(`${config.domain}/placement/new/client`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default { daftar, caritalent, cariclient };
