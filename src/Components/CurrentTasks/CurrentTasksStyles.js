import styled from "styled-components";
import currenttaskbg from "../../Images/currenttaskbg.jpg";
import { device } from "../Breakpoints/Breakpoints";

const CurrentTaskContainer = styled.div`
background-image: url(${currenttaskbg});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
text-align: center;
margin: auto;
padding: 0;
height: 100vh;

`;
const CurrentTaskElements = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 1rem;
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
const CurrentTaskTitle = styled.h1`
font-size: 2rem;
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 1.7rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    font-size: 1.7rem;
}
@media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
    font-size: 1.7rem;
}
`;
const CurrentTaskGridContainer = styled.div`

`;
const CurrentTaskGridElement = styled.button`
width: 25rem;
height: 3rem;
display:flex;
justify-content: center;
align-items: center;
background:none;
border: 0.5px solid white;
color: #fff;
font-size: 1rem;
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