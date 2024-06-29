import React from "react";
import { CiUser } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TemporaryDrawer( {setOpen}) {
  
  return (
    <div className="w-72 ">
      <div className="pt-5 flex justify-between items-center border-b pb-5 ml-3 mr-3">
        <div className="flex gap-3 pl-3 items-center">
          <CiUser />
          <div>LOG IN</div>
        </div>
        <div className="pr-4" onClick={ () => {setOpen(false)}}>
          <MdCancel />
        </div>
      </div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">NEW ARRIVALS</div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">BEST SELLING</div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">SNITCH LIXUE</div>

      <div className="pl-3 pr-3">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            SHOP      
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">NEW ARRIVALS</div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">BEST SELLING</div>

      <div className="pt-5 pb-5 border-b pl-3 ml-4 mr-4">SNITCH LIXUE</div>
    </div>
  );
}
