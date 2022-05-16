import axios from "axios";
import config from "../config/config";

const List = async () => {
  try {
    const result = await axios.get(`${config.domain}/placement/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Delete = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/placement/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  List,
  Delete,
};
