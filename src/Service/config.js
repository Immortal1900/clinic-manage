const ms = Date.now();
const nocache = "?t="+ ms;
export const URLS = {

    BASE_URL : "https://techashna.com/myclinic/kuwait/api/",
    GET_PATIENT : "get_all_user.php?page=" ,
    UPDATE_USER:"update_user"  + nocache,
    ADD_USER: "add_user" +nocache,
    SEARCH:"get_all_user?sr=" ,


    /***********CLINIC*********** */

    GET_CLINIC: "/get_all_clinic?page=",
    ADD_CLINIC: "add_clinic",
    UPDATE_CLINIC: "update_clinic",
    DELETE_CLINIC: "deleted_updated",
    /************Doctor********** */
    ///get_dr_by_clinicdept?page=1&sr=&deptId=1&clinicId=1
    GET_DOCTOR : "get_all_dr?page=",
    SEARCH_DOCTOR:"get_all_dr?sr=" ,


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
}