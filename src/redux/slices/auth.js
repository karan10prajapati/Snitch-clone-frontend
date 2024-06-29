import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../mocks/auth"

const initialState = {
    user:{},
    address:{}
}

const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getUser(state,action){
           state.user = action.payload
        },
        addAddress:(state,action) => {
          state.address = action.payload
        }

    }
})

export const {reducer} = slice


// All Function for interact the frontend

export const register = (data) => async (dispatch) => {
    try {
        const result = await authApi.register(data)
        

        if(result){
            return true
        }

        
    } catch (error) {
        
    }
}

export const login = (data) => async (dispatch) => {
    try {
        const result = await authApi.login(data)
        console.log("result in loginSlice",result)

        if(result){
            return result
        }

        
    } catch (error) {
        console.log("error in loginslice",error)   
    }
}

export const me = (token) => async (dispatch) => {
    try {
        const result = await authApi.me(token)
       

        if(result.data.status === "SUCCESS"){
          dispatch(slice.actions.getUser(result.data.data)) 
        }

    } catch (error) {
        console.log("error in meslice",error)   
    }
}

export const addingAddress =(data)=>async(dispatch) =>{
  try {
      const response = await dispatch(slice.actions.addAddress(data))
      return true
  } catch (error) {
     console.log("error in adding adress slice ", error)
  }
}

