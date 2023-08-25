import React, { useState, useEffect } from 'react'
import PerformanceCard from '../components/Performances/PerformanceCard'
import PrecisionGraph from '../components/charts/PrecisionGraph'
import axios from 'axios';
const activeBtnStyles='bg-indigo-800 text-white font-bold p-2 rounded-lg w-40 outline-none'
const notActiveBtnStyles='bg-primary mr-4  text-black font-bold p-2 rounded-lg w-40 outline-none'
const PerformancesPathologies = () => {
  // Sample data for PrecisionGraph
  const [activeBtn,setActiveBtn]=useState('Split officiel');
  const [dataOff, setDataOff] = useState({ metrics: {},precision:{}});
  const [dataCross, setDataCross] = useState({ metrics: {},precision:{}});
  const [imageData, setImageData] = useState(null);
  const [imageDataCross, setImageDataCross] = useState(null);
  const [precisionData,setPrecisionData]=useState({})

  
  useEffect(() => {


    axios.post('/api/performance/metrics',{
         type:'pathologie',
        split:'officiel'
    })
      .then(response => {
        setDataOff(response.data);
        setPrecisionData(response.data.precision)
        {console.log(response.data)}
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      axios.post('/api/performance/metrics',{
        type:'pathologie',
       split:'cross'
   })
     .then(response => {
       setDataCross(response.data);
       setPrecisionData(response.data.precision)
       {console.log(response.data)}
     })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
      axios.post('/api/performance/confMatrix',{
        type:'pathologie',
       split:'officiel'
       },{ responseType: 'arraybuffer' })
      .then(response => {
        const base64Image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          setImageData(`data:image/png;base64,${base64Image}`);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      axios.post('/api/performance/confMatrix',{
        type:'pathologie',
       split:'cross'
       },{ responseType: 'arraybuffer' })
      .then(response => {
        const base64Image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          setImageDataCross(`data:image/png;base64,${base64Image}`);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <div className="text-center mb-7">
              <button type='button' onClick={(e)=>{setActiveBtn('Split officiel')}} className={`${activeBtn==='Split officiel' ? activeBtnStyles : notActiveBtnStyles}`}>
                   
              Split officiel
  
              </button>
              <button type='button' onClick={(e)=>{setActiveBtn('Split 80-20')}} className={`${activeBtn==='Split 80-20' ? activeBtnStyles : notActiveBtnStyles}`}>
                   
              Split 80-20
  
              </button>
  
  
    </div>
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-8">ML Model Performance Dashboard</h1>

    <div className="flex flex-wrap -mx-4">
    <PerformanceCard metricName="Precision" percent={activeBtn === 'Split officiel' ? dataOff.metrics.precision : dataCross.metrics.precision} color={'rgb(216,191,216)'} textColor={'rgb(216,191,216)'} />
    <PerformanceCard metricName="Accuracy" percent={activeBtn === 'Split officiel' ? dataOff.metrics.accuracy : dataCross.metrics.accuracy} color={'#fdba74'} textColor={'#fdba74'} />
    <PerformanceCard metricName="Recall" percent={activeBtn === 'Split officiel' ? dataOff.metrics.recall : dataCross.metrics.recall} color={'#f97316'} textColor={'#f97316'} />
    <PerformanceCard metricName="ICBHI Score" percent={activeBtn === 'Split officiel' ? dataOff.metrics.ICBHI : dataCross.metrics.ICBHI} color={'#2e1065'} textColor={'#2e1065'} />
    </div>

  </div>
  
  <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Confusion Matrix</h2>
      <div className="max-w-full">
         <img className='w-full h-full'  src={activeBtn === 'Split officiel' ? imageData :imageDataCross}
          alt="Confusion Matrix"
          style={{ maxWidth: '500px' }} />

      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Precision per Class</h2>
      {console.log(Object.values(precisionData))}
     
      <div className='h-full w-full'>
      <PrecisionGraph labels={activeBtn === 'Split officiel' ? Object.keys(dataOff.precision):Object.keys(dataCross.precision)} precisionData={activeBtn === 'Split officiel' ? Object.values(dataOff.precision) :Object.values(dataCross.precision)} />
      
      </div>
     
      
    </div>
  </div>
</div>
    <div/>
    
  </div>
  )
}

export default PerformancesPathologies