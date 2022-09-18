import React from 'react'
import './appointment.css';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from 'react';
import { changeFormat, getAge } from '../../Service/helpers';
import { addPersondetail } from '../../Service/fetch';
import Clinic_finding from './clinic_finding';
import Fees from './fees';
import Leaves from './leaves';


function Appointment(){


    const [user,setUser] = useState({});
    const [modal,setModal]=useState({showModal:false  });
    const [alerts,setalerts] = useState({  dialog:false,  })
    const [msg,setMsg] = useState()
    const [currentTab,setCurrentTab] = useState('clinic_findings')


    const onEdit = (event)=>{
        console.log("CALLED")
        const { name, value } = event.target;
        console.log(value);
        setUser((user)=>({...user,[name]:value}))
      }


      const ondateChange = (e)=>{
        console.log(e);
        let mydate =  new Date(e);
        mydate = changeFormat(e)
        console.log("MYDDATE" , mydate);
        let age =  getAge(e);
      
          setUser((user)=>({...user,age:age}))
  
          setUser((user)=>({...user,dob:mydate}))
     
      }

        
    const addnewUser = (e)=>{
        addPersondetail(user).then((res)=>{
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


        const tab_swicther=(tab)=>{
            setCurrentTab(()=>(tab))
        }
        const returnTab = ()=>{
            switch(currentTab) {

                case "clinic_findings":   return <Clinic_finding />;
               // case "diagnosis":   return <Diagnosis />;
                case "fees": return <Fees />;
                case "leaves":  return <Leaves />;
        
                default:      return <h1>No project match</h1>
              }
        }




    
  return (
    <>
    <div className='appointment-container mycard p-3'>
    <form onSubmit={addnewUser}>
    <div className="first_section">
      <div className="form-row">
        <div className="col-md-4 nm-1">
          <label htmlFor="validationDefault01">First name</label>
          <input
            name="firstname"
            type="text"
            className="form-control"
            id="firstname"
            onChange={onEdit}
            required
          />
        </div>
        <div className="col-md-4 nm-1">
          <label htmlFor="validationDefault02">Last name</label>
          <input
            name="lastname"
            type="text"
            className="form-control"
            id="lastname"
            onChange={onEdit}
            required
          />
        </div>

        <div className="col-md-4 nm-1">
      <label htmlFor="validationDefault06">Civil ID</label>
          <input
            name="civil_id"
            type="text"
            className="form-control"
            id="civil_id"
            onChange={onEdit}
          />
        </div>
      </div>
      <div className="form-row">
      <div className="col-md-4 nm-1">
          <label htmlFor="validationDefault03">Mobile</label>
          <input
            name="phonenumber"
            type="number"
            className="form-control"
            id="phonenumber"
            onChange={onEdit}
            required
          />
        </div>
        <div className="col-md-2 nm-1">
          <label htmlFor="validationDefault10">Sex</label>
          <select
            name="sex"
            className="custom-select"
            id="sex"
            onChange={onEdit}
            required
          >
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="col-md-2 nm-1">
          <label htmlFor="validationDefault12">Birth Date</label>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              style={{
                padding: "0px 10px",
                border: "1px solid rgb(197, 197, 197)",
              }}
              name="dob"
              id="dob"
              className="  form-control"
              InputProps={{
                disableUnderline: true,
              }}
              value={user.dob}
              onChange={ondateChange}
              autoComplete="off"
              format="yyyy-MM-dd"
            />
          </MuiPickersUtilsProvider>
          {/* <DatePicker
          name="birthdate"
          selected={startDate}
          className="datepicker form-control"
          value={date}
          onChange={handleChange}
          autoComplete="off"
        /> */}
        </div>
        <div className="col-md-2 nm-1">
          <label htmlFor="validationDefault06">Age</label>
          <input
            name="age"
            type="text"
            className="form-control"
            id="age"
            value={user.age}
            onChange={onEdit}
          />
        </div>
   
      </div>

      <div className="form-row">
       

      
        {/* <div className="col-md-6 nm-1">
          <label htmlFor="validationDefault13">Blood Group</label>
          <select
            name="bloodgroup"
            type="text"
            className="form-control"
            id="bloodgroup"
            onChange={onEdit}
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
          onChange={onEdit}
        /> 
        </div> */}
      </div>

      <div className="form-row">
     
      </div>
      <div className="form-row">
        <div className="col-md-6 nm-1">
          <label htmlFor="validationDefault04">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={onEdit}
          />
        </div>

        
        <div className="col-md-4 nm-1">
          <label htmlFor="validationDefault06">City</label>
          <input
            name="city"
            type="text"
            className="form-control"
            id="city"
            onChange={onEdit}
          />
        </div>
      </div>
      {/* <div className="form-row">
        <div className="col-md-12 nm-1">
          <label htmlFor="validationDefault05">Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="address"
            onChange={onEdit}
          />
        </div>
      </div> */}

 
   

      
    </div>

    <button className="btn btn-success savebtn" type="submit" >
      Save
    </button>
  </form>
    </div>
  <div className='tab-container mycard mt-3'>
      <div className='div-f-tabs'>
  
        <div className={currentTab == "clinic_findings" ? "tab-button-container-active":"tab-button-container"  }>
            <button onClick=    {()=>tab_swicther('clinic_findings')}   > Clinic Findings </button>
        </div>
        <div className={currentTab == "diagnosis" ? "tab-button-container-active":"tab-button-container"  }>
         
            <button onClick=    {()=>tab_swicther('diagnosis')}   >  Diagnosis</button>
        </div>
        <div className={currentTab == "fees" ? "tab-button-container-active":"tab-button-container"  }>
         
            <button  onClick=   {()=>tab_swicther('fees')}   >  Fees</button>
        </div>
        <div className={currentTab == "leaves" ? "tab-button-container-active":"tab-button-container"  }>
         
        <button  onClick=   {()=>tab_swicther('leaves')}   >  Leaves </button>
        </div>

      </div>


      <div className='tab-data-container'>
            {  returnTab()  }
      </div>
  </div>
  </>
  )
}

export default Appointment