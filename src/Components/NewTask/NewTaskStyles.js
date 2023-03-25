import styled from "styled-components";



const NewTaskContainer = styled.div`


`;
const NewTaskElements = styled.div`
display:flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;


`;
const NewTaskInputContainer = styled.form`
display:flex;
flex-direction: column;
padding-left: 12rem;
padding-top: 3rem;
align-items:center;
gap: 1rem;



`;
const NewTaskInput = styled.input`
width: 20rem;
height: 2rem;
`;
const NewTaskTitle = styled.h1`
font-size: 4rem;

height: 0rem;


`;
const NewTaskSmallTitle = styled.h3`
color: #fff;
font-size: 2rem;

`;
const NewTaskButton = styled.button`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;

`;

const NewTaskLabel = styled.label`
color: #fff;
height: 0.7rem;
`;

const NewTaskImageContainer = styled.div`


`;
const NewTaskImage = styled.img`
  background-repeat: no-repeat;
  background-position: center right;
  height: 100%;
  right: 0;
  position: absolute;
  top: 0;
  width: 50%;
`;


export {
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

}
