import { combineReducers } from "@reduxjs/toolkit";
import  {commonReducer}  from "store/slices/common";

const rootReducer = combineReducers( {
    common: commonReducer,
});

export default rootReducer;