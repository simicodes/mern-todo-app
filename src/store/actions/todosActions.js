import axios from "axios";
import { url } from "../../api";

export const getTodos = () => {
  return (dispatch) => {
    // performing async action with axios
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({ 
          type: "GET_TODOS",
          todos,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch, getState) => {
    // performing async action with axios
    axios
      .post(`${url}/todos`, todo)
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
