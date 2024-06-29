import React from "react";
import { otpApi } from "../../../mocks/auth";
import { useState } from "react";

function Email({setValue}) {

  const [email,setEmail] = useState("")

  const getOTPhandler = async () => {
    try {
      const data = {
        email,
      };
      const response = await otpApi.getOTP(data);
      console.log(response);

      if (response == true) {
        setValue("2");
      }
    } catch (err) {}
  };

  return (
    <>
      <div className="text-center">
        E-mail:{" "}
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border w-60 p-2  rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center mt-5">
        <button
          className="p-2 pl-4 pr-4  text-white bg-black mx-auto rounded-md"
          type="submit"
          onClick={getOTPhandler}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Email;
