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
}