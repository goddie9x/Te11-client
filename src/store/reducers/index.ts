import { combineReducers } from "@reduxjs/toolkit";

import  {commonReducer}  from "store/slices/common";
import  {authReducer}  from "store/slices/auth";
import {alertReducer} from "store/slices/alert";
import {helmetReducer} from "store/slices/helmet";
import {notifReducer} from "store/slices/notif";

const rootReducer = combineReducers( {
    common: commonReducer,
    auth: authReducer,
    alert: alertReducer,
    helmet: helmetReducer,
    notif: notifReducer,
});

export default rootReducer;