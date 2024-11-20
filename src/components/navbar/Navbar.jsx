import "./Navbar.scss";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { navlinks } from "../../constants/navlinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-custom flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-2xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        {navlinks.map((link) => (
          <li key={link.id} className="p-3">
            {link.name}
          </li>
        ))}
      </ul>
      <div onClick={handleToggleMenu} className="block md:hidden">
        {showMenu ? (
          <AiOutlineClose size={25} onClick={handleToggleMenu} />
        ) : (
          <AiOutlineMenu size={25} onClick={handleToggleMenu} />
        )}
      </div>
      <div
        className={`fixed left-0 top-0 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transition-transform transform ${
          showMenu ? "w-[60%] translate-x-0" : "w-[60%] -translate-x-full"
        } md:hidden`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          {navlinks.map((link, index) => (
            <li
              key={link.id}
              className={`p-4 ${
                index < navlinks.length - 1 ? "border-b border-gray-600" : ""
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
