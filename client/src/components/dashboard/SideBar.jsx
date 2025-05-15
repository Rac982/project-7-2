import CustomImage from "../shared/CustomImage";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default SideBar;
