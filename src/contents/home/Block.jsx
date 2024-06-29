import React, { useState } from "react";
import Cardt from "./Cardt";
import { cardData2 } from "../../constants/home/data";
import { cardData } from "../../constants/home/data";
import Card from "../../components/Card";
import { useEffect } from "react";
import { getProductApi } from "../../mocks/getProduct";

function Block() {

  const [crdData,setcrdData]  = useState(undefined)

  const fetchInfo = async (Info) => {

    const response = await getProductApi.getProduct(Info);
     setcrdData(response.data.data)
  };

  useEffect(() => {
    try {
      const data = {
        page: 1,
        limit: 5,
      };
      const filter = {};
      fetchInfo({ data, filter });
    } catch (error) {
      console.log("error in home page", error);
    }
  },[]);

  return (
    <>
      <div>
        <div className=" ml-2 mr-2  max-lg:overflow-x-auto grid lg:grid-cols-5  grid-cols-[200px_200px_200px_200px_200px_] gap-2">
          {crdData && crdData.map((crd) => {
            return (
              <div className=" ">
                {" "}
                <Card
                  key={crd.id}
                  name={crd.title.shortTitle}
                  imgurl={crd.image}
                  price={crd.price.mrp}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 align-middle">
        <button className="border border-black px-4 text-base border-opacity-20 hover:border-opacity-50">
          VIEW ALL
        </button>
      </div>

      <div className=" mt-8 ">
        <div className="text-center text-4xl">Seasonal Fav's🌤️ </div>
      </div>

      <div>
        <img
          src="	https://www.snitch.co.in/cdn/shop/files/winter-collection-banner-web_1400x.webp?v=1709542065"
          className="w-full mt-8"
        />
      </div>

      <div className="w-full flex justify-center align-middle gap-3 p-5">
        <button className="border border-black rounded-full px-2 py-1 hover:bg-black hover:text-white">
          CO-ORDS
        </button>
        <div className="border border-black rounded-full px-2 py-1 hover:bg-black hover:text-white">
          SHORTS
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 mt-9 w-11/12 mx-auto gap-6  overflow-y-hidden  overflow-x-hidden ">
        {cardData2.map((data) => {
          return <Cardt key={data.id} name={data.name} imgurl={data.img} />;
        })}
      </div>

      <div className="flex justify-center mt-10 align-middle">
        <button className="border border-black px-4 text-base border-opacity-20 hover:border-opacity-50">
          VIEW ALL
        </button>
      </div>
    </>
  );
}

export default Block;
