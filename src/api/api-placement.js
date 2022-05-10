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

export default {
  List,
};
