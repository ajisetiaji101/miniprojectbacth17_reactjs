import axios from "axios";
import config from "../config/config";

const create = async (data) => {
  try {
    const payload = new FormData();

    for (const key in data) {
      payload.append(key, data[key]);
    }
    const result = await axios.post(
      `${config.domain}/curriculum_materi`,
      payload
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export default { create };
