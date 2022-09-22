
import axios from "axios";
import {URLS}  from './config'; 

const ms = Date.now();
const nocache = "?t="+ ms;

axios.defaults.baseURL = URLS.BASE_URL;


export function getAllCLinic(page) {
  console.log("CURRENT PAGE",page);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_CLINIC  + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getAllCity() {
  console.log("GET ALL CITY");
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_CITY  + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getAllDiagnosis( clinicId ) {
  console.log("GET ALL CITY");
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_DIAGNOSIS  + clinicId,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}
