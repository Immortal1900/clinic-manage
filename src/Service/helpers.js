import Moment from 'moment';






export  function  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    console.log("AGE IS " , age);
    return age;
}

export function changeFormat(date){
  //const mydate =   date.toDateString();
  //return mydate;


  const mydate  = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return mydate; 
}
export function changeFormatdmy(date){
  //const mydate =   date.toDateString();
  //return mydate;


  const mydate  = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return mydate; 
}

export function changeFormatmdy(date){
  //const mydate =   date.toDateString();
  //return mydate;


  const mydate  = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  return mydate; 
}


export function getdaycode(date){
  //const mydate =   date.toDateString();
  //return mydate;


  //const mydate  = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  return `${date.getDate()}`; 
}