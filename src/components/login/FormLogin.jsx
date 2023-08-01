import React from "react";
import { useState } from 'react';
import { loginFields } from "../../data/utils";
import FormAction from "./FormAction";
import Input from "./Input";
import '../../styles/loginform.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import ErrorDialog from '../ErrorDialog'

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');


const FormLogin = () => {
    const navigate=useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [errorMessage,setErrorMessage]=useState('')

    const handleCloseErrorDialog = () => {
      setShowErrorDialog(false);
    };
  
    const handleChange=(e)=>{
      
        setLoginState({...loginState,[e.target.id]:e.target.value})
        console.log(loginState['email-address'])
        console.log(loginState['password'])
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      authenticateUser();

    }
    const authenticateUser = () =>{
       axios.post('api/auth/login', {
        email:loginState['email-address'],
        password:loginState['password']
    }).then(function (response) {
       console.log(response)
       if (response.status==200) {
        localStorage.setItem('user', JSON.stringify(response.data['user']));
        navigate('/', { replace: true });
       }
      }
    
      ).catch((error) => {
        // Handle any other errors here
       
        {

              setErrorMessage(error.response.data['error'])
              setShowErrorDialog(true)
              console.log(error.response.data)
     
          
        }
      
      });
    
      


    }




  return (
  <div className="w-full flex justify-center">
    
        <form className="mt-1 space-y-6  w-6/12" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                  
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                  
                
                )
            }
        </div>
    

        <FormAction handleSubmit={handleSubmit} text="valider"></FormAction>
     

      </form>
      
      <ErrorDialog isOpen={showErrorDialog} onClose={handleCloseErrorDialog} errorMessage={errorMessage} />

    </div>
    
  )
}

export default FormLogin