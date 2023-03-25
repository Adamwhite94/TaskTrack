import React from "react";
import { Outlet } from "react-router-dom";
import {CurrentTaskContainer, CurrentTaskElements, CurrentTaskTitle, CurrentTaskGridContainer, CurrentTaskGridElement} from './CurrentTasksStyles'

const CurrentTasks = () => {
  return (
    <CurrentTaskContainer>
      <CurrentTaskElements>
        <CurrentTaskTitle>These are your current Tasks</CurrentTaskTitle>
    
      <CurrentTaskGridContainer>
        <CurrentTaskGridElement>Test1</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test2</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test3</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test4</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test5</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test1</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test2</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test3</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test4</CurrentTaskGridElement>
        <CurrentTaskGridElement>Test5</CurrentTaskGridElement>
      </CurrentTaskGridContainer>
      {/* each grid element will be mapped, containing attributes based on context api */}

      </CurrentTaskElements>
     
      <Outlet />
    </CurrentTaskContainer>
  );
};

export default CurrentTasks;
