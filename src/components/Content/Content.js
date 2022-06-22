import React from "react";
import { Outlet } from "react-router-dom";
import background from "../../access/bg.jpg";

const Content = () => {
  return (
    <div className="">
      <div
        className="h-[300px] relative z-1 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="m-auto  px-[10%] relative mt-[-200px] z-10">
        <Outlet />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Content;
