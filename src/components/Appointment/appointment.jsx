import React from 'react'
import './appointment.css';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from 'react';
import { changeFormat, getAge } from '../../Service/helpers';
import { addPersondetail } from '../../Service/fetch';
import Clinic_finding from './clinic_finding';
import Fees from './fees';
import Exam from './exam';
import { getUserByPhno } from '../../Service/fetch_general';
import Diagnosis from './diasgnosis';
import { getAllCLinic } from '../../Service/dropdown_data';
import { useEffect } from 'react';


function Appointment(){


    const [user,setUser] = useState({});
    const [modal,setModal]=useState({showModal:false  });
    const [alerts,setalerts] = useState({  dialog:false,  })
    const [msg,setMsg] = useState()
    const [currentTab,setCurrentTab] = useState('exam')
    const [initlize,setinitlize] = useState(false);
    const [userDataByPhone, setUserDataByPhone] = useState(false);
    const [selectedDiagnosisList, setSelectedDiagnosisList] = useState([]);
    const [selectedFeesList, setSelectedFeesList] = useState([]);
    const [selectedExamList, setSelectedExamList] = useState([]);
    const [allcliniclist,setAllcliniclist] = useState([]);




  useEffect(()=>{
    getclinicList();
  },[])



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
    const getuserdatabyphone = (phno)=>{
      getUserByPhno(phno).then((res)=>{
        if(res.length >=1 ){
          setUser(()=>res[0]);
          setUserDataByPhone(()=>true);
        }
        else{
          
          setUserDataByPhone(()=>false);
        }
        console.log(res);
      })
    }
  const getclinicList = ()=>{
    getAllCLinic().then((res)=>{
      if(res){
        setAllcliniclist(()=>res);
        setinitlize(()=>true);
      }
    })
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

                //case "clinic_findings":   return <Clinic_finding />;
               // case "diagnosis":   return <Diagnosis />;
                case "fees": return <Fees 
                clinic_id={user.clinic_id}
                selectedFeesList={selectedFeesList} 
                setSelectedFeesList={setSelectedFeesList}
                removeFees={removeFees}
                />;
                case "exam":  return <Exam
                clinic_id={user.clinic_id}
                removeExam={removeExam}
                setSelectedExamList={setSelectedExamList}
                selectedExamList={selectedExamList}
                
                />;
                case "diagnosis": return <Diagnosis 
                clinic_id={user.clinic_id}
                setSelectedDiagnosisList={setSelectedDiagnosisList}
                selectedDiagnosisList={selectedDiagnosisList}  
                removeDiag={removeDiag}
                />;
 
                default:      return <h1>No project match</h1>
              }
        }
        const removeDiag =(id)=>{
          console.log("CALLED" ,id)
   
          setSelectedDiagnosisList(()=>(selectedDiagnosisList.filter(item => item !== id)))

        }
        const removeFees =(id)=>{
          console.log("CALLED" ,id)
   
          setSelectedFeesList(()=>(selectedFeesList.filter(item => item !== id)))

        }
        const removeExam =(id)=>{
          console.log("CALLED" ,id)
   
          setSelectedExamList(()=>(setSelectedExamList.filter(item => item !== id)))

        }




    
  return (
    <>
    <div className='appointment-container mycard p-3'>
    <form onSubmit={addnewUser}>
    <div className="first_section">
      <div className="form-row">
        <div className="col-md-3 nm-1">
          <label htmlFor="validationDefault01">First name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
            onChange={onEdit}
            value={user.firstName}
            required
          />
        </div>
        <div className="col-md-3 nm-1">
          <label htmlFor="validationDefault02">Last name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            id="lastName"
            onChange={onEdit}
            value={user.lastName}
            required
          />
        </div>

        <div className="col-md-3 nm-1">
      <label htmlFor="validationDefault06">Civil ID</label>
          <input
            name="civil_id"
            type="text"
            className="form-control"
            id="civil_id"
            onChange={onEdit}
            value={user.civil_id}
          />
        </div>
        <div className="col-md-3 nm-1">
      <label htmlFor="validationDefault06">Clinic Id</label> <br />
      <select style={{display:"block"}} name="clinic_id" id="clinic_id" onChange={onEdit} value={user.clinic_id}> 
        <option value="">None</option>
        {
          allcliniclist.map((clinic,key)=>{
            return (
              <option value={clinic.id}> {clinic.title} </option>
            )
          })
        }
      </select>
     
        </div>

        
      </div>
      <div className="form-row">
      <div className="col-md-3 nm-1">
          <label htmlFor="validationDefault03">Mobile</label>
          <input
           onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
            name="phonenumber"
            type="text"
            className="form-control"
            id="phonenumber"
            onChange={onEdit}
            value={user.phone}
            required
          />
         
        </div>


        <div className="col-md-2 nm-1 position-end">
         <button className='btn btn-primary btn-sm' type='button' onClick={()=>getuserdatabyphone(user.phonenumber)} > Auto Fill</button>
        </div>



        <div className="col-md-2 nm-1">
          <label htmlFor="validationDefault10">Gender</label>
          <select
            name="sex"
            className="custom-select"
            id="sex"
            onChange={onEdit}
            required
            value={user.gender}
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
            value={user.age}
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
            value={user.city}
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
  
        {/* <div className={currentTab == "clinic_findings" ? "tab-button-container-active":"tab-button-container"  }>
            <button onClick=    {()=>tab_swicther('clinic_findings')}   > Clinic Findings </button>
        </div> */}
        <div className={currentTab == "diagnosis" ? "tab-button-container-active":"tab-button-container"  }>
         
            <button className='tab-button' onClick=    {()=>tab_swicther('diagnosis')}   >  Diagnosis</button>
        </div>
        <div className={currentTab == "fees" ? "tab-button-container-active":"tab-button-container"  }>
         
            <button className='tab-button' onClick=   {()=>tab_swicther('fees')}   >  Fees</button>
        </div>
        <div className={currentTab == "exam" ? "tab-button-container-active":"tab-button-container"  }>
         
        <button className='tab-button' onClick=   {()=>tab_swicther('exam')}   >  Exam </button>
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