import axios from "axios";
import config from "../config/config";

const getTimeline = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/talenttimeline/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createTimeline = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/talenttimeline/`, payload);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getTimeline,
  createTimeline,
};
