import React from "react";
import { useState } from 'react';
import { signupFields } from "../../data/utils";
import FormAction from "./FormAction";
import Input from "./Input";
import '../../styles/loginform.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Popup from "../Popup";
import ErrorDialog from '../ErrorDialog'

const fields=signupFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');


const FormSignup = () => {
     const customMessage = (
    <>
      <h2 className="text-2xl font-bold mb-4">This is a Customized Popup!</h2>
      <p>Compte créé avec succès.</p>
      <p>Veuillez vérifier votre compte par email.</p>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => alert('Annuler')}
      >
        Annulez
      </button>
    </>
    );
    const navigate=useNavigate();
    const [signupState,setSignupState]=useState(fieldsState);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const[message,setMessage]=useState('')
    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };
    const handleCloseErrorDialog = () => {
      setShowErrorDialog(false);
    };
  

    const handleChange=(e)=>{
      setSignupState({...signupState,[e.target.id]:e.target.value})
      console.log(signupState['email-address'])
      console.log(signupState['password'])
      console.log(signupState['username'])
      console.log(signupState['confirm-password'])
  
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      registerUser();

    }
    const registerUser = () =>{
      axios.post('api/auth/register', {
        email:signupState['email-address'],
        username:signupState['username'],
        password:signupState['password'],
        confirm_password:signupState['confirm-password']

    }).then(function (response) {
       console.log(response)
       if (response.status==201) {
           {handleOpenPopup()}
           setMessage('Compte créé avec succès veuillez vérifier votre email')
           console.log('utilisateur créé ')
       }
      }
    
      ).catch((error) => {
        // Handle any other errors here
        if (error.response.status==409)
        {
          setErrorMessage('Ce nom ou mail d utilisateur existe')
          setShowErrorDialog(true)
          console.log('Ce nom ou mail d utilisateur existe')
          
        }else{
          if (error.response.status==411)
          {
            setErrorMessage('Le mot de passe doit contenir au moins six caractères')
            setShowErrorDialog(true)
            console.log('')

          }
          else{
          
            {
              setErrorMessage(error.response.data['error'])
              setShowErrorDialog(true)
              console.log(error.response.data)
  
            }
            
          }
        }
      
      });
    
    }




  return (
  <div class="w-full flex justify-center">
    
        <form className="mt-1 space-y-6  w-6/12" onSubmit={handleSubmit}>
        <div className="space-y-4">
            {
                fields.map(field=>
                  
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
    

        <FormAction handleSubmit={handleSubmit} text="SignUP"></FormAction>
      

      </form>
      
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} message={message} />
      <ErrorDialog isOpen={showErrorDialog} onClose={handleCloseErrorDialog} errorMessage={errorMessage} />
      
    </div>
    
  )
}

export default FormSignup