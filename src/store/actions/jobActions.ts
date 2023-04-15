import { GET_LIST_JOB } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const updateJobState = (payload: any) => {
  return {
    type: GET_LIST_JOB,
    payload,
  };
};

export function getJobList() {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/jobs`);
      return dispatch(updateJobState(data));
    } catch (error) {
      console.log(error);
    }
  };
}
