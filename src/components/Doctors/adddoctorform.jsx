import React, { Component } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./adddoctorform.css";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCity, getAllCLinicByCityId, getAllDeptByClinicId } from "../../Service/dropdown_data";



  const AddDoctorForm  = (props)=> {

  const [clinicList,setClinicList] = useState([]);
  const [cityList,setCityList] = useState([])
  const [deptList,setDeptList] = useState([]);
  const [error_pass_match,seterror_pass_match] = useState(false);
  const [dropdownState,setDropDownState] = useState({})
  useEffect(()=>{
    getallcity().then(()=>{
      //setinitialized(()=>true);
    })
  
  },[])


  const getallclinicbycityid=(selectedCityId)=>{
    console.log("Curremt CIty ID" ,dropdownState.city);
     getAllCLinicByCityId(selectedCityId).then((res)=>{
      setClinicList(()=>(           res      ));
      console.log(  'Clinic List',   res);
    //  setStateupdate((stateUpdated)=>stateUpdated+1)
    }).catch((e)=>console.log(e))
  }
  
  const getalldeptbyclinicid=(selectedClinicId)=>{
    
    console.log(selectedClinicId);
    getAllDeptByClinicId(selectedClinicId).then((res)=>{
     setDeptList(()=>(           res      ));
     console.log(  'Dept List',   res);
   //  setStateupdate((stateUpdated)=>stateUpdated+1)
   }).catch((e)=>console.log(e))
  }

  const getallcity = async()=>{
    await getAllCity().then((res)=>{
      setCityList(()=>(           res      ));
      console.log(  'City List',   res);
    //  setStateupdate((stateUpdated)=>stateUpdated+1)
    }).catch((e)=>console.log(e))
  }
  

   const checkDoctorForm = (e)=>{
    e.preventDefault();
    console.log("CALED,",props.personDetails.confirm_pass);
    if(props.personDetails.pass != props.personDetails.confirm_pass){
      console.log("PASS NOT MATCHEed");
      seterror_pass_match(()=>true);
   
    }
    else {
     
      seterror_pass_match(()=>false);
      props.handleSubmit(e);
    }
    
   
    
  }



    return (
      <form onSubmit={
       // props.handleSubmit
       checkDoctorForm
        }>
        <div className="first_section">
        <div className="form-row">
                <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault04">City</label>
                  
                <select     className="form-control"   id="cityId"  required   name="cityId"      
                    onChange={(e)=>{
                      let value = e.target.value;
                      props.onEdit(e);
                      
                     // setDropDownState(()=>({...dropdownState, city : value}))
                        getallclinicbycityid(e.target.value);
                     
            
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
              
                    onChange={(e)=>{
                      let value = e.target.value;
                
                      
                    //  setDropDownState(()=>({...dropdownState, clinc : value}))
                      getalldeptbyclinicid(e.target.value);
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
                  
                <select     className="form-control"   id="deptId"     name="deptId"     
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
              <label htmlFor="validationDefault01">First Name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                onChange={props.onEdit}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                onChange={props.onEdit}
                required
              />
            </div>
          
          </div>
          <div className="form-row">
          <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                onChange={props.onEdit}
              />
            </div>
          

         

          
       
         
          </div>

          <div className="form-row">
          <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Phone No.</label>
              <input
                name="pNo1"
                type="text"
                className="form-control"
                id="pNo1"
                onChange={props.onEdit}
              />
            </div>
          <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Alternate Phone No.</label>
              <input
                name="pNo2"
                type="text"
                className="form-control"
                id="pNo2"
                onChange={props.onEdit}
              />
            </div>
         
            {/* <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault13">Blood Group</label>
              <select
                name="bloodgroup"
                type="text"
                className="form-control"
                id="bloodgroup"
                onChange={props.onEdit}
              >
                <option></option>
                <option>A+</option>
                <option>A-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

              <input
              name="bloodgroup"
              type="text"
              className="form-control"
              id="bloodgroup"
              onChange={props.onEdit}
            /> 
            </div> */}
          </div>

          <div className="form-row">
          <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Password</label>
              <input
                name="pass"
                type="password"
                className="form-control"
                id="pass"
                onChange={props.onEdit}
              />
            </div>
            <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Confirm Password</label>
              <input
                name="confirm_pass"
                type="password"
                className="form-control"
                id="confirm_pass"
                onChange={props.onEdit}
              />
            </div>
            {error_pass_match  == true ? <div className="invalid-text"> "Password Didn't matched"</div> : null}
          </div>

          {/* <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault06">Password</label>
              <input
                name="pass"
                type="text"
                className="form-control"
                id="pass"
                onChange={props.onEdit}
              />
            </div> */}
        
          {/* <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="validationDefault05">Address</label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="address"
                onChange={props.onEdit}
              />
            </div>
          </div> */}
          <div className="form-row">
          <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Whatsapp No.</label>
              <input
                name="whatsAppNo"
                type="text"
                className="form-control"
                id="whatsAppNo"
                onChange={props.onEdit}
              />
            </div>
          </div>
             {/*
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault07">State</label>
              <select
                name="state"
                className="custom-select"
                id="state"
                onChange={props.onEdit}
              >
                <option></option>
                <option>CG</option>
                <option>MP</option>
                <option>UP</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault08">Zip</label>
              <input
                name="zip"
                type="text"
                className="form-control"
                id="zip"
                onChange={props.onEdit}
              />
            </div>
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="validationDefault09">Remarks</label>
            <textarea
              name="remarks"
              className="form-control"
              id="remark"
              onChange={props.onEdit}
              rows="3"
            ></textarea>
          </div> */}
        </div>

        {/* <div className="container">
          <div className="row second_section">
            <div className="clo-sm-6">
              <div className="profileimage">{props.htmlelement}</div>
            </div>

            <div className="col-sm-6 btn_section">
              <label htmlFor="files" className="selectimage">
                Upload Image
              </label>
              <input
                name="avatarimage"
                id="files"
                type="file"
                onChange={props.onImageChange}
              />
              <button
                type="button"
                className="removebutton"
                onClick={props.onImageRemove}
              >
                {" "}
                Remove
              </button>
            </div>
          </div>
        </div> */}



        <button className="btn btn-success savebtn" type="submit" >
          Save
        </button>
      </form>
    );
  
}

export default AddDoctorForm;
