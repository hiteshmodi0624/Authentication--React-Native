import axios from "axios";
const API_KEY="AIzaSyDH0I9x4RpuDEONJdFpUxg07f1Scx_iF9I"

async function authenticate(mode,email,password){
    const response =await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`+API_KEY,{
        email,
        password,
        returnSecureToken:true
    })
    return response.data.idToken;
}
export  function createUser(email,password){
    return authenticate("signUp",email,password)
}
export async function loginUser(email,password){
    return authenticate("signInWithPassword",email,password)
}
