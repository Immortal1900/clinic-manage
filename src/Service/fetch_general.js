
import axios from "axios";
import {URLS}  from './config'; 

const ms = Date.now();
const nocache = "&t="+ ms;

axios.defaults.baseURL = URLS.BASE_URL;


export function getSpecified(url,page = 1) {
  console.log("URLS.BASE_URL" ,URLS.BASE_URL)
  console.log("URL IS" ,url)
  console.log("CURRENT PAGE",page);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: url  + page + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getFileDoctor(doctor_id) {
  console.log("URLS.BASE_URL" ,URLS.BASE_URL)

  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_FILE_FOR_DOCTOR  + doctor_id+ nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export  async function  addDiagnosis  (title,clinicId) {
  console.log("URLS.ADD_DIAGNOSIS",title);
  let formData = new FormData();    //formdata object
//   for (var key in params) {
//     if (params.hasOwnProperty(key)) {
//         console.log(key + " -> " + params[key]);
//     }    
// }
formData.append('clinic_id', clinicId);
formData.append('title',title);
  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: URLS.ADD_DIAGNOSIS,
      data : formData,
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
})}
export  async function  addFeesByClininId  (title,clinicId) {
  console.log("URLS.ADD_DIAGNOSIS",title);
  let formData = new FormData();    //formdata object
//   for (var key in params) {
//     if (params.hasOwnProperty(key)) {
//         console.log(key + " -> " + params[key]);
//     }    
// }
formData.append('clinic_id', clinicId);
formData.append('title',title);
  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: URLS.ADD_FEE,
      data : formData,
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
})}

export  async function  addExamByClininId  (title,clinicId) {
  console.log("URLS.ADD_DIAGNOSIS",title);
  let formData = new FormData();    //formdata object
//   for (var key in params) {
//     if (params.hasOwnProperty(key)) {
//         console.log(key + " -> " + params[key]);
//     }    
// }
formData.append('clinic_id', clinicId);
formData.append('title',title);
  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: URLS.ADD_EXAM ,
      data : formData,
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
})}

export function getUserByPhno(phno) {
  console.log("URLS.BASE_URL" ,URLS.BASE_URL)

  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_USER_BY_PHONE  + phno,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}


export function getDiagnosisByClinicId() {
  console.log("URLS.BASE_URL" ,URLS.BASE_URL)

  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_DIAGNOSIS_BY_CLINICID  + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}



export function getClinicU(url, ) {
  let page =1;
  console.log("URLS.BASE_URL" ,URLS.BASE_URL)
  console.log("URL IS" ,url)
  console.log("CURRENT PAGE",page);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: url  + page + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}
export function getAllDocByDoctId( docid ) {
  console.log("CURRENT docid",docid);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_DOCTOR_BY_CLINIC_ID  + docid + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}




 export  async function  getSpecifieds  (params) {
  //const ms = Date.now();
  //  let res = await fetch('https://techashna.com/myclinic/kuwait/api/get_all_user.php' + 't='+ms,{
  //    'Cache-Control': 'no-cache',
  //    "Content-Type": "multipart/form-data" 
  //  });
//
  //  let json = await res.json();
  //  console.log("JSON IS " , json);




    await  axios({
          method:'get',
          url:"https://techashna.com/myclinic/kuwait/api/get_all_user.php" ,
   
   
      }).then((res)=>{
          console.log(res.txt);
          console.log(res.data[0].age);
          let data = res.data[0].age;
          return data;

      }).catch((e)=>{

          console.log(e)
      })

  



    
}
export  async function  getSearchedData  (url,params,page) {
  
  // const ms = Date.now();
  //   let res = await fetch(URLS.SEARCH + params,{
  //     'Cache-Control': 'no-cache',
  //     "Content-Type": "multipart/form-data" 
  //   });

  //   let json = await res.json();
  //   console.log("JSON IS " , json);

   
      console.log("URL IS" , url);
      console.log("PARAMS" , params);
      console.log("PAGE IS" . page)

      return new Promise((resolve, reject) => {
        axios({
          method:'get',
          url:url  + params + "&page=" + page  + nocache,
      }).then((res)=>{
        console.log(res);
        console.log(res.data);
        let data = res.data
          resolve(data);
      }).catch((e)=>{
          console.log(e)
          reject(e);
      })
    })
}

export  async function  updatePersonData  (url,params) {
  console.log("called",params);
  let formData = new FormData();    //formdata object
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
        console.log(key + " -> " + params[key]);
        formData.append(key, params[key]);
    }
}




  
  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: url,
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

export  async function  addPersondetail  (url,params) {
  console.log("DATA",params.firstname);
  let formData = new FormData();    //formdata object
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
     
        console.log(key + " -> " + params[key]);
        formData.append(key, params[key]);
    }
}


  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: url,
      data : formData,
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




export  async function  deleteEntity  (url, dbname ,id ) {

  let formData = new FormData();    //formdata object


formData.append('id', id); 
formData.append('dbName', dbname )
  
  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url:url,
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