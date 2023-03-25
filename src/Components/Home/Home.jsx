import React from 'react'
import {HomeContainer, HomeElements, HomeTitle, HomeImageMain, HomeImageSecond, HomeTitleContainer} from './HomeStyles'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import HomeImageLeft from '../../Images/Homebg1.jpg'
import HomeImageRight from '../../Images/Homebg2.jpg'

import {useNavigate} from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  return (
    <HomeContainer>
      <HomeElements>
        <HomeImageMain onClick={()=>navigate('/newtask')} src={HomeImageLeft} alt='LeftImageWithBlur'/>
        <HomeImageSecond onClick={()=>navigate('/currenttasks')} src={HomeImageRight} alt='RightImageWithBlur'/>
        <HomeTitleContainer>
          <HomeTitle>Add a new Task</HomeTitle>
          <HomeTitle>View Current Tasks</HomeTitle>
        </HomeTitleContainer>
      </HomeElements>
    </HomeContainer>
  )
}

export default Home