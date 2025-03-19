import React from 'react'
import Landing from '../../components/landing'
import HeroSection from '../../components/landing/heroSection'
import FirstPartOfLanding from '../../components/landing/firstPartOfLanding'
import ListDoreHa from '../../components/landing/listDoreHa'
import GoodTeacher from '../../components/landing/goodTeacher'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <FirstPartOfLanding/>
      <ListDoreHa/>
      <GoodTeacher/>
    </div>
  )
}

export default LandingPage