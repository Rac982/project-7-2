import { Outlet } from "react-router-dom";
import NavbarBusinessLogged from "../components/dashboard/NavbarBusinessLogged";

const PrivateBusiness = () => {
  return (
    <>
      <NavbarBusinessLogged>
        <main>
          <Outlet />
        </main>
      </NavbarBusinessLogged>
    </>
  );
};

export default PrivateBusiness;
