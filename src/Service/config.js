const ms = Date.now();
const nocache = "?t="+ ms;
export const URLS = {

    DELETE_ENTITY:"deleted_updated",


    BASE_URL : "https://techashna.com/myclinic/kuwait/api/",
    GET_PATIENT : "get_all_user.php?page=" ,
    UPDATE_USER:"update_user"  + nocache,
    ADD_USER: "add_user" +nocache,
    SEARCH:"get_all_user?sr=" ,
    GET_USER_BY_PHONE:"get_user_by_phn?phn=",

    /***********CLINIC*********** */

    GET_CLINIC: "/get_all_clinic?page=",
    ADD_CLINIC: "add_clinic",
    UPDATE_CLINIC: "update_clinic",
    DELETE_CLINIC: "deleted_updated",
    GET_DIAGNOSIS_BY_CLINICID:"get_digno_by_clinicid?clinic_id=",

    /************Doctor********** */
    ///get_dr_by_clinicdept?page=1&sr=&deptId=1&clinicId=1
    GET_DOCTOR : "get_all_dr?page=",
    SEARCH_DOCTOR:"get_all_dr?sr=" ,
    ADD_DOCTOR:"add_doctors",
    UPDATE_DOCTOR:"update_drprofile",


    GET_DOCTOR_TIMESLOTS:"get_doct_timelsot?doctId=",
    ADD_DOCTOR_TIMELOT :"add_doct_timeslot",

    /************Department ******** */
    GET_DEPT : "get_dep?page=",
    ADD_DEPT : "add_department",
    UPDAT_DEPT : "update_department",
    SEARCH_DPT :"get_dep?sr=",


    /************City ******** */
    GET_CITY : "get_city?page=",
    ADD_CITY : "add_city",
    UPDAT_CITY : "update_city",
    SEARCH_CITY :"get_city?sr=",
    DELETE_CITY: "deleted_updated",
    CITY_DB_NAME:'city',

    /************Department ******** */





    /***************CLININC LOGIN */

    LOGIN_CLINIC:"clinic_login",





    /**************GET ALL LISTING ************* */

    GET_ALL_CLINIC: "get_all_clinic",
    GET_ALL_DEPT:"get_dep",
    GET_ALL_CITY:"get_all_city",
    GET_ALL_CLINIC_BY_CITY:"get_all_clinic_bycity?city_id=",
    GET_ALL_DIAGNOSIS:"get_digno_by_clinicid?clinic_id=",
    GET_ALL_DEPT_CLINIC_ID:"get_all_dept_by_clinic?clinicId="

}