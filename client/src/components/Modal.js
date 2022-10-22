import React from 'react'
import './modal.css'

function Modal({setState}) {
 
  return (
    <div className='wrap1'>
      <div className="modal1">
      <div className='row'>
        <div className='col-md-4'>
            Enter the Weight
        </div>
        <div className='col-md-4'>
        <input type="text" name="weight" id="weight" />

        </div>
       </div>
       <div className='row'>
       <div className='col-md-4'>
            Description of the waste
        </div>
        <div className='col-md-4'>
        <input type="text" name="description" id="weight" />

        </div>
       </div>
       <div className='text-r'>
          <button  onClick={()=>{setState(false)}} className='btn btn-danger mx-2'>
            Close
          </button>
          <button className='btn btn-success'>
            Submit
          </button>
        </div>
      </div>
       
    </div>
  )
}

export default Modal