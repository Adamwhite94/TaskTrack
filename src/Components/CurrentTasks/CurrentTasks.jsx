import React from "react";
import { Outlet } from "react-router-dom";
import {
  CurrentTaskContainer,
  CurrentTaskElements,
  CurrentTaskTitle,
  CurrentTaskGridContainer,
  CurrentTaskGridElement,
} from "./CurrentTasksStyles";
import taskStore from "../../Store";

const CurrentTasks = () => {
  const { tasks, deleteTask,toggleTask } = taskStore((state) => {
    return { tasks: state.tasks, deleteTask: state.deleteTask, toggleTask: state.toggleTask };
  });

  return (
    <CurrentTaskContainer>
      <CurrentTaskElements>
        <CurrentTaskTitle>These are your current Tasks</CurrentTaskTitle>

        {tasks.map((task) => {
          return (
            <CurrentTaskGridContainer key={task.id}>
              <CurrentTaskGridElement
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTask(task.id)}
              >  {task.text}</CurrentTaskGridElement>
              
            </CurrentTaskGridContainer>
            
          );
        })}
      </CurrentTaskElements>
    
      <Outlet />
    </CurrentTaskContainer>
  );
};

export default CurrentTasks;
