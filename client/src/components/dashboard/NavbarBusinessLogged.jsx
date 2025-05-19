import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import CustomImage from "../shared/CustomImage";
=======
import SideBar from "./SideBar";
import LayoutNavbar from "./LayoutNavbar";
>>>>>>> 28de0f695b4cca6c42ae0cf34d505c5ec86f54ae

const NavbarBusinessLogged = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[100vw] min-h-[100vh] bg-[#3BC8E11A] flex justify-center items-start ">
      <div
        className="max-w-[1440px] w-full bg-white h-screen flex"
        style={{
          boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
<<<<<<< HEAD
        <div className="flex flex-col gap-10 px-4 py-15  items-center min-w-1/5 h-full border-r-1 border-[#0000001A]">
          <div>
            <CustomImage
              src="/images/business_images/logo-restaurant.png"
              className="h-[150px] w-[109.35px]"
            />
          </div>
          <div className="flex flex-col gap-5 text-wrap ">
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
              <CustomImage
                src="/images/business_images/Dashboard.png"
                className="h-[20.15px] w-[20.15px]"
              />
              <span>Dashboard</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
              <CustomImage
                src="/images/business_images/Tavoli.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Tavoli</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl ">
              <CustomImage
                src="/images/business_images/Reviews.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Recensioni</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
              <CustomImage
                src="/images/business_images/Menu.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span>Gestione Menu</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
              <CustomImage
                src="/images/business_images/Logout.png"
                className="h-[20.15px] w-[20.15px]"
              />

              <span onClick={() => navigate("/business")}>Logout</span>
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
=======
        <SideBar />
        <div className="w-full h-full overflow-auto no-scrollbar">
          <LayoutNavbar />
          <div className="w-full h-full">{children}</div>
>>>>>>> 28de0f695b4cca6c42ae0cf34d505c5ec86f54ae
        </div>
      </div>
    </div>
  );
};

export default NavbarBusinessLogged;