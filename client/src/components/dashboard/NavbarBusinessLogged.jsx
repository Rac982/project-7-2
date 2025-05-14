import { Link } from "react-router-dom";
import CustomImage from "../shared/CustomImage";

const NavbarBusinessLogged = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#89989b1a] flex justify-center items-center">
      <div
        className="w-[1440px] bg-white h-full flex"
        style={{
          boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex flex-col gap-10 px-4 py-15  items-center w-1/5 h-full border-r-1 border-[#0000001A]">
          <div>
            <CustomImage
              src="/images/business_images/logo-restaurant.png"
              className="h-[150px] w-[109.35px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <CustomImage
                src="/images/business_images/Dashboard.png"
                className="h-[20.15px] w-[20.15px]"
              />
              <span>Dashboard</span>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src="/images/business_images/Tavoli.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Tavoli</span>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src="/images/business_images/Reviews.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Recensioni</span>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src="/images/business_images/Menu.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Gestione Menu</span>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src="/images/business_images/Logout.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <nav className="flex w-full items-center justify-between py-10 px-20">
            <div>
              <h1 className="font-bold text-lg">Dashboard</h1>
            </div>
            <div>
              <CustomImage
                src="/images/business_images/Logo-TableLink.jpg"
                className="h-[60px] w-[130px]"
              />
            </div>
          </nav>
          <div className="w-full h-full flex justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBusinessLogged;
