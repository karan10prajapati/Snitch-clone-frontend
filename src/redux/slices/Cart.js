import { createSlice } from "@reduxjs/toolkit"
import { cartapi } from "../../mocks/cart"
import { getProductApi } from "../../mocks/getProduct"


const initialState = {
    cart:[],
    loading:true,
}

const slice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       getProductList(state,action){
        state.cart = [...action.payload]
        state.loading = false
       }
    }
})

export const  {reducer} = slice



// All Function for interact the frontend

export const pushCart = (productId,value) => async (dispatch,getState) => {
  try {
    const userId = getState().auth.user.id
    const cartItem = getState().cart.cart
    const exist = cartItem.filter((item) => { return item.products[0].productId == productId })
 
    if(exist.length !== 0){

        const cartId = exist[0].id
        const preValue = exist[0].products[0].qty
         
        await cartapi.updateCart(cartId,productId,preValue+value)
    }
    else{
       await cartapi.pushCart(userId,productId,value)
    console.log("nahi mila")
    }

  } catch (error) {
    
  }
}

export const getCartdata = () => async (dispatch,getState) => {
    
    try {
         
         const userId = getState().auth.user.id
         if (userId){
            const cartInfo = await cartapi.getCartdata(userId);
            

            if(cartInfo.data.data.data.length !== 0 ){
                dispatch(slice.actions.getProductList(cartInfo.data.data.data))
            }
             
         }

        
    } catch (error) {
      console.log("error in getcartdata", error)   
    }
}

export const getcartProduct =() => async(dispatch,getState) =>{

try {
    const idArray = getState().cart.cart.map((item) => {return item.products[0].productId })
    const filter = {"_id":idArray}
    const data ={
        limit:idArray.length,
        page:1
    }
    const response = await getProductApi.getProduct({data,filter})
    return response.data.data
  
} catch (error) {
    console.log("error in fetching cart product",error)
}
  
   
}








