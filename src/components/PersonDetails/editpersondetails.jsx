import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { setpersonDetails } from "../../actions/setpersondetailsaction";
import AlertDialogBox from "../DailogBoxes/alertdailogbox";
import Service from "../../Service/firebase";
import ErorrDialogBox from "../DailogBoxes/errordaologbox";
import EditPersonDetailsForm from "./editpersondetailsform";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { updatePersonData } from "../../Service/fetch"; 
const EditPersonDetails =(props)=> {

  const [personDetails,setpersonDetails] = useState({});
  const [initialized,setinitialized] = useState(false);

  const location = useLocation()
  const myprops = location?.state;
  useEffect(()=>{
    console.log(location.state);
   const asynccaller = async ()=>{
    await initState();
    }
    console.log(props);
    asynccaller();
  },[])

  useEffect(()=>{
    console.log(personDetails);
  },[personDetails])
  

  const initState= async()=>{
    console.log(props.personDetails?.uId);
    setpersonDetails((personDetails)=>({...personDetails,
       uid:myprops.personDetails?.uId,
       address: myprops.personDetails?.address,
       amount:myprops.personDetails?.amount,
       age: myprops.personDetails?.age,
       birthdate: myprops.personDetails?.birthdate,
       bloodgroup: myprops.personDetails?.bloodgroup,
       city: myprops.personDetails?.city,
       email: myprops.personDetails?.email,
       firstName: myprops.personDetails?.firstName,
       imageUrl: myprops.personDetails?.imageUrl,
       lastName: myprops.personDetails?.lastName,
       pNo: myprops.personDetails?.pNo,
       gender: myprops.personDetails?.gender,
       state: myprops.personDetails?.state,
       zip: myprops.personDetails?.zip,
       collectionName: myprops.collectionName,
}))
setinitialized(()=>true);

  }
  
    const onEdit = (event)=>{
      console.log("CALLED")
      const { name, value } = event.target;
      setpersonDetails((personDetails)=>({...personDetails,[name]:value}))
    }

const updatePers=()=>{
  console.log("CAKKKKKKKKKKEd");
  updatePersonData(personDetails);
}

    return  (
      <div className="editpersondetailspage">
       
        {/* <AlertDialogBox
          openDailog={personDetails.openAlertDailog}
          setOpenDailog={this.state.setOpenAlertDailog}
          onSetOpenDailog={this.handleSetOpenDailog}
          title="Update"
          des="successfully updated"
        ></AlertDialogBox>

        <ErorrDialogBox
          openDailog={this.state.openErrorDailog}
          onSetOpenDailog={this.closeErrorDailog}
          title="Error"
          des="Someting went wrong. Try again"
        ></ErorrDialogBox> */}

        {initialized == true ?   <EditPersonDetailsForm
        // handleSubmit={this.handleSubmit}
         onEdit={onEdit}
        // date={personDetails.date}
        // handleChange={this.handleChange}
          personDetails={personDetails}
          update={updatePers}
          setpersonDetails={setpersonDetails}
        //profileHtmlelEment={personDetails.profileHtmlelEment}
        //onImageRemove={this.onImageRemove}
        //onImageChange={this.onImageChange}
        //handleImageForUpload={this.handleImageForUpload}
        ></EditPersonDetailsForm>
      :
      null}
      
      </div>
    )
     }
  


export default EditPersonDetails;
