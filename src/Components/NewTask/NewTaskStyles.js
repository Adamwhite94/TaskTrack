import styled from "styled-components";
import newtaskbg from "../../Images/newtaskbg.jpg";
import { device } from "../Breakpoints/Breakpoints";

const NewTaskContainer = styled.div`
background-image: url(${newtaskbg});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
text-align: center;
margin: auto;
padding: 0;
height: 100vh;

`;
const NewTaskElements = styled.div`


`;
const NewTaskInputContainer = styled.form`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 1rem;
padding-top: 5rem;
background-color: black;
width: 30vw;
height: 100vh;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
width: 100vw;
 display:flex;
 align-items: center;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 100vw;
 display:flex;
 align-items: center;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  width: 55vw;
 display:flex;
 align-items: center;
}
@media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
  width: 42vw;
 display:flex;
 align-items: center;
}
`;
const NewTaskInput = styled.input`
width: 20rem;
height: 2rem;
`;
const NewTaskTitle = styled.h1`
font-size: 4rem;
height: 0;


`;
const NewTaskSmallTitle = styled.h3`
color: #fff;
font-size: 1rem;
margin-left: 0.8rem;

`;
const NewTaskButton = styled.button`
width: 8rem;
height: 2rem;
margin-top: 2rem;
font-weight: bold;
background: none;
color: #fff;
border: 1px solid white;
&:hover{
cursor: pointer;
}
`;

const NewTaskLabel = styled.label`
color: #fff;
text-shadow: 2px 0px 1px rgba(51, 51, 51, 1);
font-size: 1rem;
height: 0.4rem;

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
 

}
