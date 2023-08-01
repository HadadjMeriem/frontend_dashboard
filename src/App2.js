import React, { useEffect } from "react";
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Login from './pages/Login'
import SignUp from "./pages/SignUp";
import Home from './pages/Home'
import LoginV2 from "./pages/LoginV2";
const App2 = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<Home/>}> </Route>
        <Route path="/loginV2" element={<LoginV2></LoginV2>}></Route>
       
    </Routes>
    </BrowserRouter>
    </div>
   
   );

};
export default App2;
