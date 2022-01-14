import { combineReducers } from "@reduxjs/toolkit";

import  {commonReducer}  from "store/slices/common";
import  {authReducer}  from "store/slices/auth";
import {alertReducer} from "store/slices/alert";

const rootReducer = combineReducers( {
    common: commonReducer,
    auth: authReducer,
    alert: alertReducer,
});

export default rootReducer;