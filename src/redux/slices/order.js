import { createSlice } from "@reduxjs/toolkit"
import { orderapi } from "../../mocks/order"

const initialState = {
 order:[]
}

const slice = createSlice({
    name:"order",
    initialState,
    reducers:{
       createOrder(state,action){
        console.log("kkkk")
        console.log(action.payload)
         state.order = [action.payload.data,...state.order];
       }
    }
})

export const  {reducer} = slice

export const createorder = (data) => async (dispatch,getState) => {
    try {
       const result = await orderapi.createOrder(data)
       
       if(result){
            console.log(result)
            dispatch(slice.actions.createOrder(result))
            return true
       }else{
        return false;
       }

       
    } catch (error) {
       console.log("error in orderSlice",error)
    }
  }

