import axios from "axios";
import config from "../config/config";

const getTalent = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/settings/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const updateSettings = async (payload) => {
  const tale_user_id = parseInt(payload.get("tale_user_id"));
  try {
    const result = await axios.put(`${config.domain}/settings/${tale_user_id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateSettingsNoFile = async (payload) => {
  const tale_user_id = payload.tale_user_id;
  try {
    const result = await axios.put(`${config.domain}/settings/data/${tale_user_id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  getTalent,
  updateSettings,
  updateSettingsNoFile,
};
