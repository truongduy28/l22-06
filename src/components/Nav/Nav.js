import React, { useLayoutEffect, useState } from "react";
import logo from "../../access/Logo_ctuet.png";
import { HiOutlineViewList } from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [btnNav, setBtnNav] = useState(false);
  const [size, setSize] = useState([0, 0]);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }

  const [width, height] = useWindowSize();

  return width <= 768 ? (
    <div>
      <div className="flex justify-between items-center px-5 border-b-[1px]">
        <div className="nav__logo text-center ">
          <img className="w-[70px] m-auto" src={logo} alt="logo-ctut" />
          <p className="text-blue-700 font-medium		"> THƯ VIỆN </p>
        </div>
        <div
          className="nav__button border-[1px] rounded block  md:hidden"
          onClick={() => {
            setBtnNav(!btnNav);
          }}
        >
          <HiOutlineViewList size={"35px"} />
        </div>
      </div>
      <div
        className={`nav__lists bg-white ${
          btnNav
            ? " visible translate-y-[-5px] opacity-1 "
            : " invisible  opacity-0  md:visible md:opacity-1   "
        }`}
        style={{ transition: "all 0.3s" }}
      >
        <ul>
          <li className="border-b-[1px] px-2 py-2">
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className="border-b-[1px] px-2 py-2">
            <Link to="/student">TRA CỨU</Link>
          </li>
          <li className="border-b-[1px] px-2 py-2">
            <a href="">PHÒNG ĐÀO TẠO</a>
          </li>
          <li className="border-b-[1px] px-2 py-2">
            <a href="">SINH VIÊN</a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="flex justify-between items-center px-[10%] py-2 border-b-[1px] shadow ">
      <div className="nav__logo flex items-center  ">
        <img className="w-[70px] m-auto" src={logo} alt="logo-ctut" />
        <p className="text-blue-700 font-medium	mx-1 px-1 text-2xl	border-l-[2px]">
          {" "}
          THƯ VIỆN{" "}
        </p>
      </div>
      <div>
        <ul className="nav__lists flex gap-x-4">
          <li className=" px-2 py-2 ">
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className=" px-2 py-2">
            <Link to="/student">TRA CỨU</Link>
          </li>
          <li className=" px-2 py-2">
            <a href="">PHÒNG ĐÀO TẠO</a>
          </li>
          <li className=" px-2 py-2">
            <a href="">SINH VIÊN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
