import React from "react";
import AccordionExpandIcon from "../contents/Collection/AccordionExpandIcon";
import Collcard from "../contents/Collection/Collcard";
import { BsFilterLeft } from "react-icons/bs";
import { useState,useEffect } from "react";
import { Drawer } from "@mui/material";
import { Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useSelector,useDispatch } from "react-redux";
import { getProduct } from "../redux/slices/Product";


function Collection() {
  const productsList=useSelector(state => state.product)
  const [open, setOpen] = useState(false);
  const [item, setitem] = useState("");
  const [input,setInput]  = useState("")
  const [debouncedValue, setDebouncedValue] = useState(input);
  const dispatch = useDispatch()
 
  const name = [
    "newly added ",
    "Best Selling",
    "Toprated",
    "Price(High to low)",
    "Custom",
  ];

  const changeHandler = (e) => {
   setInput(e.target.value)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const fetchData = async() => {
    try {
      const data = {
        page : 1,
        limit: 12,
      };

     const filter = { "category":{"$regex":input,"$options":"i"}}
      
      await dispatch(getProduct({filter,data},false))
     } catch (error) {
       console.log("error in taking input",error)
     }
  }

 
  useEffect(() => {
    if (debouncedValue) {
      fetchData()
    }
  }, [debouncedValue]);

 
  const handlechange = (event) => {
    setitem(event.target.value);
  };

  return (
    <>
      <div className=" mt-52 flex gap-6 justify-center  ">
        <div className="w-[300px] hidden md:block ml-20  ">
          <div className="overflow-y-scroll scrollbar-hide h-screen sticky top-28 ">
            <AccordionExpandIcon />
          </div>
        </div>  

        <div className="w-full">
          <div className=" w-11/12 max-md:mx-auto ">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search for product in this collection "
                className="w-full  h-[40px] border  pl-3"
                onChange={changeHandler}
              />
            </div>

            <div className="flex justify-between mt-10">
              <div className="hidden md:block">View As</div>
              <div className="  max-md:w-full ">

                <Box width={200}>
                  <TextField
                    select
                    label="curated for you"
                    fullWidth
                    onChange={handlechange}
                    value={item}
                    margin="none"
                    InputProps={{ style: { padding: "1px" } }}
                  >
                    {name.map((item,i) => {
                      return <MenuItem key={i}>{item}</MenuItem>;
                    })}
                  </TextField>
                </Box>
              </div>
              <div className="md:hidden border w-full relative ">
                {" "}
                <input
                  type="text"
                  placeholder="Refined By"
                  className="w-full h-full  placeholder:pl-3"
                />
                <div className="absolute top-4 right-2 text-2xl">
                  <BsFilterLeft
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                  />
                  <Drawer
                    open={open}
                    anchor="right"
                    onClose={() => setOpen(false)}
                  >
                    <AccordionExpandIcon />
                  </Drawer>
                </div>
              </div>
            </div>

             <div className="mt-10">
              <Collcard list={productsList.Product} />
            </div> 
          </div> 
        </div> 
      </div>
    </>
  );
}

export default Collection;
