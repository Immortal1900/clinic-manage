class UploadFileService{
    addUrl=  'https://techashna.com/myclinic/kuwait/api/upload_emp_files.php' //'http://127.0.0.1:8000/api/add_files';
    
    async addData(selectedFile,fileName , doctorId) {

        console.log("FILE" , selectedFile);
        console.log("FILE NAME", fileName);
        console.log("DOCTOR ID",doctorId)
      const formData = new FormData();
     formData.append("file", selectedFile);
     formData.append("file_name", fileName);
     formData.append("files_for", '1');
     formData.append("files_for_id", doctorId);
     formData.append("file_cat", '1');
     
      try{
      // Default options are marked with *
      const response = await fetch(this.addUrl, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: formData // body data type must match "Content-Type" header
        });
    
          if(response.status==200){
            const data = await response.json();
            console.log("-----------------------------------------")
            console.log(data);
     
            return data; 
        
          }
          else return"error";
        }catch(e){
  
          return"error";
        }
    
     // parses JSON response into native JavaScript objects
    }

    // async addData(selectedFile,fileName) {
    //     const formData = new FormData();
    //     formData.append("file", selectedFile);
    //    formData.append("name", fileName);
    //     try{
    //     // Default options are marked with *
    //     const response = await fetch(this.addUrl, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //           'Authorization':"Bearer 5|Z4aJXNidNHKwpTabBW28EcSYxlGrJoGs0Vlvungc"
    //           // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         redirect: 'follow', // manual, *follow, error
    //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         body: formData // body data type must match "Content-Type" header
    //       });
    //         if(response.status==200){
    //           const data = await response.json();
    //           if(data['response']==201||data['response']==200)
    //           return data; 
    //           else return "error";
    //         }else return"error";
    //       }catch(e){
    
    //         return"error";
    //       }
      
    //    // parses JSON response into native JavaScript objects
    //   }
}
export default new UploadFileService();

