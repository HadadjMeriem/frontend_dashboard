import Header from '../components/login/Header'
import FormLogin from '../components/login/FormLogin'
import React from 'react'
import login from '../assets/login.jpg'
import lung from '../data/lung.svg'
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Login = () => {
    const navigate=useNavigate();
    const responseGoogle=(response)=>{

      console.log(response);
      localStorage.setItem('user', JSON.stringify(jwt_decode(response.credential)));
      var decodedHeader = jwt_decode(response.credential);
      console.log(decodedHeader);
      const { name, sub, picture } = decodedHeader;
      const doc = {
          _id:  sub,
          _type: 'user',
          userName: name,
          image: picture,
        };
         navigate('/', { replace: true });
        };

    
  return (
    
     <div className=''>
     <div class="grid grid-cols-2 gap-4">
      
      <div>
       < div className='mt-20 ml-20 mr-20 justify-center'>
      <Header heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup">

        </Header>
        <FormLogin></FormLogin>
        <div className='w-full flex justify-center mt-5'>
            <div className="shadow-2xl flex  justify-center mb-5">
            <GoogleOAuthProvider clientId="742017833085-p824ge48910njuf99m3se98sctsrf9qr.apps.googleusercontent.com">
            <GoogleLogin
                render={(renderProps) => (
                   <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none border-indigo-700 "
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                   >
                    <FcGoogle className="mr-4">Sign In with google </FcGoogle>
                    Se connecter avec google
                    </button>
                   )}
                   onSuccess={responseGoogle}
                   onFailure={responseGoogle}
                   
                >
                </GoogleLogin>
               </GoogleOAuthProvider>
            </div>
        </div>
        
      </div>
      </div>
     
      <div>
        <div className="w-full h-full mt-20 ">
       <img
          src={login}
          className="w-full h-full  mt-20"
        />
        </div>
      </div>

      
     
      

    </div>
   </div>
  )
}

export default Login