
import axios from "axios";
import {URLS}  from './config'; 



axios.defaults.baseURL = URLS.BASE_URL;


export function getSpecified(val, values) {
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_PATIENT,
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

          console.log(res.data[0].age);
          let data = res.data[0].age;
          return data;

      }).catch((e)=>{

          console.log(e)
      })

  



    
}


export  async function  updatePersonData  (params) {
  
  console.log("called",params);
  let formData = new FormData();    //formdata object


  for (var key in params) {
    if (params.hasOwnProperty(key)) {
        console.log(key + " -> " + params[key]);
    }
}

  formData.append('firstName', params.firstName);   //append the values with key, value pair
  formData.append('lastName',params.lastName );
  formData.append('mrd', params.mrd);
  formData.append('city', params.city);
  formData.append('email', params.email);
  formData.append('uId', params.uid);
  formData.append('gender', params.gender);
  formData.append('age', params.age);


  return new Promise((resolve, reject) => {
    axios({
      method:'post',
      url: URLS.UPDATE_USER,
      body: formData+"ASDAsD",
  }).then((res)=>{
      console.log(res);

      if(res.data == "success"){
        resolve(res.data);
      }
      else if(res.data == "error"){
        reject('error')
      }
      else{
        reject(res.data)
      }
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})


}




