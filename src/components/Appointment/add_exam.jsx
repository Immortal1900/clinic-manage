import React from 'react'
import { useEffect } from 'react'

function Add_exam(props) {
  useEffect(()=>{
    console.log("ADD DIAG PROPS", props)
  },[])
  return (
    <div>
      <form >
      <div className="form-row">
                  <div className="col-md-6 mb-3">
                  <label htmlFor="">Name </label>
                  <input    required   className="form-control" type="text" name="title" id="title" onChange={props.onEdit}/>
     
                  </div>
      </div>
      <button onClick={props.handleSubmit} className='btn btn-info btn-sm'>Add</button>
     </form>

    </div>
  )
}

export default Add_exam