import {
  ADD_CONTACT,
  GET_CONTACT,
  PUT_CONTACT,
  DELETE_CONTACT
} from "../action/ActionType";
const initialState = [];
const contactReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return action.payload

    case ADD_CONTACT:
      return [...state, action.payload]


    case PUT_CONTACT:
      return action.payload;

    case DELETE_CONTACT:
      return state.filter(el=> el._id !==action.payload);

    default:
      return state;
  }
};

export default contactReduce;
