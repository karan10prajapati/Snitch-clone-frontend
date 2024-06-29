import { combineReducers } from "@reduxjs/toolkit";
import {reducer as authReducer} from "../slices/auth"
import {reducer as productReducer} from "../slices/Product"
import {reducer as cartReducer} from '../slices/Cart'
import { reducer as orderReducer } from '../slices/order'


export const rootReducer = combineReducers({
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
    order:orderReducer
})