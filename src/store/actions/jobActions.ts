import { GET_LIST_JOB, GET_JOB_DETAIL, GET_JOB_BY_QUERY } from "./actionType";
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

export const updateListJobByQuery = (payload: any) => {
  return {
    type: GET_JOB_BY_QUERY,
    payload,
  };
};

export function getJobList(pageNumber: string) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/jobs?page=${pageNumber}`);
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
export function getJobByQuery(options: any) {
  let option = "";
  if (options.description !== "") {
    option += `?description=${options.description}`;
  }
  if (options.location !== "") {
    option += `?location=${options.location}`;
  }
  if (options.type !== "") {
    option += `?type=${options.type}`;
  }

  console.log("🚀 ~ file: jobActions.ts:48 ~ getJobByQuery ~ options:", option);
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/jobs/options${option}`);
      console.log(data);

      return dispatch(updateListJobByQuery(data));
    } catch (error) {
      console.log(error);
    }
  };
}
