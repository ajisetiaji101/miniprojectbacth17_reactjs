import axios from "axios";
import config from "../config/config";

const findOne = async (data) => {
  try {
    const result = await axios.get(
      `${config.domain}/curriculum/${data.curr_id}`
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (data) => {
  try {
    const payload = new FormData();

    for (const key in data) {
      payload.append(key, data[key]);
    }

    const result = await axios.put(
      `${config.domain}/curriculum/${data.curr_id}`,
      payload
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const base64url = async (filename) => {
  try {
    const { data } = await axios.get(`${config.urlImage}/${filename}`, {
      responseType: "arraybuffer",
    });

    return `data:*/*;base64,${btoa(
      String.fromCharCode(...new Uint8Array(data))
    )}`;
  } catch (error) {
    throw error;
  }
};

export default { findOne, update, base64url };
