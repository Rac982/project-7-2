import CustomImage from "../shared/CustomImage";

const LayoutNavbar = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <nav className="flex w-full items-center justify-between py-10 px-20 max-w-[972px] ">
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
  );
};

export default LayoutNavbar;
