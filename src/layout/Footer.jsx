import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {arr} from '../constants/footer/data'
import { CiUser } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { LuMenuSquare } from "react-icons/lu";

function Footer() {

  return (
    <>
      <div className="border-y-2 mt-40">
        <div className="flex md:flex-row flex-col  md:gap-14 gap-4 mt-14 lg:flex-wrap">

          <div className=" flex flex-col  sm:hidden ">
                { 
                  arr.map( (item,i) => { 
                     return(<Accordion disableGutters key={i}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      
                    >
                      {item.title}
                    </AccordionSummary>
                    <AccordionDetails key={i}>
                      { 
                        item.description.map( (option,i) => {
                          return (<div  key={i}>{option}</div>)
                        } )
                      }
                    </AccordionDetails>
                    </Accordion>
                  )})
                }
          </div>

               <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-6 mt-14 w-11/12 mx-auto  max-sm:hidden  "> 
                  {arr.map( (item,i) => { 
                               return(<div className=" ml-14 md:ml-0 flex flex-col gap-3 " key={i}>
                                 <div>{item.title}</div>
                   
                               <div className="flex flex-col  md:display-block">
                                   { item.description.map( (option,i) => { 
                                    return <div className="text-sm" key={i}>{option}</div>
                                   })}
                               </div>
                             </div>)
                  })}
               </div>


          
        </div>

        <div className="flex flex-col gap-5 mt-10 sm:ml-14 mb-20">
          <div className="max-md:hidden">SIGN UP AND SAVE</div>
          <div className="flex flex-col gap-5  md:block">
            <div className="text-sm max-md:hidden">
              Sign up now and be the first to know about exclusive offers,
              latest fashion trends & style tips!
            </div>
            <div className="flex gap-20 max-md:hidden">
              <div className="text-sm">Enter your E-mail</div>
              <div>
                <IoMdMailUnread />
              </div>
            </div>
          </div>
          <div className="h-1 border-y-2 max-md:hidden"></div>

          <div className="flex gap-4 text-3xl max-sm:hidden">
            <div>
              {" "}
              <FaInstagram />
            </div>
            <div>
              <FaFacebook />
            </div>
            <div>
              <AiOutlineYoutube />
            </div>
            <div>
              <CiTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
          </div>

          <div className="text-center mb-2">
            © 2024 SNITCH <br />
            Made in India, for the World 🌍
          </div>
          
        </div>
           
        <div className="sm:hidden fixed bottom-0 bg-white w-full border" > 

            <div className="l mx-auto flex justify-between  pb-7  pt-2  w-11/12"> 
                <div className="flex flex-col items-center"> 
                   <div> <CiUser /></div>
                   <div className="text-sm">Account</div>
                </div>

                <div className="flex flex-col items-center">
                   <div><BsStars /></div>
                   <div className="text-sm">New Arrival</div>
                </div>

                <div className="flex flex-col items-center"> 
                    <div><LuMenuSquare /></div>
                    <div className="text-sm">Collection</div>
                </div>

                <div className="flex flex-col items-center"> 
                    <div><CiHeart /></div>
                    <div className="text-sm">Whishlist</div>
                </div>

                <div className="flex flex-col items-center"> 
                    <div><BsList /></div>
                    <div className="text-sm">Bag</div>
                </div>
          </div>

  

         </div> 
          

      </div>
    </>
  );
}

export default Footer;


