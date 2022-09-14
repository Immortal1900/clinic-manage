import React, { Component, useState } from "react";
import firebase from "../../firebase";
import "react-datepicker/dist/react-datepicker.css";
import AddDepartmentForm from "./adddepartmentform";
import Service from "../../Service/firebase";
import "./adddepartmentform.css";
import  FormPrompt  from "../DailogBoxes/formprompt";
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { addPersondetail } from "../../Service/department_fetch"
import AlertDialogBox from "../DailogBoxes/alertdailogbox";
import { useHistory } from "react-router-dom";
import { getAge } from "../../Service/helpers";
import { changeFormat } from "../../Service/helpers";
import ErorrDialogBox from "../DailogBoxes/errordaologbox";


const AddDepartment =(props)=> {
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



  // constructor() {
  //   super();

  //   this.state = {
  //     imageAvatar: "",
  //     imagefile: "",
  //     date: null,
  //     // startDate: new Date(),
  //     isLoading: false,
  //     htmlelement: <i className="fa fa-user fa-8x" aria-hidden="true"></i>,

  //     formData: {
  //       firstname: "",
  //       lastname: "",
  //       sex: "",
  //       age: "",
  //       bloodgroup: "",
  //       phonenumber: "",
  //       email: "",
  //       address: "",
  //       city: "",
  //       state: "",
  //       zip: "",
  //       remark: "",
  //       birthdate: null,
  //     },
  //   };
  // }

  // handleSubmit = () => {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   this.props.setCloseBtnAppear();
  //   this.handleImageForUpload();
  // };
  // handleImageForUpload = () => {
  //   const image = this.state.imagefile;
  //   const url = "";

  //   if (this.state.imagefile !== "") {
  //     this.onUploadImage(image);
  //   } else {
  //     this.onAddPerson(url);
  //   }
  // };
  // onUploadImage = async (image) => {
  //   const url = await Service.uploadImage(image);
  //   if (url !== "") {
  //     this.onAddPerson(url);
  //   }
  // };
  // async onAddPerson(imageUrl) {
  //   let sendData = {
  //     ...this.state.formData,
  //     searchbyname: (
  //       this.state.formData.firstname + this.state.formData.lastname
  //     ).toLowerCase(),
  //     imgaeurl: imageUrl,
  //     timeStamp: firebase.firestore.Timestamp.fromDate(new Date()),
  //   };
  //   if (this.props.collectionName === "patients") {
  //     sendData = {
  //       ...sendData,

  //       bedallotementid: "",
  //       operationreportid: "",
  //       birthreportid: "",
  //       deathreportid: "",
  //     };
  //   }

  //   const res = await Service.addData(
  //     sendData,
  //     this.props.collectionName,
  //     this.props.id
  //   );

  //   if (res === "success") {
  //     this.setState({
  //       isLoading: false,
  //     });

  //     this.props.handleSuccessDailog();
  //   } else {
  //     this.setState({
  //       isLoading: false,
  //     });
  //     this.props.handleErrorDailog();
  //   }
  // }

  // handleChange = (date) => {
  //   if (date !== null) {
  //     const birthDate = new Date(date);

  //     this.setState({
  //       date: date,
  //       formData: {
  //         ...this.state.formData,
  //         birthdate: `${
  //           birthDate.getMonth() + 1
  //         }/${birthDate.getDate()}/${birthDate.getFullYear()}`,
  //       },

  //       startDate: date,
  //     });
  //   } else {
  //     this.setState({
  //       date: date,
  //       formData: {
  //         ...this.state.formData,
  //         birthdate: date,
  //       },

  //       startDate: date,
  //     });
  //   }
  // };
  // onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     this.setState({
  //       imagefile: event.target.files[0],
  //     });
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.setState({
  //         imageAvatar: e.target.result,
  //         htmlelement: (
  //           <div className="addpersonpage">
  //             <img
  //               className="netimage"
  //               srcSet={e.target.result}
  //               alt="profileImage"
  //             />
  //           </div>
  //         ),
  //       });
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //     this.setState({});
  //   }
  // };
  // onImageRemove = () => {
  //   this.setState({
  //     imagefile: "",
  //     imageAvatar: "",
  //     htmlelement: (
  //       <div className="addpersonpage">
  //         <i className="fa fa-user fa-8x" aria-hidden="true"></i>
  //       </div>
  //     ),
  //   });
  // };
  // onEdit = (e) => {
  //   const formData = this.state.formData;
  //   this.setState({
  //     formData: {
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  
    // if (this.state.imageAvatar === "") {
    //   this.state.htmlelement = (
    //     <div className="addpersonpage">
    //       <i className="fa fa-user fa-8x" aria-hidden="true"></i>
    //     </div>
    //   );
    // } else {
    //   this.state.htmlelement = (
    //     <div className="addpersonpage">
    //       <img className="netimage" srcSet={this.state.imageAvatar} alt="" />
    //     </div>
    //   );
    // }
  
    const addnewUser = (e)=>{
    addPersondetail(personDetails).then((res)=>{
      console.log(res);
      if(res == "success"){
        setMsg("success");
        setalerts((alerts)=>({...alerts,dialog:true}))
        console.log("Added successfully");
      }
      else if(res =="phone exists"){
        setMsg("phone_exists");
        setalerts((alerts)=>({...alerts,dialog:true}))
      }
      else if(res =="civi id exists"){
        setMsg("civil_id_exists");
      
        setalerts((alerts)=>({...alerts,dialog:true}))
      }
      
      if(res == "already exists"){
        console.log("Already Exists");
      }


    });
      e.preventDefault();
    }

  

    const closedialog=(e)=>{
      e.preventDefault();
      console.log("CLOSEING")
      setalerts((alerts)=>({...alerts,dialog: false}));
      closeModal();
      history.push("/department");
      console.log(window.location.href);
      window.location.reload();
      
    }
    const closeModal=()=>{
      setModal((modal)=>({...modal,showModal:false}))
      history.push("/department");
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
            title="Add New Clinic"
            onSetOpenDailog={closeModal}
            isCloseBtnAppear={true}
            >


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
</ErorrDialogBox>





            <AddDepartmentForm
               handleSubmit={addnewUser}
                onEdit={onEdit}
                ondateChange={ondateChange}
                dob = {personDetails.dob}

                // startDate={this.state.startDate}
              //  date={this.state.date}
              //  htmlelement={this.state.htmlelement}
             //   handleChange={this.handleChange}
              //  onImageRemove={this.onImageRemove}
               // onImageChange={this.onImageChange}
              ></AddDepartmentForm>
            </FormPrompt> 
          
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default AddDepartment;
