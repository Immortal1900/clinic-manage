import React, { Component } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./adddepartmentform.css";

class AddDepartmentForm extends Component {

  constructor(props) {
    super();
    this.state={
      error_clinic_id:false,
    }
  }
  componentDidMount(){
    console.log("CLINICS",this.props.allClinic);
    console.log("CITIES",this.props.cities);
  }


  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="first_section">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Name</label>
              <input
                name="name"
                type="text" 
                className="form-control"
                id="name"
                onChange={this.props.onEdit}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault02">City ID</label>
        
               <select     className="form-control"   id="city_id"  required   name="city_id"
              onChange={(e)=>this.props.onEdit(e)}>    
                         <option value=''>Select </option>  

        {
          this.props.cities.map((city,index)=>{
 
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
          <select     className="form-control"   id="clinic_id"  required   name="clinic_id"
                    onChange={(e)=>this.props.onEdit(e)}>    
                               <option value=''>Select </option>  

              {
                this.props.allClinic.map((clinic,index)=>{
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
                onChange={this.props.onEdit}
              />
            </div>

          
       
            {/* <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault11">Age</label>
              <input
                name="age"
                type="number"
                className="form-control"
                id="age"
                onChange={this.props.onEdit}
              />
            </div> */}
          </div>

          <div className="form-row">
         
            {/* <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault13">Blood Group</label>
              <select
                name="bloodgroup"
                type="text"
                className="form-control"
                id="bloodgroup"
                onChange={this.props.onEdit}
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
              onChange={this.props.onEdit}
            /> 
            </div> */}
          </div>

     
  
          {/* <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="validationDefault05">Address</label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="address"
                onChange={this.props.onEdit}
              />
            </div>
          </div> */}
  
             {/*
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault07">State</label>
              <select
                name="state"
                className="custom-select"
                id="state"
                onChange={this.props.onEdit}
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
                onChange={this.props.onEdit}
              />
            </div>
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="validationDefault09">Remarks</label>
            <textarea
              name="remarks"
              className="form-control"
              id="remark"
              onChange={this.props.onEdit}
              rows="3"
            ></textarea>
          </div> */}
        </div>

        {/* <div className="container">
          <div className="row second_section">
            <div className="clo-sm-6">
              <div className="profileimage">{this.props.htmlelement}</div>
            </div>

            <div className="col-sm-6 btn_section">
              <label htmlFor="files" className="selectimage">
                Upload Image
              </label>
              <input
                name="avatarimage"
                id="files"
                type="file"
                onChange={this.props.onImageChange}
              />
              <button
                type="button"
                className="removebutton"
                onClick={this.props.onImageRemove}
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
}

export default AddDepartmentForm;
