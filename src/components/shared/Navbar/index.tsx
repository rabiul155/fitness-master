import { useState } from "react";

import { Link } from "react-router-dom";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

type NavItem = {
  nav: string;
  link: string;
};

function Navbar() {
  const navItem: NavItem[] = [
    {
      nav: "Home",
      link: "/",
    },
    {
      nav: "product",
      link: "/product",
    },
    {
      nav: "Manage Product",
      link: "/product/management",
    },
    {
      nav: "Cart",
      link: "/cart",
    },
    {
      nav: "About",
      link: "/about",
    },
  ];

  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="sticky top-0 z-50">
      <div className=" w-[100%] h-[12vh] bg-[#141c27] shadow-md">
        <div className=" flex h-full justify-between items-center mx-auto w-[90%]">
          <div className=" flex items-center gap-12 w-full h-[100%] text-white">
            <h1 className="text-lg font-bold flex gap-2 ">
              Fitness
              <span className="  text-yellow-500">Master</span>
            </h1>
            <ul className="hidden md:flex justify-center items-center gap-6">
              {navItem.map((item) => (
                <li className="nav-link" key={item.nav}>
                  <Link to={"/#"}>{item.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={openNav}>
            <FaBarsStaggered className="h-6 w-6 text-white cursor-pointer md:hidden" />
          </button>
        </div>
      </div>

      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-[-100%]"
        } fixed transition-all transform ease-in-out duration-500 top-0 left-0 bottom-0 w-[80vw] h-[100vh] block md:hidden bg-[#141c27]`}
      >
        <div className="px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg text-white font-bold flex gap-2 ">
              Fitness
              <span className="  text-yellow-500">Master</span>
            </h1>
            <button onClick={closeNav} className=" p-4 rounded-full ">
              <FaXmark className=" h-6 w-6 text-white font-semibold " />
            </button>
          </div>
          <ul className=" flex flex-col text-white h-full gap-4 z-50">
            {navItem.map((item) => (
              <li className="nav-link-mobile" key={item.nav}>
                <Link to={"/#"}>{item.nav}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
