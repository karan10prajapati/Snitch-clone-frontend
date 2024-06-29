import { createSlice } from "@reduxjs/toolkit"
import { getProductApi } from "../../mocks/getProduct"

const initialState = {
    Product:[],
    paginator:{}
}

const slice = createSlice({
    name:"getProducts",
    initialState,
    reducers:{
        pushProduct(state, action) {
            state.Product.push(...action.payload.data) 
        },
        setPaginator(state,action){
            state.paginator = action.payload
        },
        setProduct(state,action) {
           state.Product = [...action.payload.data]
        }

    }
})

export const {reducer} = slice


// All Function for interact the frontend

export const getProduct = ({data,filter},isPush) => async (dispatch) => {
    try {
    
        const result = await getProductApi.getProduct({data,filter})

        if(result){
            await dispatch(slice.actions.setPaginator(result.data.paginator))
            if(isPush){
                await dispatch(slice.actions.pushProduct(result.data))
               
            }else{
                await dispatch(slice.actions.setProduct(result.data))
    
            }
            
        }

        
    } catch (error) {
        console.log("error in Productslice",error)   
    }
}