import axios from "axios";
import {URLS}  from './config'; 

export  async function  login_clinic  (params) {
    console.log("called",params);
    let formData = new FormData();    //formdata object
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
          console.log(key + " -> " + params[key]);
      }
  }
  
  formData.append('pass', params.pass); 
  formData.append('email', params.email);   //append the values with key, value pair

  
    
    return new Promise((resolve, reject) => {
      axios({
        method:'post',
        url: URLS.LOGIN_CLINIC,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((res)=>{
        console.log(res);
   
         if(res.data == "error"){
          reject('error')
        }
        else{
          resolve(res.data);
        }
      //  else{
      //    reject(res.data)
      //  }
    }).catch((e)=>{
        console.log(e)
        reject(e);
    })
  })
  
  
  }