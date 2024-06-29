import React, { useState } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(8, "Password must be 8 characters long"),
  // .matches(/[0-9]/, 'Password requires a number')
  // .matches(/[a-z]/, 'Password requires a lowercase letter')
  // .matches(/[A-Z]/, 'Password requires an uppercase letter')
  // .matches(/[^\w]/, 'Password requires a symbol').required('Required'),
});

function Signup() {

  const dispatch = useDispatch();
  const navigate=useNavigate()

  let initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const { name, email, password } = values;
    console.log("values", values);
    handleRegister(values)
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("forik", formik);

  const handleRegister = async (values) => {
    try {
      console.log("data", values);

      const result = await dispatch(register(values));

      if (result) {
        console.log("result user login success ");
        navigate('/orderpage')
      }
    } catch (error) {
      console.log("error in register", error);
    }
  };
  return (
    <>
      <form
        className="w-full flex justify-center h-screen "
        onSubmit={formik.handleSubmit}
      >
        <div className="mt-32 flex flex-col gap-3 items-center">
          <div className="text-2xl ">SIGN UP</div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <div className=" relative">
              <div className="absolute right-4 top-3">
                <CiUser />
              </div>
              <input
                type="text"
                placeholder="username"
                className="border md:w-72   p-2 rounded-md"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
              />
              <div>
                {formik.errors && formik.errors.username && (
                  <div>{formik.errors.username}</div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-4 top-3">
                <IoMdMailUnread />
              </div>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                type="text"
                placeholder="Email"
                className="border md:w-72   p-2 rounded-md  "
              />
              <div>
                {formik.errors && formik.errors.email && (
                  <div>{formik.errors.email}</div>
                )}
              </div>
            </div>

            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              type="password"
              placeholder="password"
              className="border md:w-72 p-2 rounded-md"
            />
            <div>
              {formik.errors && formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
            </div>
          </div>

          <div className="text-center">
            {" "}
            <button
              type="submit"
              className="p-2 w-40  text-white bg-black rounded-md"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
