import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import campaignReducer from "./campaignReducer";
import contractReducer from "./contractReducer";

const reducers = combineReducers({
  profile: profileReducer,
  campaign: campaignReducer,
  contract: contractReducer,
});

export default reducers;
