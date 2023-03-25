import styled from "styled-components";

const CurrentTaskContainer = styled.div`



`;
const CurrentTaskElements = styled.div`
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
padding-top: 4rem;

`;
const CurrentTaskTitle = styled.h1`
text-align: center;
font-size: 3rem;

`;
const CurrentTaskGridContainer = styled.div`
 display: grid;
  justify-content: center;
  align-content: center;
  gap: 4px;
  grid-auto-flow: row;
  grid-template-columns: 1fr auto auto 1fr
`;
const CurrentTaskGridElement = styled.button`
width: 10rem;
height: 6rem;
display:flex;
justify-content: center;
background:none;
border: 0.5px solid white;
color: #fff;
&:hover{
    background-color: red;
    cursor:pointer;
 
}
`;



export {
    CurrentTaskContainer,
    CurrentTaskElements,
    CurrentTaskGridContainer,
    CurrentTaskGridElement,
    CurrentTaskTitle,
   

    
}