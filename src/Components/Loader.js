import React from 'react'
import loader from '../Loaders/mainLoader.gif'
const Loader = () => {
  return (
    <div className='text-center'>
      <img src={loader} style={{width:"200px"}}/>
    </div>
  )
}

export default Loader
