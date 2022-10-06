import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../Service/config';
import { getAllDiagnosis } from '../../Service/dropdown_data'
import { addDiagnosis, addPersondetail } from '../../Service/fetch_general';
import AlertDialogBox from '../DailogBoxes/alertdailogbox';
import ErorrDialogBox from '../DailogBoxes/errordaologbox';
import FormPrompt from '../DailogBoxes/formprompt';
import Adddiagnosis from './add_diagnosis';
import './appointment.css';
function Diagnosis(props) {
const [ diagnosis,setDiagnosis ] = useState([]);
const [diagnoisis, setSelecteddiagnoisis] = useState();
const [stateupdate,setStateUpdated] = useState(1)
const [init,setinit] = useState(false);
const [modal,setModal]=useState({    showModal: false  });
const [adddiag,setadddiag] = useState();
const [alerts,setalerts] = useState({    dialog:false,   })
const [msg,setMsg] = useState( 
  )
const [notes,setNotes] = useState("");
const [isHovering, setIsHovering] = useState(false);

let history = useHistory();
const forceUpdate = useForceUpdate();
    
useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getalldiagnosis();
},[])
useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getalldiagnosis();
},[props.clinic_id]);


useEffect(()=>{
  if(modal?.showModal == false){
    console.log("DIAGNOISIS PROPS ARE" , props);
    getalldiagnosis();
  }
},[modal]);

useEffect(()=>{
  console.log("STATE UPDATED",props.selectedDiagnosisList);
  setStateUpdated(()=>stateupdate+1)

},[props.selectedDiagnosisList])



//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here 
  // is better than directly setting `value + 1`
}
const getalldiagnosis = ()=>{
  getAllDiagnosis(props.clinic_id).then((res)=>{
  console.log(res)
  setDiagnosis(()=>res);
  setinit(true);
})
}
const checkAlreadySelected=(id)=>{
 let found = props.selectedDiagnosisList.find(ob => ob.id == id) ?  true:  false;
 return found;
}


const addtoselecteddiagnosis=(e)=>{
  e.preventDefault();
  console.log("ADDE CALLED");
    let obj = {
      id: diagnoisis,
      notes: notes
    }
    props.setSelectedDiagnosisList(()=>[...props.selectedDiagnosisList,obj ])
}

const getTitle=(id)=>{
  let obj = diagnosis.find(obj => obj.id == id);
  if(obj){
   return obj.title
  }else{
    return ""
  }

}

  const onEdit = (event)=>{
    console.log("CALLED")
    console.log(event.target.value);
    let title = event.target.value
    setadddiag(()=>title);
    event.preventDefault();

  }
  const addDiag= (e)=>{
    e.preventDefault();
    console.log("CALED ADD DAIEG");
    addDiagnosis( adddiag,props.clinic_id).then((res)=>{
      console.log(res);
      if(res == "success"){
        setMsg("success");
        getalldiagnosis()
        setalerts((alerts)=>({...alerts,dialog:true}))

      }
    })
  }
  const closedialog=(e)=>{
    e.preventDefault();
    console.log("CLOSEING")
    setalerts((alerts)=>({...alerts,dialog: false}));
    closeModal();

  //  history.push("/");
 //   console.log(window.location.href);
  //  window.location.reload();
    
  }
  const closeModal=()=>{
    setModal((modal)=>({...modal,showModal:false}))

    getalldiagnosis();
   // history.push("/doctor");
   // console.log(window.location.href);
  }

const showDataonHover=(data)=>{
  return (
    <>
 {isHovering && (
      <div className='shownotesonhover'>
          <p>{data}</p>
      </div>
    )}
    </>
  )
   
  
}

  return (

      <div className="p-lg-5">
        

        <FormPrompt
            
            openDailog={modal.showModal}
            title="Add New Diagnosis "
            onSetOpenDailog={closeModal}
            isCloseBtnAppear={true}

            >

 
{ msg == "success" ? 
              <AlertDialogBox
          openDailog={alerts.dialog}
          closedialog={closedialog}
  
         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
       // destination = {"clinic"}
          title="Update"
          des="successfully updated"
        ></AlertDialogBox>
:null}



<ErorrDialogBox
   openDailog={alerts.dialog}
         // closedialog={closeErrorSamepage}
  
         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
        //destination = {"patientlist"}
          title="Add"
          des={msg}
>
</ErorrDialogBox> 




            <Adddiagnosis
               handleSubmit={addDiag}
                onEdit={onEdit}
                setadddiag={setadddiag}
         
               // ondateChange={ondateChange}
               // dob = {personDetails.dob}
                //cityList = {cityList}
               // personDetails={personDetails}
                // startDate={this.state.startDate}
              //  date={this.state.date}
              //  htmlelement={this.state.htmlelement}
             //   handleChange={this.handleChange}
              //  onImageRemove={this.onImageRemove}
               // onImageChange={this.onImageChange}
              ></Adddiagnosis>
            </FormPrompt> 
        <div className="row">
          <div className="col-7">
            <div className='left-form-container'>
      <form action={addtoselecteddiagnosis}>
          {init == true ?<div className="form-row">
        <div className="col-md-8 nm-1 input-group">
          <label htmlFor="validationDefault01"></label>
          <select className='dropdown-select dropdown-tabs' name="diagnosis" id="diagnosis" onChange={(e)=>setSelecteddiagnoisis(e.target.value)}
            >
            <option value="">None</option>
          {diagnosis.map((obj,key)=>{
            return(
              <option disabled = {checkAlreadySelected(obj.id)}  value={obj.id}> {obj.title} </option>

            )
          })}
                 </select>
                 <button className='btn btn-sm' type='button' onClick={()=>setModal({...modal,showModal:true})}><i class="bi bi-plus-circle-fill addbuttoncyan"></i></button>

        </div>
        <div className="col-md-4 nm-1 add-container">

        <button className='btn btn-info btn-sm' onClick={ addtoselecteddiagnosis }  disabled = {checkAlreadySelected(diagnoisis)}>
          
       Add
                 </button>
        </div>
 
        <div className='col-md-8  nm-1 notescontainer'>
           <textarea name="note" id="" cols="30" rows="10"  onChange={(e)=>setNotes(e.target.value)}></textarea>
        </div>
    
  

      
    </div> :null 
   
    
    
    }
    </form>
          </div>
          </div>
          <div className="col-5">
            <div className='selected-items p-2 '>
            <div className='flex-space-between'>
                    <div className='title-container'>
                      Title
                    </div>
                <div className='notes-container'>
      Notes
                    </div>
            
                  </div>
                  <hr />
              { props.selectedDiagnosisList.length >=1 ? 
                props.selectedDiagnosisList.map((diag,key)=>{
                return (
                  <div className='flex-space-between'>
                    <div className='title-container'>
                    {getTitle(diag.id)}
                    </div>
                <div className='notes-container'>
           
          <p>{diag.notes}</p>
                    </div>
                <button className='btn btn-danger btn-xsm'  onClick={()=>props.removeDiag(diag)}  >
                    <i class="bi bi-trash"></i>
                    </button>
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