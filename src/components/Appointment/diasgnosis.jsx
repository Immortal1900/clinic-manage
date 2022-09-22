import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAllDiagnosis } from '../../Service/dropdown_data'
import './appointment.css';
function Diagnosis(props) {
const [ diagnosis,setDiagnosis ] = useState([]);
const [diagnoisis, setSelecteddiagnoisis] = useState();
  const [stateupdate,setStateUpdated] = useState(1)
const [init,setinit] = useState(false);
useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getalldiagnosis();
},[])
useEffect(()=>{
  console.log("STATE UPDATED",props.selectedDiagnosisList);
  setStateUpdated(()=>stateupdate+1)

},[props.selectedDiagnosisList])

const getalldiagnosis = ()=>{
  getAllDiagnosis(1).then((res)=>{
  console.log(res)
  setDiagnosis(()=>res);
  setinit(true);
})
}
const checkAlreadySelected=(id)=>{
 let found = props.selectedDiagnosisList.includes(id) ?  true:  false;
 return found;
}


const addtoselecteddiagnosis=(e)=>{
  e.preventDefault();
    props.setSelectedDiagnosisList(()=>[...props.selectedDiagnosisList,diagnoisis ])
}

const getTitle=(id)=>{
  let obj = diagnosis.find(obj => obj.id == id);
  if(obj){
   return obj.title
  }else{
    return ""
  }

}



  return (

      <div className="p-lg-5">
        <div className="row">
          <div className="col-7">
            <div className='left-form-container'>
      <form action={addtoselecteddiagnosis}>
          {init == true ?<div className="form-row">
        <div className="col-md-8 nm-1">
          <label htmlFor="validationDefault01"></label>
          <select className='dropdown-select' name="diagnosis" id="diagnosis" onChange={(e)=>setSelecteddiagnoisis(e.target.value)} required>
            <option value="">None</option>
          {diagnosis.map((obj,key)=>{
            return(
              <option disabled = {checkAlreadySelected(obj.id)}  value={obj.id}> {obj.title} </option>

            )
          })}
                 </select>

        </div>
        <div className="col-md-4 nm-1 add-container">

        <button className='btn btn-info btn-sm' onClick={ addtoselecteddiagnosis }>
  
       Add
                 </button>
        </div>
 
    </div> :null }
    </form>
          </div>
          </div>
          <div className="col-5">
            <div className='selected-items'>
           
              { props.selectedDiagnosisList.length >=1 ? 
                props.selectedDiagnosisList.map((diag,key)=>{
                return (
                  <div >
                    {getTitle(diag)}
                  </div>
                )
                })
                :
                "No Diagnosis Selected"
              }
            </div>
          </div>
        </div>
      </div>




  
  )
}

export default Diagnosis