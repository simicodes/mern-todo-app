import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getTodos = () => {
  return (dispatch) => {
    // performing async action with axios
    axios
      .get(`${url}/todos`, setHeaders())
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

export const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;
    // performing async action with axios
    axios
      .post(`${url}/todos`, { ...newTodo, author, uid }, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateTodo = (updatedTodo, id) => {
  return (dispatch) => {
    // performing async action with axios
    axios
      .put(`${url}/todos/${id}`, updatedTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "UPDATE_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const checkTodo = (id) => {
  return (dispatch) => {
    // performing async action with axios
    axios
      .patch(`${url}/todos/${id}`, {}, setHeaders())
      .then((todo) => {
        dispatch({
          type: "CHECK_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    // performing async action with axios
    axios
      .delete(`${url}/todos/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
