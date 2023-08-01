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
import { TEInput, TERipple } from "tw-elements-react";

const LoginV2 = () => {

    const navigate=useNavigate();
    const responseGoogle=(response)=>{

      console.log(response);
      localStorage.setItem('user', JSON.stringify(jwt_decode(response.credential)));
      var decodedHeader = jwt_decode(response.credential);
      console.log(decodedHeader);
      const { name, sub, picture } = decodedHeader;
         navigate('/', { replace: true });
        };

  return (
    <section className="h-full  bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* <!-- Left column container--> */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  {/* <!--Logo--> */}
                  <div className="text-center">
                  <Header heading="Se connecter à votre compte"
                    paragraph="Vous n'avez pas un compte? "
                    linkName="S'inscrire"
                    linkUrl="/signup">

                    </Header>
                  </div>
                <FormLogin>

                </FormLogin>
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

              {/* <!-- Right column container with background and description--> */}
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-indigo-800"
               
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    Notre application vous permet d'analyser efficacement les sons pulmonaires
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="w-full h-full mt-20 ">
                 <img
                 src={lung}
                   className="w-full h-full  mt-20"
                 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default LoginV2