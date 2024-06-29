import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Email from "./Email";
import EnterOtp from "./EnterOtp";
import NewPassword from "./NewPassword";

function ChangePassoword() {

  const [value, setValue] = useState("1");

  const [otp,setOtp] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <RiLockPasswordFill size={32} />
          <div className="text-xl">Update Your Password</div>
        </div>

        <TabContext value={value}>
          <TabList onChange={handleChange} />

          <TabPanel value="1">
              <Email setValue={setValue} />
          </TabPanel>

          <TabPanel value="2">
              <EnterOtp setValue={setValue} otp={otp} setOtp={setOtp} />
          </TabPanel>

          <TabPanel value="3">
               <NewPassword otp={otp} />
          </TabPanel>
        </TabContext>
      </div>

    </div>
  );
}

export default ChangePassoword;
