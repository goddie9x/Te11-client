import { combineReducers } from "@reduxjs/toolkit";

import  {commonReducer}  from "store/slices/common";
import  {authReducer}  from "store/slices/auth";

const rootReducer = combineReducers( {
    common: commonReducer,
    auth: authReducer,
});

export default rootReducer;