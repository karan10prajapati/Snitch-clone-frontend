import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { LuBadgePercent } from "react-icons/lu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Phone from "../components/Phone";
import { useState } from "react";

function Buycard({ setindex }) {

  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
   
    setExpanded(!expanded);
  };

  const card = {
    id: 1,
    img: "https://www.snitch.co.in/cdn/shop/files/4MSS2844-01-M29.jpg?v=1707993976",
    name: "Blackade Checks White Shirt",
    price: 1009,
  };

  return (
    <>
      <div className="w-80 bg-white h-[800px]  ">
        <div className="flex justify-between items-center w-11/12 mx-auto p-3">
          <div className="flex gap-2 items-center">
            <FaArrowLeftLong />
            <div className="text-xl ">Snitch</div>
          </div>
          <div>
            <img
              src="https://cdn.getsimpl.com/images/merchants/117242892bd5083bf3ee1c078a89a4d4/icon.png"
              className="w-8"
            />
          </div>
        </div>

        <div className="h-0.5 border"></div>

        <div>
          <Accordion expanded={expanded} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
             onClick={() =>{handleButtonClick()}}
            >
              <div className="flex  items-center gap-10">
                <div className="flex  items-center">
                  <div>
                    <AvatarGroup>
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    </AvatarGroup>
                  </div>
                  <div className="text-sm">Bill Summary</div>
                </div>
                <div className="mr-0">Rs.1009 </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-[85%] mx-auto flex gap-6">
                <div className="flex justify-between">
                  <div>
                    <img src={card.img} className="w-36" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm">Name:{card.name}</div>
                    <div className="text-sm">color:White</div>
                    <div className="text-sm">Size:MD</div>
                  </div>
                </div>
                <div>Rs.{card.price}</div>
              </div>

              <div className="text-center pt-2 pb-2 border-t" onClick={ () => {handleButtonClick()}} >CLOSE</div>

            </AccordionDetails>
          </Accordion>
        </div>

        <div className="bg-slate-100 pt-4 w-full  h-full ">
          <div className="w-10/12 mx-auto bg-white h-10 flex flex-col justify-center pl-2 ">
            <div className="flex gap-2 items-center">
              <div className="text-gray-400">
                <LuBadgePercent />
              </div>
              <div>View Coupans and Rewards</div>
            </div>
          </div>

          <div className="mt-4 w-10/12 mx-auto">Have a gift Card</div>

          {/* <div className="mt-4 w-10/12 mx-auto">
            <div>PHONE NUMBER</div>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full p-2"
            />
          </div> */}
        <div className="w-10/12 mx-auto ">
                <div>Number</div>
                   <Phone />
        </div>

          <div
            className="mt-4 w-10/12 mx-auto bg-gray-600 text-center p-2"
            onClick={() => {
              setindex(1);
            }}
          >
            Continue
          </div>

          <div className="mt-4 w-10/12 mx-auto text-sm text-center">
            {" "}
            Terms & Condition
          </div>
        </div>
      </div>
    </>
  );
}

export default Buycard;
