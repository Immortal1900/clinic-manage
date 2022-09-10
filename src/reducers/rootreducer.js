import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import {
  personDetailsReducer,
  reportDetailsReducer,
} from "./petientdetailsReducer";
import { loginDetailsReducer } from "./loginDeyailsReducer";
import Loading from './loading';


import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  personDetails: personDetailsReducer,
  reportDetails: reportDetailsReducer,
  loginDetails: loginDetailsReducer,
  Loading
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["personDetails", "reportDetails"],
};

export default persistReducer(persistConfig, rootReducer);
