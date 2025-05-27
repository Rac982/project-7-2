import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomImage from "../shared/CustomImage";
import Menu from "../shared/Menu";

const Navbar = () => {
  const [selectMenu, setSelectMenu] = useState(false);

  const toggleMenu = () => {
    setSelectMenu((p) => !p);
  };

  return (
    <nav className="flex justify-center w-full h-[66px] relative z-20">
      <div className="flex items-center justify-between min-w-[375px]  bg-primary px-5 relative">
        <div>
          <Link to="/private/categories">
            <CustomImage src="/images/logo-restaurant2.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Link to="/private/cart">
              <CustomImage src="/images/Vector.png" alt="cart" />
            </Link>
          </div>
          <div className="cursor-pointer flex justify-end items-center">
            <div onClick={toggleMenu}>
              {selectMenu ? (
                <CustomImage
                  src="/images/Delete.png"
                  alt="menu"
                  className="text-white"
                />
              ) : (
                <CustomImage
                  src="/images/Menu.png"
                  alt="menu"
                  className="h-[25px]"
                />
              )}
            </div>
            {selectMenu && <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
