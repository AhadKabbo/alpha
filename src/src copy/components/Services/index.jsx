import React from 'react'
import Icon1 from '../../images/services3a.svg'
import Icon2 from '../../images/services2a.svg'
import Icon3 from '../../images/services1a.svg'
import Icon4 from '../../images/services4a.svg'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesH4, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Be an Influencer for Other</ServicesH2>
          <ServicesP>We want to sell your social influence, your online media dominance to help other to grow their Business Marketing ...</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Find a Influencer for You</ServicesH2>
          <ServicesP>We want to help  to grow your Business rapidly by providing a big number of influencer community support ...</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon4}/>
          <ServicesH4>Go Live  </ServicesH4>
          <ServicesP>Streaming Live you can share your thoughts and take community support, also make your new follower...</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Community and Blogs</ServicesH2>
          <ServicesP>SignUp and introduce youself to our community, perticipate to our event and post your blogs share us your thoughts...</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
