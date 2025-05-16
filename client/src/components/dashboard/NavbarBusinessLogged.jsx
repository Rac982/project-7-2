import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import LayoutNavbar from "./LayoutNavbar";

const NavbarBusinessLogged = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[100vw] max-h-[100vh] bg-[#3BC8E11A] flex justify-center items-center">
      <div
        className="w-[1440px] bg-white h-full flex"
        style={{
          boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        <SideBar />
        <LayoutNavbar children={children} />
      </div>
    </div>
  );
};

export default NavbarBusinessLogged;
