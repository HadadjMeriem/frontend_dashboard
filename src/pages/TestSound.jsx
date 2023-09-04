import React from "react"
import { useState } from "react"
import analyses from '../data/analyses.svg'
import axios from 'axios';
import lung from '../data/lung.svg'

const TestSound= ({user,type,split}) => {
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    {console.log(userInfo)}
    const [selectedFile, setSelectedFile] = useState(null);
    const [classificationResult, setClassificationResult] = useState('');
    const [realValue,setRealValue]=useState('');
    const [showDiv, setShowDiv] = useState(false);
    const [showForm,setShowForm]=useState(true)
    {console.log(type)}
     console.log(type)

    const handleCancelClick = () => {

      setShowDiv(false);
      setShowForm(true);
    };
    const handleSaveClick=()=>{
      {console.log(classificationResult)}
      {console.log(realValue)}
      {console.log(userInfo.id)}
      axios.post('api/sons/save', {
        audio:'audio',
        userId:userInfo.id,
        predict:classificationResult,
        correct:realValue
    }).then(function (response) {
       console.log(response)
      }
    
      ).catch((error) => {
        // Handle any other errors here
       
        {
              console.log(error.response.data)
     
          
        }
      
      });
    

    }

  
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleFileUpload =async ()=> {
        if (selectedFile) {
            const formData = new FormData();
            {console.log(split)}
            formData.append('audioFile', selectedFile) 
            formData.append('split',split)
            if (type=='son'){ 
            try {
              {console.log(type)}
         
               const response = await axios.post('api/predict/son', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
               });
                   // Handle the response from the server as needed
              setShowForm(false);
              setShowDiv(true);
              setClassificationResult(response.data['prediction'])
              setRealValue(response.data['label'])
              console.log(response.data);
            } catch (error) {
              console.error('Error uploading file:', error);
            }
            }
            else {
              if (type=='pathologie'){
                try {
                  {console.log(type)}
             
                   const response = await axios.post('/api/predict/pathologie', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                   });
                       // Handle the response from the server as needed
                  setShowForm(false);
                  setShowDiv(true);
                  setClassificationResult(response.data['prediction'])
                  setRealValue(response.data['label'])
                  console.log(response.data);
                } catch (error) {
                  console.error('Error uploading file:', error);
                }
              }
             
            }

              
          
          }
     
    };
   
  return(
    <div>
    <div className={` min-h-screen flex items-center justify-center bg-cover
      }` }>
        
    {showForm &&(<div className="justify-center bg-white p-8 rounded-lg shadow-lg w-1/2">
     <img
        src={analyses}
        alt="Pulmonary Illustration"
        className="max-w-full h-auto mb-8"
      />

      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-800">
        Classification des sons respiratoires
      </h2>
      <div className="flex justify-center">
      <b className="text-center">Veuillez sélectionnez un fichier contenant un seul cycle</b>
      </div>
  
      <div className="flex justify-center">
       <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      </div>
     
      <div className="flex justify-center">
      <button
        onClick={handleFileUpload}
        disabled={!selectedFile}
        className={`w-1/2  p-3 rounded-lg ${
          selectedFile ? 'bg-indigo-800 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Analyser
      </button>
      
      </div>
  
      <div>
    
   
    </div>
     
    </div>)}
    {classificationResult && showDiv &&(
    
    
          <div className="justify-center bg-white p-8 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-bold mb-4 text-center">Le résultat de classification:</h2>
          <div className="flex justify-center">
          <img className='rounded-lg w-50 h-60' src={lung}></img>
          </div>
          <p><strong>Classe prédite:</strong> {classificationResult}</p>
          <br></br>
          <p><strong>Classe réelle:</strong> {realValue}</p>
          <br></br>
          <div className="flex justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 lg-rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button  className="bg-red-500 text-white px-4 py-2 lg-rounded"  onClick={handleSaveClick}>
            Sauvegarder le résultat
          </button>
          </div>
        
          </div>
          
          
      
        
      
       
      )}
  </div>
   
  </div>
      
  )
 

}
export default TestSound