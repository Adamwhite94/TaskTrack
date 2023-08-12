import styled from "styled-components";
import Background from "../../Images/Homebg1.jpg";
import { device } from "../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }



const HomeContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  margin: auto;
  padding: 0;
  height: 100vh;
`;
const HomeElements = styled.div`
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
const HomeTitle = styled.button`
  width: 23rem;
  height: 5rem;
  margin-top: 2rem;
  font-weight: bold;
  background: none;
  color: #fff;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  width: 20rem;

}
 
`;
const HomeMainTitle = styled.h1`
color: #fff;
font-size: 5rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 3rem;

}
`;
const HomeTitleContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`;

export { HomeContainer, HomeElements, HomeTitle, HomeTitleContainer, HomeMainTitle };
