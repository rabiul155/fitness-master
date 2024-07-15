import { useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

type NavItem = {
  nav: string;
  link: string;
};

function Navbar() {
  const navItem: NavItem[] = [
    {
      nav: "Products",
      link: "/products",
    },
    {
      nav: "Manage Product",
      link: "/manage",
    },
    {
      nav: "Cart",
      link: "/cart",
    },
    {
      nav: "Orders",
      link: "/orders",
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

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sticky top-0 z-50">
      <div className=" h-[10vh] bg-[#f6f7fb] shadow-md">
        <div className=" flex h-full justify-between items-center mx-auto w-[90%]">
          <div className=" flex items-center gap-12">
            <Link to={"/"} className="text-xl font-bold flex gap-2 ">
              Fitness
              <span className="  text-yellow-500">Master</span>
            </Link>
            <ul className="hidden md:flex justify-center items-center gap-6">
              {navItem.map((item) => (
                <li
                  className={`${
                    currentPath.includes(item.link)
                      ? "text-yellow-500"
                      : "text-gray-800"
                  } font-medium`}
                  key={item.nav}
                >
                  <Link to={item.link}>{item.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={openNav}>
            <FaBarsStaggered className="h-5 w-5 cursor-pointer md:hidden" />
          </button>
        </div>
      </div>

      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-[-100%]"
        } fixed transition-all transform ease-in-out duration-500 top-0 left-0 bottom-0 w-[80vw] h-[100vh] block md:hidden bg-[#f6f7fb]`}
      >
        <div className="ps-8 pe-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold flex gap-2 ">
              Fitness
              <span className="  text-yellow-500">Master</span>
            </h1>
            <button
              onClick={closeNav}
              className=" p-2 hover:bg-gray-200 transition duration-300 rounded-full "
            >
              <FaXmark className=" h-5 w-5" />
            </button>
          </div>
          <ul className=" flex flex-col mt-8 h-full gap-4 z-50">
            {navItem.map((item) => (
              <li
                className={`${
                  currentPath.includes(item.link)
                    ? "text-yellow-500"
                    : "text-gray-800"
                } font-medium`}
                key={item.nav}
              >
                <Link to={item.link}>{item.nav}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
