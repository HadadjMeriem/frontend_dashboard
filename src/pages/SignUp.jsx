import Header from "../components/SignUp/Header";
import FormSignup from "../components/SignUp/FormSignup";
import React from "react";
import login from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import lung from '../data/lung.svg'
const SignUp= () => {
  return (
    <section className="h-full  bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* <!-- Left column container--> */}
            

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
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  {/* <!--Logo--> */}
                  <div className="text-center">
                  <Header heading="Créer un nouveau compte"
                    paragraph="Vous avez déja un compte? "
                    linkName="Se connecter"
                    linkUrl="/loginV2">

                    </Header>
                  </div>
                <FormSignup>
                </FormSignup>

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

export default SignUp