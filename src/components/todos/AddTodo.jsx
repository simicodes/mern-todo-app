import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/actions/todosActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };
  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.formStyle}
      onSubmit={handleSubmit}
    >
      <TextField
        id="enter-todo"
        label="enterToDo"
        variant="outlined"
        autoFocus
        fullWidth
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <Button
        className={classes.submitButton}
        color="primary"
        variant="contained"
        type="submit"
      >
        <Send />
      </Button>
    </form>
  );
};

export default AddTodo;
