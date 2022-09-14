import React, { Component } from "react";
import "./department.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
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
import { getSearchedData, getSpecified } from '../../Service/department_fetch';
import { useLocation } from 'react-router-dom'
import { Button } from "@material-ui/core";
import { loadingStart , loadingEnd } from "../../actions/loading";
import store from "../../store";
import { deleteEntity } from "../../Service/clinic_fetch";



 const Department= (props)=> {
  const [list,setlist] = useState([]);
  const [count,setcount] = useState(0);
  const mycount = 0;
  const [totalitem,setTotalItem] = useState();
  const location = useLocation()
  const myprops = location?.state;
  const [searchitem,setSearchitem] = useState("");
  const [searched, setSearchClicked] = useState(false);
  const [currenPage,setCurrentpage] = useState(1);
  const [currentPageLength,setCurrentPageLength] = useState(0);
  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();


  useEffect (()=>{


    console.log(" RAN ONCE");
    
   
    fetchData();
  },[])

  const fetchData = async (page)=> {
    dispatch({type: "LoadStart"});
    setLoading(()=>true)
    const data = await getSpecified(currenPage).then((res)=>{
      console.log(res)

      setTotalItem(()=>res.length)
      console.log("RESPONSE IS",res)
    setlist(res);
    
    dispatch({type: "LoadEnd"});
    setLoading(()=>false)
  }
    ).
    catch((e)=>{
      dispatch({type: "LoadEnd"});
      setLoading(()=>false)
      console.log(e)})  ;
  }

  const countNumbering=()=>{
    console.log("CALLEd");
   // setcount((count)=>(count +1));
    mycount++;
  }

  store.subscribe(()=>
  {
    console.log(store.getState)
  })

const prevPage= async(page)=>{
  console.log("PREV PAGE");
    setCurrentpage(()=>(currenPage-1))
    if( searched ){
          setLoading(()=>true)
      const data = await getSearchedData(searchitem , page).then((res)=>{
        console.log(res)
        setTotalItem(()=>res.length)
        setLoading(()=>false)
        console.log("RESPONSE IS",res)
      setlist(res);
    }
      ).
      catch((e)=>{
        setLoading(()=>false)
        console.log(e)})  ;
    }
    else{
      setLoading(()=>true)
      const data = await getSpecified(page).then((res)=>{
        console.log(res)
        setTotalItem(()=>res.length)
        console.log("RESPONSE IS",res)
      setlist(res);
      setLoading(()=>false)
    }
      ).
      catch((e)=>{
        setLoading(()=>false)
        console.log(e)})  ;
    }
 
}
const nextPage= async(page)=>{
  console.log("NEXT PAGE");
  setCurrentpage(()=>(currenPage+1))
  if( searched ){
    const data = await getSearchedData(searchitem , page).then((res)=>{
      console.log(res)
      setTotalItem(()=>res.length)
      console.log(res.length);
      console.log("RESPONSE IS",res)
    setlist(res);
  }
    ).
    catch((e)=>{console.log(e)})  ;
  }
  else{
    const data = await getSpecified(page).then((res)=>{
      console.log(res)
      setTotalItem(()=>res.length);
      console.log(res.length);
      console.log("RESPONSE IS",res)
    setlist(res);
  }
    ).
    catch((e)=>{console.log(e)})  ;
  }

}

const handleDelete= async  (id)=>{
  console.log("DELETE CALLED " , id)
  const data = await deleteEntity(id).then((res)=>{
    console.log(res)
 
}
  ).
  catch((e)=>{console.log(e)})  ;
}


const getSearchedItem=()=>{
  console.log("SREARCH")
  console.log(searchitem);
  setSearchClicked(()=>true);
  setCurrentpage(()=>1);
  getSearchedData(searchitem , currenPage).then((res)=>{
    console.log(res);
    setlist(()=>res);
    setTotalItem(()=>res.length);
  })

}

  return store.getState().Loading.isLoading == true?  (
    <div className="departmentlistpage">
              <i className="fas fa-spinner fa-pulse fa-2x "></i>
      </div>
  ):
  (
    <div className="departmentlistpage">
     
         
         

    
      
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
            <h5>Department</h5>
 
    

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
                  name="search"
                  placeholder="Search patient by full name"
                  value={ searchitem}
                  onChange={(e)=>setSearchitem((e.target.value))}
          
                />

                <button
                onClick={()=>getSearchedItem()}
                  type="submit"
                  className="searchButton"
                >
                  <i className="fa fa-search"></i>

                
                </button>
              </div>
            </li>
            <li style={{ fontSize: "12px" }}> #</li>
            <li tyle={{ fontSize: "12px" }}>
  {totalitem}
              
              {" "}
            </li>
          </ul>

          {searched == true ? <button className="btn btn-info float-left" onClick={()=>{
  setSearchClicked(false);
  window.location.reload();
}}> See All </button> : null }

        </div>

<Link to={{pathname: "adddepartment",
                    state:{  
                      showmodal: true,
                   
                    }
                    
                    }}  >
<button
          type="button"
          className="btn btn-warning"
        
        >
          + Add Department
        </button>
</Link>


       
      </div>
      <table className="table table-striped">
        <thead className="thead tablehead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">City ID</th>
            <th scope="col">Clinic ID</th>
      
            <th scope="col">Options</th>
            {/* <th scope="col">Email</th> */}
       
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
                      {((currenPage-1)*10+index) +1 }
                        </td>

                        <td className="align-middle">
                    {p?.id  }
                        </td>
                        {/* <td className="align-middle">
                    {p?.imageUrl}
                        </td> */}
                        <td className="align-middle">
                          <img style={{
                            width:"100px",
                            height:"100px",
                           objectFit:"contain"
                            }} src=  {p?.imageUrl !=null || p?.imageUrl != "undefined" ? p?.imageUrl:""  } alt="" srcset="" />
               
                        </td>
                     
                        <td className="align-middle">
                       {p?.name }
                        </td>
                     
                    
                        <td className="align-middle">
           
                    {p?.city_id}
                        </td>
                        <td className="align-middle">
                    {p?.clinic_id}
                        </td>
                     
                 
                    <td className="align-middle">
                      <Link to={{pathname: "editdepartment",
                    state:{  
                      personDetails: p,
                      collectionName: "Department",
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
                        onClick={() => { handleDelete( p.id ) }}
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

    <div class="loadmoredatasections">
    <div class="nomoredatatext"><button type="button" class="btn btn-warning" onClick={()=>prevPage(currenPage-1)} disabled={currenPage <= 1 ? true:false} >Previous</button>
    </div>
   
      <div class="nomoredatatext"><button type="button" class="btn btn-warning" disabled={totalitem < 10 ? true : false} onClick={()=>nextPage(currenPage+1)}   >Next</button>
      </div>
      </div>
    </div>
 
  </div>
  )

}
export default Department

















