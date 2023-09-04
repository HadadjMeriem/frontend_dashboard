import React, { useEffect } from "react";
import { AiFillNotification, AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AdminProfile } from ".";
import { useStateContext } from "../context/contextProvider";
import { Navigate, useNavigate } from "react-router-dom";

import pic from "../data/picture.png";
const MenuButton = ({ title, customFunc, icon, color }) => (
    <TooltipComponent content={title} position="BottomCenter">
   
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-lg p-3 hover:bg-light-gray"
      >
   
            {icon} 
      </button>
    </TooltipComponent>
  );
  

const Navbar = ({user}) => {
  {console.log(user)}
  const navigate=useNavigate()
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
   useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
   }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <MenuButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActive) => !prevActive)}
        color="#5703C1"
        icon={<AiOutlineMenu></AiOutlineMenu>}
      ></MenuButton>

      <div className="flex space-x-2 ">
       
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              handleClick("adminProfile");
              navigate(`/Admin/${user?.id}`);
            }}
          >
            <img className="rounded-full w-8 h-8" src={pic} />
            <p>
              <span className="text-gray-400 text-14">Bonjour, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {user.username}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {console.log(activeMenu)}
        {console.log(isClicked)}
        {isClicked.adminProfile }
      </div>
    </div>
  );
};

export default Navbar;
