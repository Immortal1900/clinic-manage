import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./editdoctorform.css";

import { useEffect } from "react";
import { useState } from "react";
import { getAllCity, getAllCLinicByCityId, getAllDeptByClinicId } from "../../Service/dropdown_data";
import UploadFileService from '../../Service/file_upload';


const EditDoctorForm  = (props)=> {


const [stateupdated,setStateUpdate] = useState(0);
const day_code = ['0','1','2','3','4','5','6','7']
const day = ['Select','Monday','Tuesday','Wednesday','Thursday','Fridat','Saturday','Sunday']  
const [errors,setErrors] = useState({})
const [clinicList,setClinicList] = useState([]);
const [cityList,setCityList] = useState([])
const [deptList,setDeptList] = useState([]);
const [dropdownState,setDropDownState] = useState({})
const [selectedFile, setSelectedFile] = useState(null);
const [fileName,setFileName] = useState('');



useEffect(()=>{
  getallcity().then(()=>{
    //setinitialized(()=>true);
  })
  getallclinicbycityid();
  getalldeptbyclinicid();
},[])

useEffect(()=>{
  setStateUpdate(()=>stateupdated+1)
},[clinicList])


const getDoctorFileById=()=>{

}

const getallcity = async()=>{
  await getAllCity().then((res)=>{
    setCityList(()=>(           res      ));
    console.log(  'City List',   res);
  //  setStateupdate((stateUpdated)=>stateUpdated+1)
  }).catch((e)=>console.log(e))
}


const getallclinicbycityid=(selectedCityId)=>{
  console.log("Curremt CIty ID" ,dropdownState.city);
   getAllCLinicByCityId(selectedCityId ? selectedCityId :"").then((res)=>{
    setClinicList(()=>(           res      ));
    console.log(  'Clinic List',   res);
  //  setStateupdate((stateUpdated)=>stateUpdated+1)
  }).catch((e)=>console.log(e))
}

const getalldeptbyclinicid=(selectedClinicId)=>{
  
  console.log(selectedClinicId);
  getAllDeptByClinicId(selectedClinicId ? selectedClinicId :"").then((res)=>{
   setDeptList(()=>(           res      ));
   console.log(  'Dept List',   res);
 //  setStateupdate((stateUpdated)=>stateUpdated+1)
 }).catch((e)=>console.log(e))
}


function handleChangeImage(event) {
  if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
      setFileName(event.target.files[0].name);
  }
}


const  validate = (e)=>{
  console.log(e.target.value);
if(e.target.value == '0'){
  console.log("ERROR");
  setErrors((errors)=>({...errors,invalid:true}))
}
else{
  setErrors((errors)=>({...errors,invalid:false}))
  props.onEditTimeSlot(e);
}
}
const uploadFile = ()=>{
  UploadFileService.addData(selectedFile, fileName , props.personDetails.id).then((res) => {
    if (res == 'error') {
        console.log("error");
    } else {
        if (res.status == true) { 
        
          console.log("success");
          window.location.reload();
    }

}
  }
  )}

  
const checkDoctorForm = (e)=>{
  e.preventDefault();
  console.log("CALED,",props.personDetails.confirm_pass);
  if(props.personDetails.pass != props.personDetails.confirm_pass && errors.pass_touched == true){
    console.log("PASS NOT MATCHEed");
    setErrors((errors)=>({...errors,pass_match:true}));
  }
  else {
    setErrors((errors)=>({...errors,pass_match:false}));
    props.update(e);
  }
  
 
  
}

const passChangeHandler = (e)=>{
  setErrors((errors)=>({...errors,pass_touched:true}));
  props.onEdit(e);
}

useEffect(()=>{
  setStateUpdate(()=>stateupdated+1)
  console.log("PROPS EDIT DCoCTOR", props);
},[props])

    return (
      <>
      <div className="row g-0">
      <div className="col-8 mycard p-3">
        <div className="container main_section_edit">
          <div className="topheader">
            <ul>
              <li>
                <i
                  className="fa fa-arrow-circle-o-right fa-2x"
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <h5>{props.personDetails.collectionName}</h5>
              </li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12 first_section">
              <form onSubmit={checkDoctorForm}>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault01">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      value={props.personDetails.firstName}
                      onChange={(e)=>props.onEdit(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault02">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={props.personDetails.lastName}
                      onChange={props.onEdit}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Phone No</label>
              <input
                name="pNo1"
                type="text"
                className="form-control"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                id="pNo1"
                value={props.personDetails.pNo1}
                onChange={props.onEdit}
              />
            </div>
            <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Alternate Phone No.</label>
              <input
                name="pNo2"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="text"
                className="form-control"
                id="pNo2"
                value={props.personDetails.pNo2}
                onChange={props.onEdit}
              />
            </div>
                
              
                </div>

              

               
                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Whatsapp No.</label>
              <input
                name="whatsAppNo"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="text"
                className="form-control"
                id="whatsAppNo"
                value={props.personDetails.whatsAppNo}
                onChange={props.onEdit}
              />
            </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault04">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="validationDefault04"
                      value={props.personDetails.email}
                      onChange={props.onEdit}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault04">City</label>
                  
                <select     className="form-control"   id="cityId"  required   name="cityId"          value={props.personDetails.cityId}
                    onChange={(e)=>{
                      let value = e.target.value;
                      props.onEdit(e);
                      
                     // setDropDownState(()=>({...dropdownState, city : value}))
                        getallclinicbycityid(value);
                     
            
                      e.preventDefault();
                    }}>    
                               <option value=''>Select </option>  

              {
                cityList.map((city,index)=>{
       
                  return (
                    
                    <option value={city.id}>{ city.cityName} </option>
           
          
                  ) 
                })
              }
              </select>
            </div>
        
            <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault04">Clinic</label>
                  
                <select     className="form-control"  
                 id="clinicId"  required   name="clinicId"          
                 value={props.personDetails.clinicId}
                    onChange={(e)=>{
                      let value = e.target.value;
                
                      
                    //  setDropDownState(()=>({...dropdownState, clinc : value}))
                      getalldeptbyclinicid(value);
                      props.onEdit(e);
            
                    
                    }}>    
                               <option value=''>Select </option>  

              {
                clinicList.map((clinic,index)=>{
       
                  return (
                    
                    <option value={clinic.id}>{ clinic.title} </option>
           
          
                  ) 
                })
              }
              </select>
            </div>

            <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault04"  >Department</label>
                  
                <select     className="form-control"   id="deptId"     name="deptId"          value={props.personDetails.deptId}
                    onChange={(e)=>{               
                      props.onEdit(e);

                      e.preventDefault();
                    }}>    
                               <option value=''>Select </option>  

              {
                deptList.map((dept,index)=>{
       
                  return (
                    
                    <option value={dept.id}>{ dept.name} </option>
           
          
                  ) 
                })
              }
              </select>
            </div>

            
                </div>
              
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault06">Password</label>
                    <input
                      name="pass"
                      type="password"
                      className="form-control"
                      id="pass"
                      value={props.personDetails.pass}
                      onChange={(e)=>passChangeHandler(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault06">Confirm Password</label>
                    <input
                      name="confirm_pass"
                      type="password"
                      className="form-control"
                      id="confirm_pass"
                      value={props.personDetails.confirm_pass}
                      onChange={props.onEdit}
                    />
                  </div>
              {errors.pass_match == true ? <div className="invalid-text">
                <p>Pass didn't matched</p>
              </div> :null}
               
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Stop Booking</label>
          
<select     className="form-control"   
        id="stopBooking"     
        value={props.personDetails.stopBooking}    
        name="stopBooking"
        onChange={props.onEdit} >      

              
                    
                    <option value="true">True </option>
                    <option value="false">False </option>
</select>
              {/* <input
                name="stopBooking"
                type="text"
                className="form-control"
                id="stopBooking"
                value={props.personDetails.stopBooking}
                onChange={props.onEdit}
              /> */}
            </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault04">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id="validationDefault04"
                      value={props.personDetails.description}
                      onChange={props.onEdit}
                    />
                  </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Sub Title</label>
              <input
                name="subTitle"
                type="text"
                className="form-control"
                id="subTitle"
                value={props.personDetails.subTitle}
                onChange={props.onEdit}
              />
            </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault04">Profile Image Url</label>
                    <input
                      type="text"
                      name="profileImageUrl"
                      className="form-control"
                      id="validationDefault04"
                      value={props.personDetails.profileImageUrl}
                      onChange={props.onEdit}
                    />
                  </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Fee</label>
              <input
                name="fee"
                type="text"
                className="form-control"
                id="fee"
                value={props.personDetails.fee}
                onChange={props.onEdit}
              />
            </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault04">Slot per day</label>
                    <input
                      type="text"
                      name="wspd"
                      className="form-control"
                      id="validationDefault04"
                      value={props.personDetails.wspd}
                      onChange={props.onEdit}
                    />
                  </div>
                </div>

          

                <button className="btn btn-success update_btn" type="submit"  >
                  Update
                </button>
              </form>
            </div>
            {/* <div className="col-sm-4 second_section">
              <div className="profileimage">
                {props.personDetails.imageUrl}
              </div>
              <div className="btn_section">
                <label htmlFor="files" className="selectimage">
                  Upload Image
                </label>
                <input
                  name="avatarimage"
                  id="files"
                  type="file"
                 // onChange={props.onImageChange}
                />
                <button
                  type="button"
                  className="removebutton"
                //  onClick={props.onImageRemove}
                >
                  {" "}
                  Remove
                </button>
              </div>

              <input id="files" type="file" onChange={null} />
            </div> */}
          </div>
  
        </div>
      </div>

      <div className="col-4 mycard p-3 slot-select" >


            <div className="div-flex-col"  style={{marginTop:"35px"}}>
            <div className="row timeslots-add">
            <div className="col-10 ">
          <label htmlFor="validationDefault06">Day</label>
      

<select     className="form-control "   id="day_code"     name="day_code"
      onChange={        (e)=>validate(e) }>      

              {
                day_code.map((code,index)=>{
                  return (
                    
                    <option value={code}>{ day[code]} </option>
           
          
                  )
                })
              }
                      </select>

                      {errors.invalid == true ? 
                      <div className="invalid-text">
                          <p>Invalid selection</p>
                      </div>   :null}
            </div>

            <div className="col-10 ">
                    <label htmlFor="validationDefault04">Time Slot Text</label>
                    <input
                      type="text"
                      name="time_slot"
                      className="form-control"
                      id="validationDefault04"
                    
                      onChange={props.onEditTimeSlot}
                    />
                  </div>


              <div className="col-2 place-baseline">
                <div>
                <button className="btn btn-info btn-sm" onClick={props.addDoctorTimeSlot}> ADD</button>
                </div>
           
            </div>
            </div>
            




            <div className="">
            <table className="table slot-select">
                  <thead>
                    <tr>
                      <th>
                        Day
                      </th>
                      <th>
                        Slots
                      </th>
                      <th colSpan={2}>
                        Options
                      </th>
                    </tr>
                  </thead>
                <tbody>
            { props?.timeslots.length>=1 ? props?.timeslots?.map((slots,index)=>{
              return (
              
                  <tr>
                    <td>
              
                      {day[slots.day_code]}
                    </td>
                    <td>
                    {slots?.time_slot}
                    </td>
                    <td>
                  <button className="btn btn-danger btn-sm" onClick={()=>props.deleteTimeSlots(slots.id)}>              <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                  </tr>
             
            


              )
            }

            
            )
            : 
            "No DATA"
          
          }
               </tbody>
                </table>
            </div>
            </div>
          



         
      </div>

      </div>


      <div>
        
      </div>

      <div>
      <div className="form-group"  style={{paddingTop:"15px"}} >
<label className="addfile" htmlFor="myInput">Add file</label>
<input id="myInput"type="file" name="file" className="mb-4" 

onChange={(e) => handleChangeImage(e)}  />
<button className="btn btn-success" style={ selectedFile ? {display:"unset"}:{display:"none"}} onClick={uploadFile}>Upload</button>
</div>




      <table className="table table-striped">
        <thead className="thead tablehead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">File Name</th>
       
            <th scope="col">Options</th>
            {/* <th scope="col">Email</th> */}
       
          </tr>
        </thead>
        
          <tbody className="tablebody">
              {  props.doctor_files.length>0?
                props.doctor_files.map((file,key)=>{
                  return (
                    <tr>
                      <td>
                        {key+1}
                      </td>
                      <td>
                     {file.file_name}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-danger" onClick={null}> <i className="fa fa-trash" aria-hidden="true"></i></button>
                        <a style={{marginLeft:"10px"}} target="_blank" href={file.file_url}>
                          <button className="btn btn-sm btn-info"><i class="bi bi-download"></i></button>
                        </a>
                      </td>
                    
                      
                 
                    </tr>
                  )
                }):"No files Found"
              }

            </tbody>
          </table>
           
      </div>
      </>
    );


 
}

export default EditDoctorForm;
