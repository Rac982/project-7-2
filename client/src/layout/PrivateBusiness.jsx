import { Outlet } from "react-router-dom";
import NavbarBusinessLogged from "../components/dashboard/NavbarBusinessLogged";

const PrivateBusiness = () => {
  return (
    <>
      <NavbarBusinessLogged>
        <main className="overflow-auto h-auto">
          <Outlet />
        </main>
      </NavbarBusinessLogged>
    </>
  );
};

export default PrivateBusiness;
