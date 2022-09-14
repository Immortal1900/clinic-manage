import React, { Component } from "react";
import "./login.css";
import firebase from "../../firebase";
import { useState } from "react";
import { login_clinic } from "../../Service/login_service";
import { useHistory } from "react-router-dom";



const LoginPage =(props)=> {
  const history = useHistory()
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     disableBtn: "",
  //     email: "",
  //     password: "",
  //     invaild: "invaild",
  //   };
  // }
  // login = (e) => {
  //   this.setState({
  //     disableBtn: "disable",
  //     invaild: "invaild",
  //   });
  //   e.preventDefault();
  //   console.log("jsjshshshs");
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(
  //       this.state.email,
  //       this.state.password
  //       //this.state.email, this.state.password
  //     )
  //     .then((u) => {
  //       this.setState({
  //         disableBtn: "",
  //         invaild: "invaild",
  //       });
  //       // console.log(u);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.setState({
  //         disableBtn: "",
  //         invaild: "",
  //       });
  //     });
  // };

  // onEdit = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const [errors,setErrors] = useState(false);
  const [loginObj,setLoginObj] = useState({
    pass:null,
    email:null
  });


  const onEdit = (event)=>{
    console.log("CALLED")
    const { name, value } = event.target;
    console.log(value);
    setLoginObj((loginObj)=>({...loginObj,[name]:value}))
  }

const onlogin=(e)=>{
  e.preventDefault();

  login_clinic(loginObj).then((res)=>{
    console.log(res);
    if(res.length>0){
      console.log("LOGGED IN");
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('usertype', 'clinic');
      window.location.reload();
    }
    else{
      console.log("INVALID EMAIL OR PASS")
      setErrors(true);
    }
    
 


  });

  }


 
    return (
      <div className="login_page">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-4 p-0 first_section">
              <div className="box">
                <div className="from_section">
                  <i class="fa fa-hospital-o" aria-hidden="true"></i>
                  <ul>
                    <li>
                      <i class="fa fa-user-md" aria-hidden="true"></i>
                    </li>
                    <h3 style={{ color: "white" }}>Hopital Management</h3>
                    <li></li>
                  </ul>

                  <form onSubmit={onlogin}>
                    <input
                      name="email"
                      class="form-control form-control-lg"
                      type="email"
                      placeholder="admin@example.com"
                      onChange={onEdit}
       
                      autocomplete="off"
                      required
                    />
                    <input
                      class="form-control form-control-lg"
                      type="pass"
                      placeholder="123456"
              
                      name="pass"
                      onChange={onEdit}
                      required
                    />

                    { errors == true ?  <p className={errors}>
                      Invalid login or password
                    </p>
                    :null
                  }

          <label htmlFor="validationDefault06">City ID</label>
      

<select     className="form-control login-select"   id="cityId"   onChange={onEdit}    name="cityId">
    
          
                    <option value='admin'> Admin</option>
                    <option value='clinic'>Clinic</option>
                    <option value='doctor'>Doctor</option>
               
              
                      </select>
         

                    <button
                      type="submit"
                      class="btn btn-info"
                  //    disabled={state.}
                    >
                      Login
                      <i class="fa fa-unlock" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8 p-0 second_section">
              <div className="box">
                <img alt="" srcset={require("../../Images/doctorbg.jpg")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default LoginPage;
