import axios from "axios";
import config from "../config/config";

const candidat = async () => {
  try {
    const result = await axios.get(`${config.domain}/dasboard/candidat`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};
const training = async () => {
  try {
    const result2 = await axios.get(`${config.domain}/dasboard/training`);
    return result2.data;
  } catch (error) {
    return await error.message;
  }
};

const boarding = async () => {
  try {
    const result3 = await axios.get(`${config.domain}/dasboard/boarding`);
    return result3.data;
  } catch (error) {
    return await error.message;
  }
};

const idle = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/idle`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const month = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/month`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const bootcamp = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/bootcamp`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const versus = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/versus`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const pendidikan = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/pendidikan`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const universitas = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/universitas`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

const jurusan = async () => {
  try {
    const result4 = await axios.get(`${config.domain}/dasboard/jurusan`);
    return result4.data;
  } catch (error) {
    return await error.message;
  }
};

export default {
  candidat,
  training,
  boarding,
  idle,
  month,
  bootcamp,
  versus,
  pendidikan,
  universitas,
  jurusan,
};
