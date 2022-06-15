import axios from "axios";
import config from "../config/config";

const List = async () => {
  try {
    const result = await axios.get(`${config.domain}/hiring/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const city = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/hiringg/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/hiring/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  List,
  findOne,
  city
};
