import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import id from 'date-fns/esm/locale/id/index.js';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../Service/config';
import { getAllDocByClinicId, getAllFeesByClinicId } from '../../Service/dropdown_data';
import DateFnsUtils from "@date-io/date-fns";
import { addFees, addFeesByClininId, addPersondetail, getSlotsByDoc } from '../../Service/fetch_general';
import AlertDialogBox from '../DailogBoxes/alertdailogbox';
import ErorrDialogBox from '../DailogBoxes/errordaologbox';
import FormPrompt from '../DailogBoxes/formprompt';
import AddFees from './add_fees';
import './appointment.css';
import { changeFormat, changeFormatdmy, changeFormatmdy, getdaycode } from '../../Service/helpers';


function Fees(props) {
const [ Fees,setFees ] = useState([]);
const [diagnoisis, setSelecteddiagnoisis] = useState();
const [stateupdate,setStateUpdated] = useState(1)
const [init,setinit] = useState(false);
const [modal,setModal]=useState({    showModal: false  });
const [adddiag,setadddiag] = useState();
const [alerts,setalerts] = useState({    dialog:false,   })
const [doctorList,setDoctorList] = useState([]);
const [addfee,setaddfees] = useState();
const [msg,setMsg] = useState(   )
const [selectedDayCode, setSelectedDayCode] = useState();
const [appoinDate,setAppoinDate] = useState(new Date());
const [daySlots, setDaySlots] = useState([]);
let history = useHistory();

useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getallFees();
  getalldoctorbyclinicid();
},[])
useEffect(()=>{
  console.log("DIAGNOISIS PROPS ARE" , props);
  getallFees();
  getalldoctorbyclinicid();
},[props.clinic_id])
useEffect(()=>{
  console.log("STATE UPDATED",props.selectedFeesList);
  setStateUpdated(()=>stateupdate+1)
  getTotalAmount();
  props.setTotalAmount(  getTotalAmount())
},[props.selectedFeesList])

const getallFees = ()=>{
  getAllFeesByClinicId(props.clinic_id).then((res)=>{
   console.log(res)
   setFees(()=>res);
   console.log("FES S")
   setinit(true);
 })
}
const checkAlreadySelected=(id)=>{
 let found = props.selectedFeesList.includes(id) ?  true:  false;
 return found;
}



const addtoselectedFees=(e)=>{

  e.preventDefault();
  console.log("FEES DROPDOEN CHANGE");

    props.setSelectedFeesList(()=>[...props.selectedFeesList,diagnoisis ]);
    let totalamount = getTotalAmount();
    console.log("SETTTING TOTAL AMOUNT" , totalamount)
    props.setTotalAmount(totalamount)
}

const getTitle=(id)=>{

  let obj = Fees.find(obj=>obj.id == id);
  console.log(obj)
  if(obj){

   return obj.title
  }else{
 
    return ""
  }

}
const getFees=(id)=>{

  let obj = Fees.find(obj=>obj.id == id);

  if(obj){

   return obj.fee
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
  const addfees= (e)=>{
    e.preventDefault();
    console.log("CALED ADD DAIEG");
    addFeesByClininId( adddiag,props.clinic_id).then((res)=>{
       console.log(res);
       if(res == "success"){
        setMsg("success");
         setalerts((alerts)=>({...alerts,dialog:true}))

      
         getallFees();
       }
     })
  }
  const closedialog=(e)=>{
    e.preventDefault();
    console.log("CLOSEING")
    setalerts((alerts)=>({...alerts,dialog: false}));
    closeModal();
   // history.push("/");
  //  console.log(window.location.href);
 //   window.location.reload();

  }
  const closeModal=()=>{
    setModal((modal)=>({...modal,showModal:false}))
   // history.push("/doctor");
  //  console.log(window.location.href);
  }

  const getalldoctorbyclinicid=()=>{
    getAllDocByClinicId(props.clinic_id).then((res)=>{
      console.log(res);
      setDoctorList(()=>res);
     
    })
  }

const onFeesDropDownChange = ()=>{
  
}

const getTotalAmount =()=>{
  console.log("AAAA");
  let totalAmount=0;
  console.log(props.selectedFeesList);
  props.selectedFeesList.forEach(item => {
    //  let amount = getTitle(item);
    console.log("ITWM IS",item);
    let amount = getFees(item);
      console.log(parseFloat(amount));
      console.log(parseFloat(totalAmount))
      totalAmount = parseFloat(totalAmount) + parseFloat(amount);
      console.log(totalAmount);
  
  });
  totalAmount = parseFloat(totalAmount).toFixed(3)
  return totalAmount;
}

const getslotsbydocid=(id)=>{
  getSlotsByDoc(id).then((res)=>{
      console.log("SLOTS" , res);
      setDaySlots(()=>res);
  })
}

const onDoctorDropdownChange=(doctid)=>{
  props.updateAppointDoc(doctid);
  getSlotsByDoc(doctid).then((res)=>{
    console.log("SLOTS" , res);
    setDaySlots(()=>res);
})
}

const onAppointDateChange = (e)=>{
  console.log(e);
  let mydate =  new Date(e);
  let mydateymd = changeFormatmdy(mydate)
  let mydatedmy = changeFormat(mydate)
  console.log((e.getDay()));
  setAppoinDate(e);
  props.appintDateHandler(mydateymd, mydatedmy);
  setSelectedDayCode(e.getDay());
}

  return (

      <div className="p-lg-5">


        <FormPrompt

            openDailog={modal.showModal}
            title="Add New Fees "
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





            <AddFees
               handleSubmit={addfees}
                onEdit={onEdit}
                setaddfees={setaddfees}

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
        <div className="row" 
        // style={{alignItems:"flex-end"}}
        >
          <div className="col-7">
            <div className='left-form-container'>
      <form  onSubmit={addtoselectedFees}>
          {init == true ?<div className="form-row">

          <div className='row  container-fluid'>
          <div className="col-md-6 nm-1  pb-3">
          <label className='appointment-label'  >Appointment Date</label> 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              style={{
                padding: "0px 10px",
                border: "1px solid rgb(197, 197, 197)",
              }}
              name="appointmentDate"
              id="appointmentDate"
              className="  form-control"
              InputProps={{
                disableUnderline: true,
              }}
              value={appoinDate}
              onChange={(e)=>onAppointDateChange(e)}
              autoComplete="off"
              format="yyyy-MM-dd"
            />
          </MuiPickersUtilsProvider>
        </div>


        <div className="col-md-6 nm-1 pb-3 align-item-fe">
        <label className='appointment-label'  >Doctor</label>  
          <select className='dropdown-select' name="doctor" id="doctor" onChange={(e)=>onDoctorDropdownChange(e.target.value) }  >
            <option value="">None</option>
           
          {doctorList.map((obj,key)=>{
            return(
              <option disabled = {checkAlreadySelected(obj.id)}  value={obj.id}> {obj.firstName + obj.lastName} </option>

            )
          })}
                 </select>
                 <button className='btn  btn-sm' type='button' onClick={()=>setModal({...modal,showModal:true})}><i class="bi bi-plus-circle-fill addbuttoncyan"></i></button>

        </div>
        </div>



          <div className="col-md-6 nm-1 ">
          <label className='appointment-label'  > Slots </label>  
          <select className='dropdown-select' name="timeslot" id="timeslot" onChange={(e)=>props.updateTimeSlot(e.target.value)}  >
            <option value="">None</option>
           
          {daySlots && daySlots.filter(obj => selectedDayCode == obj.day_code ).map((obj,key)=>{
            return(
              <option value={obj.id}> {obj.time_slot} </option>
            )
          })}
                 </select>
                 <button className='btn  btn-sm' type='button' onClick={()=>setModal({...modal,showModal:true})}><i class="bi bi-plus-circle-fill addbuttoncyan"></i></button>

        </div>
    
        <div className="col-md-6 nm-1 ">

        <label className='appointment-label'  >Fees</label>  
          <select className='dropdown-select dropdown-tabs' name="Fees" id="Fees" onChange={(e)=>setSelecteddiagnoisis(e.target.value)} required
            >
            <option value="">None</option>
          {Fees.map((obj,key)=>{
            return(
              <option disabled = {checkAlreadySelected(obj.id)}  value={obj.id}> {obj.title} </option>

            )
          })}
                 </select>
                 <button className='btn btn-sm' type='button' onClick={()=>setModal({...modal,showModal:true})}><i class="bi bi-plus-circle-fill addbuttoncyan"></i></button>

        </div>
        <div className="col-md-10  pt-2 nm-1 add-container">

        <button className='btn btn-info btn-sm' type='submit'>

       Add
                 </button>
        </div>

    </div> :null }
    </form>
          </div>
          </div>
          <div className="col-5">
            <div className='selected-items p-2 pl-5 pr-5'>
            <div className='flex-space-between'>
                    <div className='title-container'>
                      Amount
                    </div>
       
            
                  </div>
              { props.selectedFeesList.length >=1 ?
                props.selectedFeesList.map((diag,key)=>{
                return (
                  <div className='flex-space-between'>
                    <div className='title-container'>
                    {getTitle(diag)} - 
                    {getFees(diag)}
                    </div>
               
                <button className='btn btn-danger btn-xsm'  onClick={()=>props.removeFees(diag)}  >
                    <i class="bi bi-trash"></i>
                    </button>
                  </div>
                )
                })
                :
                "No Fees Selected"
              }

              <div>
                Total Amount: {getTotalAmount()}
              </div>
            </div>
          </div>
        </div>
      </div>





  )
}

export default Fees