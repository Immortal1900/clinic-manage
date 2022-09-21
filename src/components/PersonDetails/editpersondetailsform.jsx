import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./editpersondetailsform.css";
import Reports from "./reports";
import { useEffect } from "react";
import { useState } from "react";

const EditPersonDetailsForm  = (props)=> {
const [stateupdated,setStateUpdated] = useState(1);

   
useEffect(()=>{
  
  console.log("PROPS", props);
  setStateUpdated(()=>stateupdated+1);
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
              <form onSubmit={props.update}>
              <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault01">Clinic ID</label>
                    <input
                    disabled
                      name="clinic_id"
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      required
                      value={props.personDetails.clinic_id}
                     // onChange={(e)=>props.onEdit(e)}
                    />
                  </div>
                  </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault01">First name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      required
                      value={props.personDetails.firstName}
                      onChange={(e)=>props.onEdit(e)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault02">Last name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      value={props.personDetails.lastName}
                      onChange={props.onEdit}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Civil ID</label>
              <input
                name="civil_id"
                type="text"
                className="form-control"
                id="civil_id"
                value={props.personDetails.civil_id}
                onChange={props.onEdit}
              />
            </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault10">Sex</label>
                    <select
                      name="gender"
                      className="custom-select"
                      id="validationDefault10"
                      value={props.personDetails.gender}
                      onChange={props.onEdit}
                      required
                    >
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>
              
                </div>

                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault12">Birth Date</label>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        style={{
                          padding: "0px 10px",
                          border: "1px solid rgb(197, 197, 197)",
                        }}
                        name="dob"
                        className="  form-control"
                        // selected={props.startDate}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        value={props.personDetails.dob}
                        onChange={props.ondateChange}
                        autoComplete="off"
                        format="yyyy-MM-dd"
                      />
                    </MuiPickersUtilsProvider>
                  </div>
               
                </div>

                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault03">Mobile</label>
                    <input
                      name="pNo"
                      type="number"
                      className="form-control"
                      id="validationDefault03"
                      value={props.personDetails.pNo}
                      onChange={props.onEdit}
                      required
                    />
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
                    <label htmlFor="validationDefault06">City</label>
                 
                         <select     className="form-control"   id="city"  required   name="city"          value={props.personDetails.city}
                    onChange={(e)=>props.onEdit(e)}>    
                               <option value=''>Select </option>  

              {
                props.cities.map((city,index)=>{
       
                  return (
                    
                    <option value={city.id}>{ city.cityName} </option>
           
          
                  ) 
                })
              }
              </select>
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
          {props.personDetails.collectionName === "patients" ? (
            <div className="thrid_section">
   {/* <Reports personDetails={props.personDetails}></Reports>  */}
            </div>
          ) : null}
        </div>
      </div>
    );
  
}

export default EditPersonDetailsForm;
