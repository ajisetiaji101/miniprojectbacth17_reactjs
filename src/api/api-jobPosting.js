import axios from "axios";
import config from "../config/config";

const list = async () => {
  // console.log("sudah sampai di apiJob");
  try {
    const result = await axios.get(`${config.domain}/jobs`);
    return result.data;
  } catch (error) {
    return error;
  }
};
const getJob = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/jobs/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createJob = async (payload) => {
  // console.log("sudah sampai di apiJob");
  try {
    const result = await axios.post(`${config.domain}/jobs`, payload);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteRow = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/jobs/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const editRow = async (payload) => {
  const jobs_id = parseInt(payload.get("jobs_id"));
  // console.log(jobid);
  try {
    const result = await axios.put(`${config.domain}/jobs/${jobs_id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateJobsNoFile = async (payload) => {
  const jobs_id = payload.jobs_id;
  try {
    const result = await axios.put(
      `${config.domain}/jobs/data/${jobs_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};
// const editRow = async (data) => {
//   try {
//     const payload = new FormData();

//     for (const key in data) {
//       payload.append(key, data[key]);
//     }

//     const result = await axios.put(
//       `${config.domain}/jobs/${data.jobs_id}`,
//       payload
//     );

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createJob,
  deleteRow,
  editRow,
  getJob,
  updateJobsNoFile,
};
