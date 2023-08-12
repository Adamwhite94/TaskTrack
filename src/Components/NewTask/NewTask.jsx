import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  NewTaskContainer,
  NewTaskElements,
  NewTaskInput,
  NewTaskInputContainer,
  NewTaskTitle,
  NewTaskSmallTitle,
  NewTaskButton,
  NewTaskLabel,
} from "./NewTaskStyles";
import taskStore from "../../Store";

function NewTask() {
  const addTask = taskStore((state) => state.addTask);
  const [text, setText] = useState("");
  const [classid, setClassID] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(classid, text);
    setText("");
    navigate("/currenttasks");

  };

  return (
    <NewTaskContainer>
      <NewTaskElements>
        <NewTaskInputContainer onSubmit={submitHandler}>
          <NewTaskTitle>Task Track</NewTaskTitle>
          <NewTaskSmallTitle>Add a new Task</NewTaskSmallTitle>
          <NewTaskLabel>Class ID</NewTaskLabel>
          <NewTaskInput
            type="text"
            value={classid}
            onChange={(e) => setClassID(e.target.value)}
          />
          <NewTaskLabel>Task Name</NewTaskLabel>
          <NewTaskInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <NewTaskButton type="submit">Add Task</NewTaskButton>
        </NewTaskInputContainer>
      </NewTaskElements>
      <Outlet />
    </NewTaskContainer>
  );
}

export default NewTask;
