import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import campaignReducer from "./campaignReducer";

const reducers = combineReducers({
  profile: profileReducer,
  campaign: campaignReducer

});

export default reducers;
