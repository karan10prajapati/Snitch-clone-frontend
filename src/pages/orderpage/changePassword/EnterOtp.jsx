import React from 'react'
import { useState } from 'react';
import { otpApi } from '../../../mocks/auth';
import OtpInput from 'react-otp-input';

function EnterOtp( {setValue,otp,setOtp} ) {
 

    const handleotp = async () => {
        try {
           const data={
               otp
            }

            console.log("yeh hai otp",otp)

            const response = await otpApi.checkOTP(data)
            console.log(response)

            if(response==true){
               setValue("3")
            }

        } catch (err) {
            console.log("error in enterotp",err)
        }
 }



  return (
   <>
                    {" "}
            <div className="flex gap-1 justify-center text-xl">
              Enter Your OTP :
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="flex justify-center mt-2">
              <button
                className="p-2 pl-4 pr-4  text-white bg-black mx-auto rounded-md"
                type="submit"
                onClick={handleotp}
              >
                Submit
              </button>
            </div>
   </>
  )
}

export default EnterOtp