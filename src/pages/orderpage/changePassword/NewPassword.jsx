import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { otpApi } from "../../../mocks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NewPassword({otp}) {

  let initialValues = {
    newpassword: " ",
    confirmpassword: " ",
  };
 

  const validationSchema = Yup.object({
    newpassword: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("Required"),
    confirmpassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("newpassword"), null], "Passwords must match"),
  });


 const onSubmit=async (values)=>{ 
     try {

         const data ={
              newPassword:values.newpassword,
              code:Number(otp)
         }

     const response = await otpApi.changePassword(data)
     console.log(response)
     
     if(response==true){
        toast.success("Password updated successfully")
     }

     } catch (error) {
         console.log("error ",err)
     }
 }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.errors);

  return (
    <>
      <form
        className="flex flex-col items-center gap-6  pb-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-1 items-center">
          <div className="text-xl font-medium">{/* {email} */}</div>
        </div>

        <div>
          <div className="text-sm">New Password</div>
          <input
            type="password"
            className="w-60 border p-1 rounded-md"
            placeholder="Enter New Password"
            name="newpassword"
            onChange={formik.handleChange}
          />
          <div>
            {formik.errors && formik.errors.newpassword && (
              <div>{formik.errors.newpassword}</div>
            )}
          </div>
        </div>

        <div>
          <div className="text-sm">Confirm New Password</div>
          <input
            type="password"
            className="w-60 border p-1 rounded-md"
            placeholder="Confirm New Password"
            name="confirmpassword"
            onChange={formik.handleChange}
          />
          <div>
            {formik.errors && formik.errors.confirmpassword && (
              <div>{formik.errors.confirmpassword}</div>
            )}
          </div>
        </div>

        <button
          className="p-2 pl-4 pr-4 rounded-sm text-white bg-black"
          type="submit"
        >
          Update
        </button>
      </form>

      <ToastContainer />
    </>
  );
}

export default NewPassword;
