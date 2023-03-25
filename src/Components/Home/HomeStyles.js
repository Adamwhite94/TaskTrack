import styled from "styled-components";

const HomeContainer = styled.div``;
const HomeElements = styled.div``;
const HomeTitle = styled.h1`
  font-size: 3rem;
  color: white;
  position: relative;
  font-weight: 1000;
  padding-top: 4rem;
`;
const HomeImageMain = styled.img`
  background-repeat: no-repeat;
  background-position: center left;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  filter: brightness(40%);


  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;
const HomeImageSecond = styled.img`
  background-repeat: no-repeat;
  background-position: center right;
  height: 100%;
  right: 0;
  position: absolute;
  top: 0;
  width: 50%;
  filter: brightness(40%);
 

  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;

const HomeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 11rem 0 12rem;
  align-items: center;
`;

export {
  HomeContainer,
  HomeElements,
  HomeTitle,
  HomeImageMain,
  HomeImageSecond,
  HomeTitleContainer,
};
