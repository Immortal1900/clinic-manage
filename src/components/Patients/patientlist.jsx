import React, { Component } from "react";
import "./patientlist.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setpersonDetails,
  setReportDetails,
} from "../../actions/setpersondetailsaction";
import FormPrompt from "../DailogBoxes/formprompt";
import AddPersonDetails from "../PersonDetails/addpersondetails";
import AlertDialogBox from "../DailogBoxes/alertdailogbox";
import ConfirmDialogBox from "../DailogBoxes/confirmdailogbox";
import ErorrDialogBox from "../DailogBoxes/errordaologbox";
import Service from "../../Service/firebase";
import  { useState, useEffect } from 'react';
import { getSpecified } from '../../Service/fetch';

 const PatienList= ()=> {
  const [list,setlist] = useState([]);
  const [count,setcount] = useState(0);
  const mycount = 0;


  useEffect (()=>{

    const fetchData = async ()=> {
      const data = await getSpecified()
      .then((res)=>{console.log(res)
      setlist(res);}
      ).
      catch((e)=>{console.log(e)})  ;
    }
    console.log(" RAN ONCE");
    
   
    fetchData();
  },[])

  const countNumbering=()=>{
    console.log("CALLEd");
   // setcount((count)=>(count +1));
    mycount++;
  }


  return (
 
    <div className="patientlistpage">
      
    <div className="main_section">

      

      <div className="topheader">
        <ul>
          <li>
            <i
              className="fa fa-arrow-circle-o-right fa-2x"
              aria-hidden="true"
            ></i>
          </li>
          <li>
            <h5>Patient</h5>
          </li>
        </ul>
      </div>
      <hr />
      <div className="top_section">
        <div className="wrap">
          <ul>
            <li>
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search patient by full name"
              
          
                />

                <button
          
                  type="submit"
                  className="searchButton"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </li>
            <li style={{ fontSize: "12px" }}> #</li>
            <li tyle={{ fontSize: "12px" }}>
   length
              
              {" "}
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-warning"
        
        >
          + Add Patient
        </button>
      </div>
      <table className="table table-striped">
        <thead className="thead tablehead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Sex</th>
            <th scope="col">Age</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Mobile</th>
            {/* <th scope="col">Email</th> */}
            <th scope="col">City</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        { 
        ( 
          <tbody className="tablebody">
            {list &&
              list.map((p,index) => {

            
           /*     count++;
                let date = new Date(p.timeStamp.toDate());
                const createdTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                const createdDate = `${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`;
*/
                return (
                  <tr key={p}>
                    <td className="align-middle"  >
                      {index+1}
                        </td>
                        <td className="align-middle">
                    {p?.imageUrl}
                        </td>
                        <td className="align-middle">
                   {p?.firstName + " "+ p?.lastName} 
                        </td>
                        <td className="align-middle">
                    {p?.gender}
                        </td>
                        <td className="align-middle">
                    {p?.age}
                        </td>
                        <td className="align-middle">
                    {p?.gender}
                        </td>
                        <td className="align-middle">
                    {p?.pNo +" " + p?.phone }
                        </td>
                        <td className="align-middle">
                    {p?.city}
                        </td>
                        <td className="align-middle">
                    {p?.createdTimeStamp}
                        </td>
                        <td className="align-middle">
                    {p?.amount}
                        </td>
                 
                    <td className="align-middle">
                      <Link to={{pathname: "editpersondetails",
                    state:{  
                      personDetails: p,
                      collectionName: "patients",
                    }
                    
                    }}  >
                        <button
                          onClick={async () => {
                            const sendData = {
                              ...p,
                              collectionName: "patients",
                              personId: p.patientid,
                            };
                            const reportDeatils = {
                              bedallotementid: p.bedallotementid,
                              operationreportid: p.operationreportid,
                              birthreportid: p.birthreportid,
                              deathreportid: p.deathreportid,
                            };

                          //  this.props.setOnPatientDetails(sendData);
                         //   this.props.setOnReportDetails(reportDeatils);
                          }}
                          type="button"
                          className="btn btn-success"
                        >
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>


                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          this.handleOnDelete(
                            p.firstname + " " + p.lastname,
                            p.patientid
                          );
                        }}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </table>

 
    </div>
  </div>
  )

}
export default PatienList

















