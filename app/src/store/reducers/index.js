import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import campaignReducer from "./campaignReducer";
import contractReducer from "./contractReducer";
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
  profile: profileReducer,
  campaign: campaignReducer,
  contract: contractReducer,
  loading: loadingReducer,
});

export default reducers;
