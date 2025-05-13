import { Outlet } from "react-router-dom";
import NavbarBusinessLogin from "../components/dashboard/NavbarBusinessLogin";

const PublicBusiness = () => {
  return (
    <>
      <NavbarBusinessLogin />
      <main className="bg-[#3BC8E11A] w-full h-[calc(100vh-100px)] flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};

export default PublicBusiness;
