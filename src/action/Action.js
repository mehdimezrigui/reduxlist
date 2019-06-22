import {
  ADD_CONTACT,
  GET_CONTACT,
  PUT_CONTACT,
  DELETE_CONTACT
} from "./ActionType";
import axios from 'axios';

export const getcontact = () => {
  return dispatch => {
    axios
      .get("/contact")
      .then(res => res.data)
      .then(payload => dispatch({ type: GET_CONTACT, payload }))
      .catch(err => console.log("err"));
  };
};

export const addcontact = (payload) => {
    return dispatch =>{
        axios
        .post('/add_contact', payload)
        .then(res=> dispatch({ type: ADD_CONTACT,  payload }))
        .then(()=>getcontact())
        .catch(err=> console.log("err"))      
        };
};
export const putcontact = payload => {
  return dispatch=>{
    axios
    .put('/modify_contact/'+payload)
    .then(res => dispatch({ type: PUT_CONTACT, payload }))
    .then(()=>getcontact())
    .catch(err=> console.log("err"))  
    

 };
};
export const deletecontact = payload => {
  return dispatch =>{
        axios
        .delete('/delete_contact/'+ payload)
        .then(res => dispatch({ type: DELETE_CONTACT, payload }))
        .then(()=>getcontact())
        .catch(err=> console.log("err")) 
 }; 
};
