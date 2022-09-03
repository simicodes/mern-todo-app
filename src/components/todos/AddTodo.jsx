import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todosActions";

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

const AddTodo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(todo));

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
        onChange={(e) =>
          setTodo({ ...todo, name: e.target.value, date: new Date() })
        }
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
