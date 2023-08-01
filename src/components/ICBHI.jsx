import React from 'react'
import BarGraph from './charts/BarGraph'
import BarGraphPath from './charts/BarGraphPath'

const ICBHI = () => {
  return (
    <div>
        <div>
            <h1 className='flex ml-20 mt-10 text-2xl pb-5 font-semibold ui-sans-serif'> Distribution des classes</h1>
        </div>
        <div className='flex justify-center gap-10 pt-10 pb-10'>
        <BarGraph/>
        <BarGraphPath/>

        </div>
 
      

    </div>
  )
}

export default ICBHI