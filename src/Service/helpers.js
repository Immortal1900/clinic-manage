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