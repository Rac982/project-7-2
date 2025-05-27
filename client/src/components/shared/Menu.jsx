import { useSelector } from "react-redux";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

const Menu = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 h-full w-screen bg-[#00000061] -z-10">
      <div
        className="bg-white max-w-[240px] h-screen absolute top-[66px]"
        style={{ right: "calc(50vw - (375px / 2))" }}
      >
        <div className="flex items-center justify-center gap-2 py-6">
          <CustomImage src="/images/menu_images/Profile_user.png" />
          <h1>
            {user.first_name}
            {user.last_name}
          </h1>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex w-2/3 border-b border-b-gray-300 my-4"></div>
        </div>
        <div className="flex flex-col p-6 gap-3">
          <div className="px-1 h-[50px] flex items-center gap-2 py-6 rounded-2xl hover:bg-gray-100">
            <CustomImage src="/images/menu_images/User.png" alt="" />
            <span>Profilo personale</span>
          </div>
          <div className="px-1 h-[50px] flex items-center gap-2 py-6 rounded-2xl hover:bg-gray-100">
            <CustomImage src="/images/menu_images/Notes.png" alt="" />
            <span>I miei ordini</span>
          </div>
          <Link
            to="/"
            className="px-1 h-[50px] flex items-center gap-2 py-6 rounded-2xl hover:bg-gray-100"
          >
            <CustomImage src="/images/menu_images/Logout.png" alt="" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
