import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./editclinicform.css";

import { useEffect } from "react";
import { useState } from "react";

const EditClinicForm  = (props)=> {
  const [errors,setErrors] = useState({})



  const checkClinicForm = (e)=>{
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
  
  console.log("PROPS EDIT CLINIC", props);
},[props])

    return (
      <div className="editd_person_details_formpage">
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
              <form onSubmit={checkClinicForm}>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault01">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={props.personDetails.name}
                      onChange={(e)=>props.onEdit(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault02">Location Name</label>
                    <input
                      name="lName"
                      type="text"
                      className="form-control"
                      id="lName"
                      value={props.personDetails.lName}
                      onChange={props.onEdit}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Google Map URL</label>
              <input
                name="gUrl"
                type="text"
                className="form-control"
                id="gUrl"
                value={props.personDetails.gUrl}
                onChange={props.onEdit}
              />
            </div>
             <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">City ID</label>
      

<select     className="form-control"   id="cityId"  value={props.personDetails.cityId}     name="cityId"
      onChange={props.onEdit}>
              {
                props.cityList.map((city,index)=>{
                  return (
          
                    <option value={city.id}>{city.cityName}</option>
           
          
                  )
                })
              }
                      </select>
            </div>
                
              
                </div>

              

               
                <div className="form-row">
                  <div className="col-md-12 mb-3">
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
    );
  
}

export default EditClinicForm;
