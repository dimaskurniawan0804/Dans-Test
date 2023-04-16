import {
  GET_JOB_BY_QUERY,
  GET_JOB_DETAIL,
  GET_LIST_JOB,
} from "../actions/actionType";

const jobState = {
  jobList: [],
  jobDetail: {},
};

export function jobReducer(state = jobState, action: any) {
  // console.log(action.payload, "REDUCER");

  switch (action.type) {
    case GET_LIST_JOB:
      return {
        ...state,
        jobList: action.payload,
      };
    case GET_JOB_DETAIL:
      // console.log("REDUCER JOB DETAIL :", action.payload);
      return {
        ...state,
        jobDetail: action.payload,
      };
    case GET_JOB_BY_QUERY:
      console.log("REDUCER JOB QUERY :", action.payload);

      return {
        ...state,
        jobList: action.payload,
      };
    default:
      return state;
  }
}
