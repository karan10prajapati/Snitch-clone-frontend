import React, { useState } from "react";
import { FormControlLabel,RadioGroup,Radio } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { createorder } from "../redux/slices/order";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Payment() {

 const [radioValue,setRadiovalue] = useState('Cash')
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const handleRadioValue = (event) => {
  setRadiovalue(event.target.value)
}

const state = useSelector(state => state)


const handleCreateOrder = async() => {

  const userInfo = state.auth.user

  if( userInfo.id === undefined){
    navigate('/signup')
  }

  const carts = state.cart.cart

  const address = state.auth.address

  let data = {
      userId:userInfo.id,
     products:carts && carts.map((item) => {
      return {
             productId: item.products[0].productId,
             qty: item.products[0].qty
      }     
      }),
      address,
      status: "pending",
      paymentStatus: "pending"
  };

  try{
      const result = await dispatch(createorder(data));
          if(result){
              toast.success("Successfully Order Placed")
              return true

          }else{
              toast.error("Order not placed")
              return false
          }
  }catch(e){
      console.log(e);
  }
}

// const handlePay = async () =>{

//   const option = {
//     amount :  100000,
//     currency : 'INR'
//   }
//   const {data} = await axios.post('http://localhost:5000/userapp/payment/checkout',option, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
// });


//   const options = {
//     key:process.env.NEXT_PUBLIC_RAZORPAY_API_ID,
//     "amount": data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Harsh",
//     "description": "Test Transaction",
//     "image": "https://avatars.githubusercontent.com/u/86181346?v=4",
//     "order_id": data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "callback_url": "http://localhost:5000/userapp/payment/paymentVerify",
//     "prefill": {
//         "name": user.name,
//         "email": user.email,
//         "contact": "9000090000"
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// };
// var rzp1 = new window.Razorpay(options);
//     rzp1.open();
// }


const handlePayment =async () => {
  const creacteOrderPay = await handleCreateOrder();
  const pay = await handlePay();
}

const  clickhandler = () => {
  if(radioValue === 'Cash'){
    handleCreateOrder()
}else{
    handlePayment()
}
} 

  return (
    <div className="flex flex-col gap-3 m-4 p-1">
      <div className="text-2xl ">Please select a Payment Method</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Cash"
        radio={radioValue}
        onChange={handleRadioValue}
        name="radio-buttons-group"
      >
        <div className="flex mt-3 ml-[15px]">
          <FormControlLabel
            control={<Radio />}
            name="payment"
            value="netbanking"
            label="Razorpay ( Credit Card, Debit Card, UPI, Wallet, Net Banking)"
          />
        </div>
        <div className="flex mt-3 ml-[15px]">
          <FormControlLabel
            control={<Radio />}
            name="payment"
            value="Cash"
            label="Cash on delivery"
          />
        </div>
      </RadioGroup>
    
    <button className="p-2 text-white bg-cyan-400 m-2" onClick={clickhandler}>Continue</button>

    <ToastContainer />

    </div>
  );
}

export default Payment;
