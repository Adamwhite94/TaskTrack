import React from 'react'
import {HomeContainer, HomeElements, HomeTitle, HomeTitleContainer, HomeMainTitle} from './HomeStyles'

import {useNavigate} from 'react-router-dom'

function Home() {
  
  let navigate = useNavigate();
  return (
    <HomeContainer>
      <HomeElements>
          <HomeMainTitle>TaskTrack</HomeMainTitle>
        <HomeTitleContainer>
          <HomeTitle onClick={()=>navigate('/newtask')}>Add a new Task</HomeTitle>
          <HomeTitle onClick={()=>navigate('/currenttasks')}>View Current Tasks</HomeTitle>
        </HomeTitleContainer>
      </HomeElements>
    </HomeContainer>
  )
}

export default Home