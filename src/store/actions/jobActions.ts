import { GET_LIST_JOB, GET_JOB_DETAIL } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const updateJobState = (payload: any) => {
  return {
    type: GET_LIST_JOB,
    payload,
  };
};

export const updateJobDetail = (payload: any) => {
  return {
    type: GET_JOB_DETAIL,
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

export function getJobDetail(id: string) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/jobs/${id}`);
      return dispatch(updateJobDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
}
