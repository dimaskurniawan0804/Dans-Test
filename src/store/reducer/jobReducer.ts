import { GET_LIST_JOB } from "../actions/actionType";

const jobState = {
  jobList: [],
};

export function jobReducer(state = jobState, action: any) {
  // console.log(action.payload, "REDUCER");

  switch (action.type) {
    case GET_LIST_JOB:
      return {
        jobList: action.payload,
      };
    // case REGISTER_USER:
    //   return {
    //     ...state,
    //     isSuccessRegister: action.payload.isSuccessRegister,
    //   };
    default:
      return state;
  }
}
