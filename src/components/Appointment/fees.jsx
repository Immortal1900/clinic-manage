import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../Service/config';

import { addFees, addPersondetail } from '../../Service/fetch_general';
import FormPrompt from '../DailogBoxes/formprompt';
import AddFees from './add_fees';
import './appointment.css';


function Fees(props) {
const [ Fees,setFees ] = useState([]);
const [diagnoisis, setSelecteddiagnoisis] = useState();
const [stateupdate,setStateUpdated] = useState(1)
const [init,setinit] = useState(false);
const [modal,setModal]=useState({    showModal: false  });
const [adddiag,setadddiag] = useState();
const [alerts,setalerts] = useState({    dialog:false,   })
let history = useHistory();

useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getallFees();
},[])
useEffect(()=>{
  console.log("STATE UPDATED",props.selectedFeesList);
  setStateUpdated(()=>stateupdate+1)

},[props.selectedFeesList])

const getallFees = ()=>{
//   getAllFees(1).then((res)=>{
//   console.log(res)
//   setFees(()=>res);
//   setinit(true);
// })
}
const checkAlreadySelected=(id)=>{
 let found = props.selectedFeesList.includes(id) ?  true:  false;
 return found;
}


const addtoselectedFees=(e)=>{
  e.preventDefault();
    props.setSelectedFeesList(()=>[...props.selectedFeesList,diagnoisis ])
}

const getTitle=(id)=>{
  let obj = Fees.find(obj => obj.id == id);
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
    // addFees( adddiag,2).then((res)=>{
    //   console.log(res);
    //   if(res == "success"){
    //     setalerts((alerts)=>({...alerts,dialog:true}))
    //     getallFees();
    //   }
    // })
  }
  const closedialog=(e)=>{
    e.preventDefault();
    console.log("CLOSEING")
    setalerts((alerts)=>({...alerts,dialog: false}));
    closeModal();
    history.push("/");
    console.log(window.location.href);
    window.location.reload();

  }
  const closeModal=()=>{
    setModal((modal)=>({...modal,showModal:false}))
   // history.push("/doctor");
    console.log(window.location.href);
  }



  return (

      <div className="p-lg-5">


        <FormPrompt

            openDailog={modal.showModal}
            title="Add New Fees "
            onSetOpenDailog={closeModal}
            isCloseBtnAppear={true}

            >

{/*
{ msg == "success" ?
              <AlertDialogBox
          openDailog={alerts.dialog}
          closedialog={closedialog}

         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
        destination = {"clinic"}
          title="Update"
          des="successfully updated"
        ></AlertDialogBox>
:null}



<ErorrDialogBox
   openDailog={alerts.dialog}
          closedialog={closeErrorSamepage}

         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
        destination = {"patientlist"}
          title="Add"
          des={msg}
>
</ErorrDialogBox> */}




            <AddFees
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
              ></AddFees>
            </FormPrompt>
        <div className="row">
          <div className="col-7">
            <div className='left-form-container'>
      <form action={addtoselectedFees}>
          {init == true ?<div className="form-row">
        <div className="col-md-8 nm-1 input-group">
          <label htmlFor="validationDefault01"></label>
          <select className='dropdown-select' name="Fees" id="Fees" onChange={(e)=>setSelecteddiagnoisis(e.target.value)}
            >
            <option value="">None</option>
          {Fees.map((obj,key)=>{
            return(
              <option disabled = {checkAlreadySelected(obj.id)}  value={obj.id}> {obj.title} </option>

            )
          })}
                 </select>
                 <button className='btn  btn-sm' type='button' onClick={()=>setModal({...modal,showModal:true})}><i class="bi bi-plus-circle-fill"></i></button>

        </div>
        <div className="col-md-4 nm-1 add-container">

        <button className='btn btn-info btn-sm' onClick={ addtoselectedFees }>

       Add
                 </button>
        </div>

    </div> :null }
    </form>
          </div>
          </div>
          <div className="col-5">
            <div className='selected-items'>

              { props.selectedFeesList.length >=1 ?
                props.selectedFeesList.map((diag,key)=>{
                return (
                  <div >
                    {getTitle(diag)}
                  </div>
                )
                })
                :
                "No Fees Selected"
              }
            </div>
          </div>
        </div>
      </div>





  )
}

export default Fees