import React, {useState} from "react";
import { Outlet, useNavigate} from "react-router-dom";
import {
  NewTaskContainer,
  NewTaskElements,
  NewTaskInput,
  NewTaskInputContainer,
  NewTaskTitle,
  NewTaskSmallTitle,
  NewTaskButton,
  NewTaskLabel,
  NewTaskImageContainer,
  NewTaskImage,
} from "./NewTaskStyles";
import newtaskbg from "../../Images/newtaskbg.jpg";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { NewTaskContext } from "../Contexts/Context";
function NewTask() {
  
  const [value, setValue] = useState('');
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitHandler = (data) => {
      setValue(data);
      navigate('/currenttasks')
      
  }
  // useformcontext is the answer
  return (
    <NewTaskContainer>
      <NewTaskElements>

        <NewTaskInputContainer onSubmit={handleSubmit(submitHandler)}>
          <NewTaskTitle>Task Track</NewTaskTitle>
          <NewTaskSmallTitle>Add a new Task</NewTaskSmallTitle>
          <NewTaskLabel>What class is this for?</NewTaskLabel>
          <NewTaskInput {...register("classID", {required:true})} name="classID" type='text' placeholder="Class ID"/>

          <NewTaskLabel>What is the name of this task?</NewTaskLabel>
          <NewTaskInput {...register("taskName")} name="taskName"  type='text' placeholder="Class Name" />

          <NewTaskLabel>Give a description of this task</NewTaskLabel>
          <NewTaskInput {...register("taskDescr")} name="taskDescr" type='text' placeholder="Task Description" />

          <NewTaskLabel>When is this task due?</NewTaskLabel>
          <NewTaskInput {...register("taskDate")} type="date" name="taskDate" />

          <NewTaskButton type="submit">Add Task</NewTaskButton>
        </NewTaskInputContainer>

        <NewTaskImageContainer>
          <NewTaskImage src={newtaskbg} alt="book image" />
        </NewTaskImageContainer>
      </NewTaskElements>
      <Outlet />
    </NewTaskContainer>
  );
}



export default NewTask;
