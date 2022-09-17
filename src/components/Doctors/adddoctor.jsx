import React, { Component, useState } from "react";
import firebase from "../../firebase";
import "react-datepicker/dist/react-datepicker.css";
import AddDoctorForm from "./adddoctorform";
import Service from "../../Service/firebase";
import "./adddoctorform.css";
import  FormPrompt  from "../DailogBoxes/formprompt";
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { addPersondetail } from "../../Service/doctor_fetch"
import AlertDialogBox from "../DailogBoxes/alertdailogbox";
import { useHistory } from "react-router-dom";
import { getAge } from "../../Service/helpers";
import { changeFormat } from "../../Service/helpers";
import ErorrDialogBox from "../DailogBoxes/errordaologbox";


const AddDoctor =(props)=> {
  const location = useLocation();
  const myprops = location?.state;
  let history = useHistory();
  const [modal,setModal]=useState({
    showModal:false
  });
  const [alerts,setalerts] = useState({
    dialog:false,
 
  })

  const [msg,setMsg] = useState(
  
  )
    const [personDetails,setpersonDetails] = useState({
    
      // address:            '',
      // amount:             0,
      // age:                null,
      // birthdate:          null,
      // bloodgroup:         "",
      // city:               "",
      // email:              "",
      // firstName:          "",
      // imageUrl:           "",
      // lastName:           "",
      // pNo:                null,
      // gender:             " ",
      // state:               "",
      // zip:                 "",             
      //  collectionName:     "",
      clinicId:1,
      cityId:1,
      deptId:1,
      stopBooking:false,
      dob : changeFormat( new Date())
    });
  

    useEffect(()=>{
      console.log(personDetails.dob);
      if(myprops != null && myprops != undefined ){
        if(myprops.showmodal == true){
          setModal((modal)=>({...modal,showModal:true}));
        }
      
      }
    },[])



    const addnewUser = (e)=>{
    addPersondetail(personDetails).then((res)=>{
      console.log(res);
    
       if(res =="phone exists"){
        setMsg("phone_exists");
        setalerts((alerts)=>({...alerts,dialog:true}))
      }
      else if(res =="civi id exists"){
        setMsg("civil_id_exists");
      
        setalerts((alerts)=>({...alerts,dialog:true}))
      }
      else if(res.msg == "already exists"){
        console.log("Already Exists");
        setMsg("Already Exists ");
      
        setalerts((alerts)=>({...alerts,dialog:true}))
      }
      else if(res.status == "true"){
        setMsg("success");
        setalerts((alerts)=>({...alerts,dialog:true}))
        console.log("Added successfully");
      }


    });
      e.preventDefault();
    }

  

    const closedialog=(e)=>{
      e.preventDefault();
      console.log("CLOSEING")
      setalerts((alerts)=>({...alerts,dialog: false}));
      closeModal();
      history.push("/doctor");
      console.log(window.location.href);
      window.location.reload();
      
    }
    const closeModal=()=>{
      setModal((modal)=>({...modal,showModal:false}))
      history.push("/doctor");
      console.log(window.location.href);
    }
  
    const onEdit = (event)=>{
      console.log("CALLED")
      const { name, value } = event.target;
      console.log(value);
      setpersonDetails((personDetails)=>({...personDetails,[name]:value}))
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

    useEffect(()=>{
      console.log(personDetails)
    },[personDetails])



  const closeErrorSamepage=(e)=>{
    e.preventDefault();
    console.log("CLOSEING")
    setalerts((alerts)=>({...alerts,dialog: false}));


    console.log(window.location.href);
  
    
  }


    return( <div className="addpersonpage">
        <div className="container main_section">
          <div className="row">
            <div className="col-md-6">



            <FormPrompt
            
            openDailog={modal.showModal}
            title="Add New doctor"
            onSetOpenDailog={closeModal}
            isCloseBtnAppear={true}
            >


{ msg == "success" ? 
              <AlertDialogBox
          openDailog={alerts.dialog}
          closedialog={closedialog}
  
         // setOpenDailog={setalerts}
       //   onSetOpenDailog={setalerts}
        destination = {"doctor"}
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
</ErorrDialogBox>





            <AddDoctorForm
               handleSubmit={addnewUser}
                onEdit={onEdit}
                ondateChange={ondateChange}
                dob = {personDetails.dob}
                personDetails={personDetails}
                // startDate={this.state.startDate}
              //  date={this.state.date}
              //  htmlelement={this.state.htmlelement}
             //   handleChange={this.handleChange}
              //  onImageRemove={this.onImageRemove}
               // onImageChange={this.onImageChange}
              ></AddDoctorForm>
            </FormPrompt> 
          
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default AddDoctor;
