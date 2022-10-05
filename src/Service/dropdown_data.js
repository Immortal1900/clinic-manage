
import axios from "axios";
import {URLS}  from './config'; 

const ms = Date.now();
const nocache = "?t="+ ms;
const nocache_1 = "&t=" + ms;
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

export function getAllCLinicByCityId( cityId ) {
  console.log("CURRENT cityId",cityId);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_CLINIC_BY_CITY  + cityId + nocache_1,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getAllDocByClinicId(clinicId){
  console.log("CURRENT clinicId",clinicId);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_DOCTOR_BY_CLINIC_ID  + clinicId + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}


export function getAllDeptByClinicId( clinicId ){
  console.log("CURRENT clinicId",clinicId);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_ALL_DEPT_CLINIC_ID  + clinicId + nocache,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getAllFeesByClinicId( clinicId ){
  console.log("CURRENT clinicId",clinicId);
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_FEE_BY_CLINIC_ID  + clinicId + nocache,
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
      url: URLS.GET_ALL_DIAGNOSIS  + clinicId +nocache_1,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}

export function getAllExamByClinicId( clinicId ) {
  console.log("GET ALL CITY");
  return new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: URLS.GET_EXAM_BY_CLINIC_ID  + clinicId + nocache_1,
  }).then((res)=>{
      console.log(res);
      resolve(res.data);
  }).catch((e)=>{
      console.log(e)
      reject(e);
  })
})
}


