import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import ICBHI from '../components/ICBHI'
import "../App.css";
import {ThemeSettings,Footer, AdminProfile} from '../components/index'
import Sidebar  from '../components/Sidebar';
import Navbar from "../components/Navbar";
import Accueil from "./Accueil"
import {links} from '../data/utils'
import { useStateContext } from "../context/contextProvider";
const Home = () => {
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  {console.log(userInfo)}
  const {activeMenu} = useStateContext();
    return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue" }}
              >
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar>

              </Sidebar>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar></Sidebar></div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar user={userInfo}/>

                

            </div>
         
         
          <div>
                <Routes>
                    <Route path="/Accueil" element={<Accueil/>}></Route>
                    <Route path="/Data" element="Data"></Route>
                    <Route path="/Performance" element="Performance"></Route>
                    <Route path="/Admin/:userId" element={<AdminProfile></AdminProfile>}></Route>
                    <Route path="/ICBHI" element={<ICBHI></ICBHI>}></Route>

                  
                    
                </Routes>
            </div>
            </div>
        </div>
   
      
    
    </div>
  );
};

export default Home;
