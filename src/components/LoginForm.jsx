import React from 'react'
import '../styles/loginform.css'
import login from '../assets/login.jpg'

const LoginForm = () => {
  return (

    <div class="grid grid-cols-2 gap-4">
      
      <  div className='cover'>
        <h1>Authentification</h1>
        <input type='text' placeholder='nom utilisateur'></input>
        <input type='password' placeholder='mot de passe'></input>
        <div className='login-btn'> S'authentifier</div>
        <p  className='text'> Ou bien utiliser</p>
        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
      </div>
    
    
    
     <div className="relative w-full h-full mt-10">
       <img
          src={login}
          className="w-full h-full object-cover"
        />
    </div>
      
      
     </div>
    
 
   
  )
}

export default LoginForm
