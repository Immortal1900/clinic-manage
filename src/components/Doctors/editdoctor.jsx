import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { setpersonDetails } from "../../actions/setpersondetailsaction";
import AlertDialogBox from "../DailogBoxes/alertdailogbox";
import Service from "../../Service/firebase";
import ErorrDialogBox from "../DailogBoxes/errordaologbox";
import EditDoctorForm from "./editdoctorform.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { addDoctorTimeSlots, deleteDocTimeSlots, getDoctorTimeSlots, updatePersonData } from "../../Service/doctor_fetch"; 
import { useHistory } from "react-router-dom";
import { getAge,changeFormat } from "../../Service/helpers";
import { getAllCity } from "../../Service/dropdown_data";
import { getFileDoctor } from "../../Service/fetch_general";

const EditDoctor =(props)=> {

  const [personDetails,setpersonDetails] = useState({});
  const [initialized,setinitialized] = useState(false);
  const [alerts,setalerts] = useState({
    dialog:false,
  })
  let history = useHistory();
  const location = useLocation(); 
  const [msg,setMsg] = useState();
    const [timeslots,setTimeSlots] = useState({});
    const [stateUpdated,setStateupdate] = useState(0);
    const [addTimeSlot,setaddTimeSlot] = useState({})
    const [doctor_files,setDoctorFiles] = useState([]);
  
  const myprops = location?.state;
  useEffect(()=>{
    console.log("RAN ONCE EDITPERSONDETAIL");
    console.log(location.state);

   
   const asynccaller = async ()=>{
    await initState();
    await getDocTimeSlots();
    await getdocfiles();
    }
    console.log(myprops);
    asynccaller();

   
  },[])

  useEffect(()=>{
    console.log(personDetails);
  },[initialized])
  
  const closedialog=(e)=>{
    e.preventDefault();
    console.log("CLOSEING")
    setalerts((alerts)=>({...alerts,dialog: false}));
    history.push("/doctor");
    console.log(window.location.href);
    window.location.reload();
  }

  const getDocTimeSlots= async()=>{
   await getDoctorTimeSlots(myprops.personDetails.id).then((res)=>{
      console.log("TIME SLOTS",res);
      setTimeSlots(()=>(res));
      setStateupdate((stateUpdated)=>stateUpdated+1)
   
      setinitialized(()=>true);
    }).catch((e)=>console.log(e))


  }

  const getdocfiles= async()=>{
    await getFileDoctor(myprops.personDetails.id).then((res)=>{
       console.log("DOCTOR DOCS",res);
       setDoctorFiles(()=>(res));
       setStateupdate((stateUpdated)=>stateUpdated+1)
    
       setinitialized(()=>true);
     }).catch((e)=>console.log(e))
 
 
   }

  const initState= async()=>{
    console.log("CALLED");
    console.log(myprops);

    if(      personDetails != null    ){
      Object.keys(myprops.personDetails).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object 
      
        let field_value = myprops.personDetails[key];
        if(field_value != null ||  field_value != ''){
          setpersonDetails((personDetails)=>({...personDetails,[key]:myprops.personDetails[key]}));
        }
  }

  )
  setpersonDetails((personDetails)=>({...personDetails,clinicId:myprops.personDetails.clinic_id}));
  setpersonDetails((personDetails)=>({...personDetails,cityId:myprops.personDetails.city_id}));

  }}
  
    const onEdit = (event)=>{
      console.log("CALLED")
      const { name, value } = event.target;
      setpersonDetails((personDetails)=>({...personDetails,[name]:value}))
    }

    const addDoctorTimeSlot = ()=>{
      console.log("CASD")
      addDoctorTimeSlots(addTimeSlot, myprops.personDetails.id).then((res)=>{

        console.log("addDoctorTimeSlot",res);
        if(res == "success"){
          setMsg("success");
        //  setalerts((alerts)=>({...alerts,dialog:true}))
          console.log("Added successfully");
        }
     //   window.location.reload();

      }).catch((e)=>{})
    }

    
    const deleteTimeSlots = (id)=>{
      console.log("ID IS " ,id);
      deleteDocTimeSlots(id).then((res)=>{
        console.log(res);

        window.location.reload();
      }).catch((e)=>console.log(e))
    }




    const onEditTimeSlot = (event)=>{
      console.log(" onEditTimeSlot CALLED" , event.target.value)
      console.log(" onEditTimeSlot CALLED" , event.target.name)

      const { name, value } = event.target;
      setaddTimeSlot((addTimeSlot)=>({...addTimeSlot,[name]:value}))
    }

    const ondateChange = (e)=>{
      console.log(e);
      let mydate =  new Date(e);
      mydate = changeFormat(e)
      console.log("MYDDATE" , mydate);
      let age =  getAge(e);
    
        setpersonDetails((personDetails)=>({...personDetails,age:age}))

      setpersonDetails((personDetails)=>({...personDetails,dob:mydate}))
   
    }
    const closeErrorSamepage=(e)=>{
      e.preventDefault();
      console.log("CLOSEING")
      setalerts((alerts)=>({...alerts,dialog: false}));
  
  
      console.log(window.location.href);
    
      
    }
const updatePers=(e)=>{
 
  console.log("CAKKKKKKKKKKEd");

updatePersonData(personDetails).then((res)=>{
  console.log(res)
  if(res == "success"){
    setMsg("success");
    setalerts((alerts)=>({...alerts,dialog:true}))
    console.log("Added successfully");
  }
  else if(res =="phone exists"){
    setMsg("phone_exists");
    setalerts((alerts)=>({...alerts,dialog:true}))
  }
  else if(res =="name already exists"){
    setMsg("name already exists");
    setalerts((alerts)=>({...alerts,dialog:true}))
  }
  else if(res =="email already exists"){
    setMsg("email already exists");
    setalerts((alerts)=>({...alerts,dialog:true}))
  }
  else if(res =="civi id exists"){
    setMsg("civil_id_exists");
  
    setalerts((alerts)=>({...alerts,dialog:true}))
  }}
  
).
catch((e)=>{console.log(e)})  ;

console.log("CAKKKKKKKKKKEd1");
e.preventDefault();
}


    return  (
      <div className="editpersondetailspage">
       
        { 
        
         msg == "success" ?    
        <AlertDialogBox
          openDailog={alerts.dialog}
          closedialog={closedialog}
  
         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
          //destination = {"patientlist"}
          title="Update"
          des="successfully updated"
        ></AlertDialogBox>
        :null}



        {/* <ErorrDialogBox
      openDailog={alerts.dialog}
      closedialog={closeErrorSamepage}
         // onSetOpenDailog={this.closeErrorDailog}
          title="Error"
          des={msg}
        ></ErorrDialogBox>  */}
        
        
      

        {initialized == true ?   <EditDoctorForm
        // handleSubmit={this.handleSubmit}
         onEdit={onEdit}
        // date={personDetails.date}
        // handleChange={this.handleChange}
          ondateChange={ondateChange}
          personDetails={personDetails}
          update={updatePers}
          setpersonDetails={setpersonDetails}
          timeslots ={timeslots}
          addTimeSlot ={addTimeSlot}
          addDoctorTimeSlot={addDoctorTimeSlot}
          onEditTimeSlot = {onEditTimeSlot}
          deleteTimeSlots={deleteTimeSlots}
          doctor_files={doctor_files}
        //profileHtmlelEment={personDetails.profileHtmlelEment}
        //onImageRemove={this.onImageRemove}
        //onImageChange={this.onImageChange}
        //handleImageForUpload={this.handleImageForUpload}
        ></EditDoctorForm>
      :
      null}
      
      </div>
    )
     }
   


export default EditDoctor;
