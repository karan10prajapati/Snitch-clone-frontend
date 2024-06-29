import React from "react";
import Block from "../contents/home/Block";
import { me } from "../redux/slices/auth";
import { NavLink } from "react-router-dom";
import MyButton from "../components/MyButton";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex justify-center align-middle md:hidden z-0 w-full ">
          <div>
            <img
              src="https://www.snitch.co.in/cdn/shop/files/bottoms_a41f17bc-87ca-43f2-930f-f40bfab9a7a2_150x.jpg?v=1704893561"
              alt="hide"
            />
          </div>
          <div>
            <img src="https://www.snitch.co.in/cdn/shop/files/Snitch_Luxe_2_150x.jpg?v=1705644455" />
          </div>
          <div>
            <img src="https://www.snitch.co.in/cdn/shop/files/co-ords_0497f0e3-4fbb-4819-a3d2-234cc59c1018_150x.jpg?v=1704893560" />
          </div>
          <div>
            <img src="	https://www.snitch.co.in/cdn/shop/files/Shirts_503b46f0-9789-47dc-9741-ff55a7d18a21_150x.jpg?v=1704893561" />
          </div>
          <div>
            <img src="https://www.snitch.co.in/cdn/shop/files/t-shirts_280a44bb-29f1-4391-8842-1df58d10e48c_150x.jpg?v=1704893561" />
          </div>
        </div>

        <NavLink to="/collection">
          <div className="h-full w-full ">
            <img
              src="https://www.snitch.co.in/cdn/shop/files/Summer-fit-web_1400x.webp?v=1709302472"
              className="h-full w-full "
            />
          </div>
        </NavLink>

        <div className="w-full flex justify-center align-middle gap-3 p-5">
          <MyButton label={"MOST TRENDING"} />
          <MyButton label={"NEW DROP"} />
        </div>

        <Block />

        <div className="w-full flex justify-center align-middle gap-3 p-5 mt-8 overflow-x-auto">
          <MyButton label={"ACCESSORIES"} />
          <MyButton label = {"SHOES"} />
          <MyButton label = {"SUNGLASS"} />
        </div>
      </div>
    </>
  );
};

export default Home;
