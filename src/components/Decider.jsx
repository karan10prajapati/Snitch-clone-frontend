import React from 'react'
import Adress from '../layout/Adress';
import Buycard from '../layout/Buycard';
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material'; 
import Confirmation from '../layout/Confirmation';
import Payment from '../layout/Payment';


function Decider(props) {

  const { onClose, open } = props;

  const [index,setindex] = useState(0)

  const handleClose = () => {
    onClose(false);
  };



  return ( 
    <>  

     <div className="overflow-auto ">
        <Dialog onClose={handleClose} open={open}  PaperProps={{ sx: { borderRadius: "20px", maxWidth: "700px"} }} style={{ overflow: "hidden" }}  > 
    
          {index==1 && <Adress setindex={setindex} />}
          {index==0 && <Buycard setindex={setindex} />}
          {index==2 && <Confirmation setindex={setindex} />}
          {index==3 && <Payment setindex={setindex} />}

        </Dialog>

      </div>
    </>
  )

}

export default Decider

