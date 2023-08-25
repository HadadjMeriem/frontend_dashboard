import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../data/picture.png'
import lung from '../data/lung.svg'
const randomImage='https://source.unsplash.com/1600x900?technology'
const activeBtnStyles='bg-indigo-800 text-white font-bold p-2 rounded-lg w-40 outline-none'
const notActiveBtnStyles='bg-primary mr-4  text-black font-bold p-2 rounded-lg w-40 outline-none'



const AdminProfile = () => {
  const [user,setUser]=useState(null);
  const [tests,setTests]=useState(null);
  const [text,setText]=useState('Created');
  const [activeBtn,setActiveBtn]=useState('Informations du profil');
  const navigate=useNavigate();
  const {userId}=useParams();
   useEffect(() => {
    // Fetch user data here and update the setUser state
    console.log(userId)
    // Fetch the list of tests associated with the user's profile
      axios.post('/api/sons/user', {
       idUser:userId
     
      })
      .then(response => {
        setTests(response.data.tests); // Assuming the API returns an array of tests
        console.log(response.data.tests)
      })
      .catch(error => {
        console.error('Error fetching tests:', error);
      });
      axios.post('/api/users/id',{
        id:userId
      
       }).then(response => {
        setUser(response.data.user); // Assuming the API returns an array of tests
        console.log(user)
      }).catch(error => {
        console.error('Error fetching user:', error);
      });

   }, [userId]);

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
            {activeBtn === 'Informations du profil' && (
              <div className="flex items-center justify-center">
                   <div className="w-1/2 bg-white shadow-md rounded-lg p-6">
               <h2 className="text-2xl font-semibold mb-3">Informations du profil</h2>
               {/* Profile information */}
               <p className="text-gray-600 mb-2">
                 <span className="font-semibold">Nom utilisateur:</span> {user?.username}
               </p>
               <p className="text-gray-600 mb-2">
                 <span className="font-semibold">Email:</span> {user?.email}
               </p>
               <p className="text-gray-600 mb-2">
                 <span className="font-semibold">Confirmation email:</span> 12/08/2023
               </p>
               {/* ... Other profile attributes ... */}
             </div>
              </div>
            
              )}
            
        {activeBtn === 'Tests effectués' && (
          <div>
            {
              tests?.length ? (
                
                <div className='px-2'>
              
          <h2 className="text-xl font-semibold mb-3 text-center">Tests effectués :</h2>

          <div className="flex justify-center space-x-4 sm:space-x-2 md:space-x-6 lg:space-x-8">
            {tests.map(test => (
              <div key={test.id} className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
                {/* Render individual test information */}
              
                <p className="text-lg font-medium"><strong className="text-indigo-800">Effectué le:</strong>{test.date}</p>
                <p className="text-lg font-medium"><strong className="text-indigo-800">Résultat de la prédiction:</strong>{test.predicted}</p>
                <p className="text-lg font-medium"><strong className="text-indigo-800">La vrai classe:</strong>{test.correct}</p>
                <div className='flex justify-center'>
                <img src={lung} className='w-1/2'></img>
                </div>
                {/* ... Other test attributes ... */}
              </div>
            ))}
          </div>
                </div>
              ) :(
                <div className="flex justify-center font-bold items-center w-full text-xl mt-2">
                No Tests Found
              </div>
              )
            }
            </div>
        )}
       
  
          </div>
      
        </div>
  
      </div>
  )
}

export default AdminProfile