import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { LuBadgePercent } from "react-icons/lu";
import { Button } from "@mui/material";
import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaRegHeart } from "react-icons/fa";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { getCartdata, pushCart } from "../redux/slices/Cart";
import { getProductApi } from "../mocks/getProduct";
import Loader from "../components/Loader";


function Product() {
  const location = useLocation();
  const [value, setvalue] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch()
  const [card,setCard] = useState(undefined)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

 
 
  const id = location.pathname.split("/")[2];

  

  useEffect(() => {
    const getsingleProduct = async () => {
      try {
        if(!id){
          return 
        }
        const filter = {"_id" : `${id}`}
        const data = {
          page:1,
          limit:1
        }
        const res = await getProductApi.getProduct({filter,data})
        console.log("kkk",res)
        setCard(res.data.data[0])
      
        // setCard(res);
      } catch (error) {
        console.log("error in Productpage", error);
      }
    }
    getsingleProduct()
  }, [id]);


  function incvalue() {
    setvalue(value + 1);
  }



  function decvalue() {
    setvalue(value - 1);
  }

  // const userId = useSelector( (state) => { return state }).auth.user.id
 

  async function clickHandler(){

    await dispatch(getCartdata())

    await dispatch(pushCart(id,value))

  }

  return (
    <>
      {!card ? (
        <div className="w-full h-[100vh] items-center flex justify-center "><Loader /></div>
      ) : (
        <div>
           <div className="md:flex mt-10 mb-10 w-11/12 mx-auto gap-10 ">
            <div className="md:w-[80%] mx-auto w-full">
              {card && (
                <img
                  src={card.image}
                  className="w-full md:mx-auto "
                />
              )}
            </div>

            <div>
              {card && <div className="text-4xl">{card.title.longTitle}</div>}
              {card && (
                <div className="text-xl mt-5"> Rs. {card.price.mrp}</div>
              )}
              <div>(Inc. of all taxes)</div>

              <div className="flex flex-col gap-3 mt-5">
                <div className="flex gap-2 items-center  ">
                  <div className="text-gray-400">
                    <LuBadgePercent />
                  </div>
                  <div className="text-sm">
                    Get this for Rs. 1,349
                    <br />
                    Buy 2 & Get Flat 10% Off! Code: BUY2{" "}
                  </div>
                </div>

                <div className="flex gap-2 items-center ">
                  <div className="text-gray-400">
                    <LuBadgePercent />
                  </div>
                  <div className="text-sm">
                    Get this for Rs. 1,199
                    <br />
                    Buy 5 & Get Flat 20% Off! Code: BUY5{" "}
                  </div>
                </div>

                <div className="flex gap-2 items-center ">
                  <div className="text-gray-400">
                    <LuBadgePercent />
                  </div>
                  <div className="text-sm">
                    Flat 15% Off on minimum purchase of 2699/-
                    <br />
                    Code: FLAT15
                  </div>
                </div>

                <div className="flex gap-2 items-center ">
                  <div className="text-gray-400">
                    <LuBadgePercent />
                  </div>
                  <div className="text-sm">
                    Get this for Rs. 1,199
                    <br />
                    Flat 20% Off on minimum purchase of 3999/-
                    <br />
                    Code: FLAT20
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div>SIZE</div>
                <div className="flex gap-2 max-sm:overflow-x-auto">
                  <Button variant="outlined">S</Button>
                  <Button variant="outlined">M</Button>
                  <Button variant="outlined">L</Button>
                  <Button variant="outlined">XL</Button>
                  <Button variant="outlined">XXL</Button>
                </div>
              </div>

              <div className="mt-5 ">QUANTITY</div>

              <div className="flex gap-2 items-center border w-20 justify-around">
                <div className="p-2 text-xl" onClick={incvalue}>
                  +
                </div>
                <div className="text-xl">{value}</div>
                <div className="p-2 text-2xl" onClick={decvalue}>
                  -
                </div>
              </div>

              <div className="mt-4">
                <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    EMI/ PAY IN 3 OFFERS
                  </AccordionSummary>
                  <AccordionDetails>
                    or Pay ₹500 and rest later via or 3 monthly payments of ₹500
                    with UPI & Cards Accepted, Online approval in 2 minutes Or 3
                    interest free payments of ₹499.68 SVG ImageSVG Image
                  </AccordionDetails>
                </Accordion>
                <div>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      EMI/ PAY IN 3 OFFERS
                    </AccordionSummary>
                    <AccordionDetails>
                      or Pay ₹500 and rest later via or 3 monthly payments of
                      ₹500 with UPI & Cards Accepted, Online approval in 2
                      minutes Or 3 interest free payments of ₹499.68 SVG
                      ImageSVG Image
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div className="w-full bg-black text-center mt-3 text-white p-3" onClick={clickHandler}>
                ADD TO CART
              </div>
              <div className="w-full justify-center mt-3 text-red-500 border items-center flex gap-2  p-3">
                ADD TO WISHLIST <FaRegHeart />
              </div>

              <div className="w-full shadow-md mt-5 pl-2">
                <div>Estimate Delivery Date and COD Checker</div>

                <div className="mb-3  flex items-center justify-between pb-2">
                  <input
                    type="text"
                    className="w-full h-10 border placeholder:pl-3"
                    placeholder="Enter tour PIN Code"
                  />
                  <button className="bg-black text-white pl-4 pr-4 pt-2 pb-2 w-24 rounded-md">
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <div className="text-2xl text-center mt-10">RECENTLY VIEWED</div>
            </div>

            <div>
              <div className=" ml-2 mr-2  max-lg:overflow-x-auto grid lg:grid-cols-5  grid-cols-[200px_200px_200px_200px_200px_] gap-2">
                {
                  card.productImages.map((crd,i) =>{ return <div className=" " key={i}> <Card id={crd.id} name={crd.name} imgurl={crd.path}  /> </div>})
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
