
import axios from "axios";
import {URLS}  from './config'; 

 export  async function  getSpecified  (params) {

    let res = await fetch('https://techashna.com/myclinic/api/get_all_user.php');
    let json = await res.json();
    console.log("JSON IS " , json);
    return json;
    
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
  formData.append('lastName', 20);
  formData.append('mrd', 20);
  formData.append('city', 20);
  formData.append('email', 20);
  formData.append('uId', 20);
  formData.append('gender', 20);
  formData.append('age', 20);

  let res = await fetch('https://techashna.com/myclinic/kuwait/api/update_user', {
    // content-type header should not be specified!
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(success => {
      console.log(success)
      // Do something with the successful response
    })
    .catch(error => console.log(error)
  );
}




