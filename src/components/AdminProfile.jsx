import React,{useState,useEffect} from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { useParams,useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';
import image from '../data/picture.png'
const randomImage='https://source.unsplash.com/1600x900?technology'
const activeBtnStyles='bg-indigo-800 text-white font-bold p-2 rounded-lg w-40 outline-none'
const notActiveBtnStyles='bg-primary mr-4  text-black font-bold p-2 rounded-lg w-40 outline-none'



const AdminProfile = () => {
  const [user,setUser]=useState(null);
  const [pins,setPins]=useState(null);
  const [text,setText]=useState('Created');
  const [activeBtn,setActiveBtn]=useState('created');
  const navigate=useNavigate();
  const {userId}=useParams();

  return (

      <div  className='relative pb-2 h-full justify-center items-center' >
        <div className='flex flex-col pb-5'>
          <div className="relative flex flex-col mb-7">
            <div className='flex flex-col justify-center items-center'>
              <img src={randomImage} className='w-full h-70 2xl:h-510 shadow-lg'>
  
              </img>
              {
                user?.image ?(
                  <img className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover' src={user?.image}/>
                ):(
                  <img className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover' src={image}/>
                )
              }
           
              <h1 className='font-bold text-3xl text-center mt-3'> {}</h1>
              <div className='absolute top-0 z-1 right-0'>
                
              </div>
  
          
            </div>
            <div className="text-center mb-7">
              <button type='button' onClick={(e)=>{setText(e.target.textContent);setActiveBtn('Informations du profil')}} className={`${activeBtn==='Informations du profil' ? activeBtnStyles : notActiveBtnStyles}`}>
                   
              Informations du profil
  
              </button>
              <button type='button' onClick={(e)=>{setText(e.target.textContent);setActiveBtn('Tests effectués')}} className={`${activeBtn==='Tests effectués' ? activeBtnStyles : notActiveBtnStyles}`}>
                   
              Tests effectués
  
              </button>
  
  
            </div>
            {
              pins?.length ? (
                <div className='px-2'>
                
                </div>
              ) :(
                <div className='flex justify-center font-bold items-center w-full text-xl mt-2'>
                  No Pins Found
  
                </div>
              )
            }
       
  
          </div>
        </div>
  
      </div>
  )
}

export default AdminProfile