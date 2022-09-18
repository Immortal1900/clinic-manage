import React, { Component } from "react";
import "./sliderNavBar.css";
import AddPersonDetails from "./PersonDetails/addpersondetails";
import PatienList from "./Patients/patientlist";

import EditPersonDetails from "./PersonDetails/editpersondetails";
import Clinic from "./Clinic/clinic"

import firebase from "../firebase";
import {
  BrowserRouter as Routers,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";







import { setLogInDetails } from "../actions/setpersondetailsaction";
import { connect } from "react-redux";
import AddClinic from "./Clinic/addclinic";
import EditClinic from "./Clinic/editclinic";
import AddDoctor from "./Doctors/adddoctor";
import EditDoctor from "./Doctors/editdoctor";
import Doctor from "./Doctors/doctor";
import EditDepartment from "./Department/editdepartment";
import AddDepartment from "./Department/adddepartment";
import Department from "./Department/department";
import AddCity from "./City/addcity";
import EditCity from "./City/editcity";
import City from './City/city'
import Appointment from "./Appointment/appointment";











class SideNavBar extends Component {
  state = {
    addHamburgerClass: false,
    addTitleClass: true,
    patientdetails: null,
    togglePymentTitle: true,
    selectedCat: "",
  };

  getData = (data) => {
    this.setState({ patientdetails: data });
  };

  toggleHamburger = () => {
    this.setState({ addHamburgerClass: !this.state.addHamburgerClass });
  };
  toggleTitle = () => {
    this.setState({ addTitleClass: !this.state.addTitleClass });
  };
  togglePymentTitle = () => {
    this.setState({ togglePymentTitle: !this.state.togglePymentTitle });
  };
  logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };
  setTitleActive = (selectedCat) => {
    this.setState({
      selectedCat: selectedCat,
    });
  };

  render() {
    let boxClass = ["wrapper"];

    if (this.state.addHamburgerClass) {
      boxClass.push("collap");
    }
    let titleClass = ["subcat"];
    if (this.state.addTitleClass) {
      titleClass.push("collap");
    }
    let togglePymentTitle = ["subcat"];
    if (this.state.togglePymentTitle) {
      togglePymentTitle.push("collap");
      // console.log(boxClass);
    }
    return (
      <div className={boxClass.join(" ")}>
        <Routers>
          <div className="top_navbar">
            <div className="hamburger" onClick={this.toggleHamburger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="top_menu">
              <div className="logo">Hospital Management</div>
              <ul>
                <li onClick={this.logout}>
                  {" "}
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fas fa-search"></i>
                </li>
                <li>
                  <i className="fas fa-bell"></i>
                </li>
                <li>
                  <i className="fas fa-user"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="noSubCat">
              <ul>
             
            <div className ={  localStorage.getItem('usertype') == 'clinic' ? 'div-hide': 'show' }>
                <Link to="/patientlist">
                  <li  
                    className={
                      this.state.selectedCat === "Patient" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Patient")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">User</span>
                  </li>
                </Link>
                </div>

                <Link to="/city">
                  <li
                    className={
                      this.state.selectedCat === "city" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("doctor")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">City </span>
                  </li>
                </Link>

                
                <Link to="/clinic">
                  <li
                    className={
                      this.state.selectedCat === "Clinic" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Clinic")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">Clinic </span>
                  </li>
                </Link>

                <Link to="/department">
                  <li
                    className={
                      this.state.selectedCat === "department" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("department")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">Department </span>
                  </li>
                </Link>

                <Link to="/doctor">
                  <li
                    className={
                      this.state.selectedCat === "doctor" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("doctor")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">Doctor </span>
                  </li>
                </Link>

                <Link to="/appointment">
                  <li
                    className={
                      this.state.selectedCat === "appointment" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("appointment")}
                  >
                    <span className="icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="title">Appointment </span>
                  </li>
                </Link>


          
              
{/* 
                   <Link to="/">
                  <li
                    className={
                      this.state.selectedCat === "Dashboard" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Dashboard")}
                  >
                    <span className="icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                    <span className="title">Dashboard</span>
                  </li>
                </Link>

                <Link to="/doctorslist">
                  <li
                    className={
                      this.state.selectedCat === "Doctors" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Doctors")}
                  >
                    {" "}
                    <span className="icon">
                      <i className="fa fa-user-md" aria-hidden="true"></i>
                    </span>
                    <span className="title">Doctors</span>
                  </li>
                </Link>
                <Link to="/nurselist">
                  <li
                    className={
                      this.state.selectedCat === "Nurse" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Nurse")}
                  >
                    <span className="icon">
                      <i className="fa fa-female" aria-hidden="true"></i>
                    </span>
                    <span className="title">Nurse</span>
                  </li>
                </Link>

                <Link to="/pharmacistslist">
                  <li
                    className={
                      this.state.selectedCat === "pharmacist" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("pharmacist")}
                  >
                    <span className="icon">
                      <i className="fa fa-medkit" aria-hidden="true"></i>
                    </span>
                    <span className="title">pharmacist</span>
                  </li>
                </Link>

     

                <Link to="/accountantlist">
                  <li
                    className={
                      this.state.selectedCat === "Accountant" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Accountant")}
                  >
                    <span className="icon">
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </span>
                    <span className="title">Accountant</span>
                  </li>
                </Link>

                <Link to="/receptionistlist">
                  <li
                    className={
                      this.state.selectedCat === "Receptionist" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Receptionist")}
                  >
                    <span className="icon">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </span>
                    <span className="title">Receptionist</span>
                  </li>
                </Link> */}
              </ul>
            </div>
            <hr />

            {/* <div className="withsubcat">
              <div className="maincat">
                <ul>
                  <li onClick={this.toggleTitle}>
                    <span className="icon">
                      <i className="fa fa-h-square" aria-hidden="true"></i>
                    </span>
                    <span className="title">Manage Hospital</span>
                  </li>
                </ul>
              </div>

              <div className={titleClass.join(" ")}>
                <ul>
                  <li
                    className={
                      this.state.selectedCat === "BedAllotment" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("BedAllotment")}
                  >
                    <Link to="/bedlist">
                      {" "}
                      <span className="subtitle">Bed Allotment</span>
                    </Link>
                  </li>

                  <li
                    className={
                      this.state.selectedCat === "Medicine" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("Medicine")}
                  >
                    {" "}
                    <Link to="/medicinelist">
                      {" "}
                      <span className="subtitle">Medicine</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.selectedCat === "BloodBag" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("BloodBag")}
                  >
                    {" "}
                    <Link to="/bloodbaglist">
                      {" "}
                      <span className="subtitle">Blood Bag</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.selectedCat === "OperationReport"
                        ? "active"
                        : ""
                    }
                    onClick={() => this.setTitleActive("OperationReport")}
                  >
                    {" "}
                    <Link to="/operationreportlist">
                      {" "}
                      <span className="subtitle">Operation Report</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.selectedCat === "BirthReport" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("BirthReport")}
                  >
                    {" "}
                    <Link to="/birthreportlist">
                      {" "}
                      <span className="subtitle">Birth Report</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.selectedCat === "DeathReport" ? "active" : ""
                    }
                    onClick={() => this.setTitleActive("DeathReport")}
                  >
                    {" "}
                    <Link to="/deathreportlist">
                      {" "}
                      <span className="subtitle">Death Report</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <hr />

              <div className="withsubcat">
                <div className="maincat">
                  <ul>
                    <li onClick={this.togglePymentTitle}>
                      <span className="icon">
                        <i
                          className="fa fa-credit-card-alt"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="title">Payments</span>
                    </li>
                  </ul>
                </div>

                <div className={togglePymentTitle.join(" ")}>
                  <ul>
                    <li
                      className={
                        this.state.selectedCat === "CreatePayroll"
                          ? "active"
                          : ""
                      }
                      onClick={() => this.setTitleActive("CreatePayroll")}
                    >
                      {" "}
                      <Link to="/createpayroll">
                        <span className="subtitle">Create Payroll</span>
                      </Link>
                    </li>
                    <li
                      className={
                        this.state.selectedCat === "Payroll" ? "active" : ""
                      }
                      onClick={() => this.setTitleActive("Payroll")}
                    >
                      {" "}
                      <Link to="/payrolllist">
                        {" "}
                        <span className="subtitle">Payroll</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <hr />
              </div>
            </div> */}
          </div>

          <div className="main_container">
            <Switch>
              <Route exact path="/">
                <PatienList />
              </Route>
              <Route path="/patientlist">
                <PatienList />
              </Route>

              <Route path="/addpatient">
                <AddPersonDetails />
              </Route>

              <Route path="/editpersondetails">
                <EditPersonDetails />
              </Route>

              <Route path="/clinic">
                <Clinic />
              </Route>
              <Route path="/addclinic">
                <AddClinic />
              </Route>
              <Route path="/editclinic">
                <EditClinic />
              </Route>
       

              <Route path="/doctor">
                <Doctor />
              </Route>
              <Route path="/adddoctor">
                <AddDoctor />
              </Route>
              <Route path="/editdoctor">
                <EditDoctor />
              </Route>

              <Route path="/department">
                <Department />
              </Route>
              <Route path="/adddepartment">
                <AddDepartment />
              </Route>
              <Route path="/editdepartment">
                <EditDepartment />
              </Route>

                  <Route path="/city">
                <City />
              </Route>
              <Route path="/addcity">
                <AddCity />
              </Route>
              <Route path="/editcity">
                <EditCity />
              </Route>




{/* ************************************** */}
<Route path="/appointment">
                <Appointment />
              </Route>
              <Route path="/addappointment">
                <AddCity />
              </Route>
              <Route path="/editappointment">
                <EditCity />
              </Route>



















              {/* <Route path="/doctorslist">
                <DoctorsLis />
              </Route>
              <Route path="/bedlist">
                <Bedlist />
              </Route>
              <Route path="/bedlistt/bedallotment">
                <BedAllotment />
              </Route>
              <Route path="/medicinelist">
                <MedicineList />
              </Route>
              <Route path="/bloodbaglist">
                <BloodBagList />
              </Route>

              <Route path="/operationreportlist/operationreport">
                <OperationAllotment />
              </Route>
              <Route path="/operationreportlist">
                <OperationReportList />
              </Route>
              <Route path="/deathreportlist/deathreportallotment">
                <DeathRepotAllotment />
              </Route>
              <Route path="/deathreportlist">
                <DeathReportList />
              </Route>
              <Route path="/birthreportlist/birthreportallotment">
                <BirthRepotAllotment />
              </Route>
              <Route path="/birthreportlist">
                <BirthReportList />
              </Route>
              <Route path="/nurselist">
                <NurseList />
              </Route>
              <Route path="/pharmacistslist">
                <PharmacistsList />
              </Route>


              <Route path="/accountantlist">
                <AccountantList />
              </Route>

              <Route path="/receptionistlist">
                <ReceptionistList />
              </Route>

              <Route path="/createpayroll">
                <CreatePayRoll />
              </Route>
              <Route path="/payrolllist">
                <PayrollList />
              </Route> */}
              <Redirect to="" />
            </Switch>
          </div>
        </Routers>
      </div>
    );
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    setOnLogInDetails: (p) => {
      dispatch(setLogInDetails(p));
    },
  };
};
export default connect(null, mapDisptachToProps)(SideNavBar);
