import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./editdepartmentform.css";

import { useEffect } from "react";

const EditDepartmentForm  = (props)=> {

   
useEffect(()=>{
  
  console.log("PROPS EDIT Department", props);
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
                    <label htmlFor="validationDefault02">City ID</label>
                 
                             <select     className="form-control"   id="city_id"  required   name="city_id"          value={props.personDetails.city_id}
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

                <div className="form-row">
                <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Clinic ID</label>
          
                  <select     className="form-control"   id="clinic_id"  required   name="clinic_id"   value={props.personDetails.clinic_id}
                    onChange={(e)=>props.onEdit(e)}>    
                               <option value=''>Select </option>  

              {
                props.allClinic.map((clinic,index)=>{
       
                  return (
                    
                    <option value={clinic.city_id}>{ clinic.title} - ID {clinic.city_id} </option>
           
          
                  ) 
                })
              }
              </select>
            </div>
            <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault06">Image URL</label>
              <input
                name="imageUrl"
                type="text"
                className="form-control"
                id="imageUrl"
                value={props.personDetails.imageUrl}
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
    );
  
}

export default EditDepartmentForm;
