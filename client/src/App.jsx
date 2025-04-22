import { Route, Routes } from "react-router-dom";
import Private from "./layout/Private";
import Public from "./layout/Public";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/private/Home";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/private" element={<Private />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;